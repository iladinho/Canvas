import React, { EventHandler } from 'react'
import { Container, FlexContainer, UploadButton } from './components/styled'

interface Props {
  handleChange: EventHandler<any>
  icons: Array<{id: number, label: string, src: string}>
}

export const Icons: React.FC<Props> = ({ handleChange, icons }) => {
  const handleOptionClick = (icon: {id: number, label: string, src: string}) => {
    handleChange({ step: 'icons', value: icon })
  }

  const handleFileSelected = (e: any) => {
    const selectedImage = e.target.files
    if (selectedImage.length !== 1) {
      alert('You must select only one image.')
    } else if (selectedImage[0].size > 10000000) {
      alert('The image size should be up to 10MB.')
    } else {
      const url = URL.createObjectURL(e.target.files[0])
      const newIcon = {
        id: -1,
        label: 'icon',
        src: url,
        file: selectedImage
      }
      handleChange({ step: 'icons', value: newIcon })
    }
  }

  return (
    <Container>
      <h2>Upload your image</h2>
      <FlexContainer>
        <UploadButton
          type='file'
          onChange={handleFileSelected}
        />
      </FlexContainer>
      <p>Or <strong>select an image </strong>from gallery:</p>
      <FlexContainer>
        {icons.map((icon) => {
          return (
            <div key={icon.id.toString()}>
              <img
                src={icon.src}
                id={icon.id.toString()}
                onClick={() => handleOptionClick(icon)}
                alt={icon.label}
              />
            </div>
          )
        })}
      </FlexContainer>
    </Container>
  )
}
