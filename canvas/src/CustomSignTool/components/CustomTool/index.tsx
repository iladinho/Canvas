import React, { EventHandler } from 'react'
import { Container, StepTitle } from './components/styled'
import { Icons } from './components/Icons'
import { TextEditor } from "../../../components/TextEditor"
import { ICONOGRAPHY } from "../../__mocks__/custom_sign_options"

interface Props {
  handleChange: EventHandler<any>
  maxTextHeight: number
  maxTextWidth: number
}

export const CustomTool: React.FC<Props> = ({ handleChange, maxTextHeight, maxTextWidth }) => {
  return (
    <Container>
      {ICONOGRAPHY && (
        <>
          <StepTitle>
            Choose Your Iconography
          </StepTitle>
          <Icons handleChange={handleChange} icons={ICONOGRAPHY} />
        </>
      )}
      <>
        <StepTitle>
          Input Your Sign Messaging
        </StepTitle>
        <TextEditor handleChange={handleChange} maxTextHeight={maxTextHeight} maxTextWidth={maxTextWidth} />
      </>
    </Container>
  )
}
