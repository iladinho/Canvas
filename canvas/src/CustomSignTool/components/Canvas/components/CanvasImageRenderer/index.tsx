import React, { useEffect, useRef } from 'react'
import { Image, Transformer } from 'react-konva'

interface Props {
  x: number
  y: number
  img: any
  handleDragEvent: any
  width: number
  height: number
  onSelect: any
  isSelected: boolean
  onTransformEnd: any
}

export const ImageCanvas: React.FC<Props> = ({ x, y, width, height, img, handleDragEvent, onSelect, isSelected, onTransformEnd }) => {
  const imageRef = useRef(null)
  const trRef = useRef(null)

  useEffect(() => {
    if (isSelected) {
      // @ts-ignore
      trRef.current.setNode(imageRef.current)
      // @ts-ignore
      trRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  return (
    <>
      <Image
        image={img}
        height={height}
        width={width}
        x={x}
        y={y}
        dragBoundFunc={handleDragEvent}
        draggable
        ref={imageRef}
        onClick={onSelect}
        onTap={onSelect}
        onTransformEnd={onTransformEnd}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            return newBox
          }}
        />
      )}
    </>
  )
}

export const getNewPosX = (pos: number, size: any, minAx: number, maxAx: number) => {
  const maxPos = maxAx - size
  const minPos = minAx

  if (pos < minPos) {
    return minPos
  }

  if (pos > maxPos) {
    return maxPos
  }

  return pos
}

export const getNewPosY = (pos: number, size: any, minAx: number, maxAx: number) => {
  const maxPos = maxAx - size
  const minPos = minAx

  if (pos < minPos) {
    return minPos
  }

  if (pos > maxPos) {
    return maxPos
  }

  return pos
}
