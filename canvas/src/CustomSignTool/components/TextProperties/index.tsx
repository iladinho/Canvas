import { CANVAS_SIZE } from "../../__mocks__/custom_sign_options"

export const getTextProperties = (canHeight: number, offsetHeight: number, offsetWidth: number) => {
  const canWidth = CANVAS_SIZE.width
  let startHeight = offsetHeight
  let startWidth = offsetWidth

  const textComponent = {
    x: (canWidth - startWidth) / 2,
    y: ((canHeight-startHeight) / 2),
    height: startHeight,
    width: startWidth,
    scaleX: 1,
    scaleY: 1
  }

  return {
    textComponent
  }
}
