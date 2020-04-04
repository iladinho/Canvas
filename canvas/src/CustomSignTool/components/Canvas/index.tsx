import React, { useState } from 'react'
import { Wrapper } from './components/styled'
import { Layer, Stage } from 'react-konva'
import useImage from 'use-image'
import { Vector2d } from 'konva/types/types'
import { getNewPosX, getNewPosY, ImageCanvas } from './components/CanvasImageRenderer'
import { useCanvasContext } from './components/CanvasInterface'
import { CANVAS_SIZE } from "../../__mocks__/custom_sign_options"

interface CanvasProps {
  canvasProperties: {
    canvasHeight: number
  }

  imageProperties: {
    x: number
    y: number
    height: number
    width: number
    scaleX: number
    scaleY: number
  }

  canvasRef: any
}

export const Canvas: React.FC<CanvasProps> = ({ canvasProperties, imageProperties, canvasRef }) => {
  const { logoImage, textImage, textProperties } = useCanvasContext()
  const [img] = useImage(logoImage)
  const [imgText] = useImage(textImage)

  const handleDragBounceImage = (pos: Vector2d) => {
    const newX = getNewPosX(pos.x,
      imageProperties.width * imageProperties.scaleX,
      0,
      CANVAS_SIZE.width - 2
    )
    const newY = getNewPosY(pos.y,
      imageProperties.height * imageProperties.scaleY,
      0,
      canvasProperties.canvasHeight
    )

    return {
      x: newX,
      y: newY
    }
  }

  const handleDragBounceImageText = (pos: Vector2d) => {
    const newX = getNewPosX(pos.x,
      textProperties.width * textProperties.scaleX,
      0,
      CANVAS_SIZE.width - 2
    )
    const newY = getNewPosY(pos.y,
      textProperties.height * textProperties.scaleY,
      0,
      canvasProperties.canvasHeight
    )

    return {
      x: newX,
      y: newY
    }
  }

  const [elementSelected, selectShape] = useState('')
  const ids = { imageId: 'imageId', textId: 'textId' }

  return (
    <Wrapper>
      <div>
        <div>
          <Stage
            width={CANVAS_SIZE.width}
            height={canvasProperties.canvasHeight}
            style={{ border: '1px solid grey' }}
            ref={canvasRef}
          >
            {img !== undefined &&
            logoImage !== ' ' &&
              <Layer>
                <ImageCanvas
                  x={imageProperties.x}
                  y={imageProperties.y}
                  width={imageProperties.width}
                  height={imageProperties.height}
                  img={img}
                  handleDragEvent={handleDragBounceImage}
                  isSelected={elementSelected === ids.imageId}
                  onSelect={(e: any) => {
                    selectShape(ids.imageId)
                  }}
                  onTransformEnd={(e: any) => {
                    imageProperties.scaleX = e.target.attrs.scaleX
                    imageProperties.scaleY = e.target.attrs.scaleY
                  }}
                />
              </Layer>}
            {imgText !== undefined &&
            textImage !== ' ' &&
              <Layer>
                <ImageCanvas
                  x={textProperties.x}
                  y={textProperties.y}
                  width={textProperties.width}
                  height={textProperties.height}
                  img={imgText}
                  handleDragEvent={handleDragBounceImageText}
                  isSelected={elementSelected === ids.textId}
                  onSelect={(e: any) => {
                    selectShape(ids.textId)
                  }}
                  onTransformEnd={(e: any) => {
                    textProperties.scaleX = e.target.attrs.scaleX
                    textProperties.scaleY = e.target.attrs.scaleY
                  }}
                />
              </Layer>}
          </Stage>
        </div>
      </div>
    </Wrapper>
  )
}
