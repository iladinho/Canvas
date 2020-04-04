import React from 'react'

interface Props {
  canvasRef: any
}

export const CanvasExport: React.FC<Props> = ({ canvasRef }) => {
  const handleClickImage = () => {
    const dataURL = canvasRef.current.toDataURL({ pixelRatio: 3 })
    downloadURI(dataURL, 'stage.png')
  }

  const handleClickJson = () => {
    alert(canvasRef.current.toJSON())
  }

  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement('a')
    link.download = name
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    // @ts-ignore
    delete document.createElement('a')
  }

  return (
    <>
      <button onClick={handleClickImage}>Generate Image</button>
      <button onClick={handleClickJson}>Generate Json</button>
    </>
  )
}
