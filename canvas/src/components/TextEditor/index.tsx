import React, { EventHandler, useState } from 'react'
import { Container, FlexContainer, TextArea, TextDecoration } from './components/styled'
import Select from 'react-select'
import { COLOR_OPTIONS, TEXT_FONTS, SIZES_OPTIONS } from '../../resources/constants'
import { toPng } from 'html-to-image'

interface Props {
  handleChange: EventHandler<any>
  maxTextHeight: number
  maxTextWidth: number
}

export const TextEditor: React.FC<Props> = ({ handleChange, maxTextHeight, maxTextWidth }) => {
  const colors = COLOR_OPTIONS.map((colorOption) => ({
    value: colorOption.value,
    label: colorOption.label
  }))

  const sizes = SIZES_OPTIONS.map((sizeOption) => ({
    value: sizeOption.value,
    label: sizeOption.label
  }))

  const fonts = TEXT_FONTS.map((fontOption) => ({
    value: fontOption.value,
    label: fontOption.label
  }))

  const [colorValue, setColorValue] = useState(colors[0])
  const [fontValue, setFontValue] = useState(fonts[0])
  const [sizeValue, setSizeValue] = useState(sizes[0])

  const setFocus = (ref: any) => {
    ref?.focus()
  }

  const execCommand = (aCommandName: string, aShowDefaultUI?: any, aValueArgument?: any) => {
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
    setFocus(document.getElementById('textContent'))
  }

  const onClickApply = () => {
    const element = document.getElementById('textContent')
    const offsetHeight = element?.offsetHeight
    const offsetWidth = element?.offsetWidth
    const imagePng = toPng(element as HTMLElement, {width: offsetWidth, height: offsetHeight})
      .then(function (dataUrl) {
        return dataUrl
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.error('oops, something went wrong with the editor!', error)
      })

    setColorValue(colors[0])
    setFontValue(fonts[0])
    setSizeValue(sizes[0])
    handleChange({
      step: 'text',
      value: {
        image: imagePng,
        offsetHeight: offsetHeight,
        offsetWidth: offsetWidth
      }
    })
  }

  const handleColorChange = (e: any) => {
    const newColorSelected = colors.find(color => color.value === e.value.toUpperCase())
    setColorValue(newColorSelected as { value: string, label: string })
    execCommand('useCSS', false, true)
    execCommand('foreColor', false, e.value)
  }

  const handleFontChange = (e: any) => {
    const newFontSelected = fonts.find(
      font => font.value === e.value
    )
    setFontValue(newFontSelected as { value: string, label: string })
    execCommand('useCSS', false, true)
    execCommand('fontName', false, e.value)
  }

  function handleSizeChange(e: any) {
    const newSize = e.value
    setFontSize(newSize)
    const newSizeSelected = sizes.find(
      size => size.value === newSize
    )
    setSizeValue(newSizeSelected as { value: string, label: string })
  }

  function handleSizeChangeFocus() {
    const newSize = sizeValue.value
    setFontSize(newSize)
  }

  function setFontSize(newSize: string) {
    execCommand('useCSS', false, true)
    execCommand('fontSize', false, newSize)
  }

  const handleClick = (e: any) => {
    getAttrFromParents(0, e.target, 'color')
    getAttrFromParents(0, e.target, 'face')
    getAttrFromParents(0, e.target, 'size')
  }

  const getAttrFromParents = (iteration: number, target: any, type: string) => {
    if (iteration < 4 && target) {
      const attrSelected = target.getAttribute(type)
      if (attrSelected) {
        if (type === 'color') {
          const newAttributeSelected = colors.find(
            color => color.value === attrSelected.toUpperCase()
          ) as { value: string, label: string }
          setColorValue(newAttributeSelected as { value: string, label: string })
        } else if (type === 'face') {
          const newAttributeSelected = fonts.find(
            font => font.value === attrSelected
          ) as { value: string, label: string }
          setFontValue(newAttributeSelected as { value: string, label: string })
        } else {
          const newAttributeSelected = sizes.find(
            size => size.value === attrSelected
          ) as { value: string, label: string }
          setSizeValue(newAttributeSelected as { value: string, label: string })
        }
      } else {
        getAttrFromParents(iteration + 1, target.parentElement, type)
      }
    } else {
      if (type === 'color') {
        setColorValue(colors[0])
      } else if (type === 'face') {
        setFontValue(fonts[0])
      } else {
        setSizeValue(sizes[0])
      }
    }
  }

  return (
    <Container>
      <FlexContainer>
        <TextDecoration>
          <button className='-bold' onClick={() => execCommand('bold')}>B</button>
          <button className='cursive' onClick={() => execCommand('italic')}>i</button>
          <button className='underline' onClick={() => execCommand('underline')}>U</button>
        </TextDecoration>
        <Select
          options={colors}
          onChange={handleColorChange}
          value={colorValue}
        />
        <Select
          options={sizes}
          onChange={handleSizeChange}
          value={sizeValue}
        />
        <Select
          options={fonts}
          onChange={handleFontChange}
          value={fontValue}
        />
      </FlexContainer>
      <TextArea onClick={() => setFocus(document.getElementById('textContent'))}>
        <div
          id='textContent'
          contentEditable
          onClick={handleClick}
          onFocus={handleSizeChangeFocus}
          style={{maxHeight: maxTextHeight, maxWidth: maxTextWidth}}
        />
      </TextArea>
      <button onClick={onClickApply} className='applyButton'>
        Apply
      </button>
    </Container>
  )
}
