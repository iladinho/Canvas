import React, { useRef } from 'react'
import { CustomTool } from './components/CustomTool'
import { CanvasContainer, ConfiguratorContainer, Wrapper, FlexWrapper } from './components/styled'
import { Canvas } from './components/Canvas'
import { getCanvasProperties } from './components/CanvasProperties'
import { getTextProperties } from './components/TextProperties'
import { getImageProperties } from './components/ImageProperties'
import { useCanvasContext } from './components/Canvas/components/CanvasInterface'
import { CanvasExport } from './components/CanvasExport'
import { CANVAS_SIZE } from "./__mocks__/custom_sign_options"

export const CustomSignTool: React.FC = () => {
  const { setImage, setTextImage } = useCanvasContext()
  const canvasProperties = getCanvasProperties()
  const imageProperties = getImageProperties(canvasProperties.canvasHeight)

  const canvasRef = useRef(null)

  const handleChange = (e: {step: string, value: any}) => {
    switch (e.step) {
      case 'icons' :
        setImage(e.value.src)
        break
      case 'text' :
        setTextImage(
          e.value.image,
          getTextProperties(
            canvasProperties.canvasHeight,
            e.value.offsetHeight,
            e.value.offsetWidth
          ).textComponent
        )
        break
    }
  }

  return (
    <Wrapper>
      <FlexWrapper>
        <CanvasContainer>
          <Canvas
            canvasProperties={canvasProperties}
            imageProperties={imageProperties.imageComponent}
            canvasRef={canvasRef}
          />
          <CanvasExport canvasRef={canvasRef} />
        </CanvasContainer>
        <ConfiguratorContainer>
          <h1>Design Your Canvas</h1>
          <br/>
          <CustomTool
            maxTextHeight={canvasProperties.canvasHeight}
            maxTextWidth={CANVAS_SIZE.width}
            handleChange={handleChange}
          />
        </ConfiguratorContainer>
      </FlexWrapper>
    </Wrapper>
  )
}
