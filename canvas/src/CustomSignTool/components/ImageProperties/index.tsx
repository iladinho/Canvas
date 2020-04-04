import { CANVAS_SIZE, ICON_SIZE } from "../../__mocks__/custom_sign_options"

export const getImageProperties = (canHeight: number) => {
  const canWidth = CANVAS_SIZE.width
  let startHeight = ICON_SIZE.height
  let startWidth = ICON_SIZE.width

  const imageComponent = {
    x: (canWidth - startWidth) / 2,
    y: ((canHeight-startHeight) / 2),
    height: startHeight,
    width: startWidth,
    scaleX: 1,
    scaleY: 1
  }

  return {
    imageComponent
  }
}
