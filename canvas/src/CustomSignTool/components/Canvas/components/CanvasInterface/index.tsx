import React, { createContext, useState } from 'react'

interface CanvasContextInterface {
  setImage: (logo: string) => void
  logoImage: string
  textImage: any
  setTextImage: (textImage: any, textProperties: { x: number, y: number, height: number, width: number, scaleX: number, scaleY: number }) => void
  textProperties: { x: number, y: number, height: number, width: number, scaleX: number, scaleY: number }
}

export const CanvasContext= createContext<CanvasContextInterface>({
  setImage: (logo: string) => undefined,
  logoImage: ' ',
  textImage: ' ',
  setTextImage: (textImage: any, textProperties: { x: number, y: number, height: number, width: number, scaleX: number, scaleY: number }) => undefined,
  textProperties: { x: 0, y: 0, height: 0, width: 0, scaleX: 1, scaleY: 1 }
})

export const CanvasProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState(' ')
  const [textImage, setTextImage] = useState(' ')
  const [textProperties, setTextProperties] = useState()

  async function putImage (txtImg: any) {
    return new Promise(resolve => {
      resolve(txtImg)
    })
  }

  async function setImageState (txtImg: any, textProperties: { x: number, y: number, height: number, width: number, scaleX: number, scaleY: number }) {
    const textImg: any = await putImage(txtImg)
    setTextImage(textImg)
    setTextProperties(textProperties)
  }

  return (
    <CanvasContext.Provider
      value={{
        setImage: (logo: string) => setImage(logo),
        logoImage: image,
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        setTextImage: (textImage: any, textProperties: { x: number, y: number, height: number, width: number, scaleX: number, scaleY: number }) => { setImageState(textImage, textProperties) },
        textImage: textImage,
        textProperties: textProperties
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvasContext = () => {
  const context = React.useContext(CanvasContext)
  if (context === undefined) {
    throw new Error('useCanvasContext must be used within a CanvasProvider')
  }

  return context
}
