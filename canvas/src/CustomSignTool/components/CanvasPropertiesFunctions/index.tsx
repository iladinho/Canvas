export const setComponentLeft = (component: { x: number, y: number, height: number, width: number }, canWidth: number, canHeight: number, canvasContentHeight: number) => {
  component.x = (canWidth / 2 - component.width) / 2
  component.y = ((canHeight - canvasContentHeight) + (canvasContentHeight - component.height) / 2)
}

export const setComponentRight = (component: { x: number, y: number, height: number, width: number }, canWidth: number, canHeight: number, canvasContentHeight: number) => {
  component.x = (canWidth / 2 + (canWidth / 2 - component.width) / 2)
  component.y = ((canHeight - canvasContentHeight) + (canvasContentHeight - component.height) / 2)
}

export const setComponentUp = (component: { x: number, y: number, height: number, width: number }, canWidth: number, canHeight: number, canvasContentHeight: number) => {
  component.x = (canWidth - component.width) / 2
  component.y = (canHeight - canvasContentHeight) + ((canvasContentHeight/2 - component.height) / 2)
}

export const setComponentDown = (component: { x: number, y: number, height: number, width: number }, canWidth: number, canHeight: number, canvasContentHeight: number) => {
  component.x = (canWidth - component.width) / 2
  component.y = (canHeight - canvasContentHeight + canvasContentHeight / 2) + ((canvasContentHeight / 2 - component.height) / 2)
}

export const reduceComponent = (component: { x: number, y: number, height: number, width: number }) => {
  component.width = component.width / 2
  component.height = component.height / 2
}
