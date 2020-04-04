import { CANVAS_SIZE } from "../../__mocks__/custom_sign_options"

export const getCanvasProperties = () => {
  let canHeight = CANVAS_SIZE.height

  return {
    canvasHeight: canHeight,
  }
}
