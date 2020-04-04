import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  margin: auto;
  background: white;

  .applyButton {
    width: 100%;
    margin: 10px auto auto auto;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 350px;
  overflow: auto;

  & > div {
    width: 75px;
    margin: 5px 10px;

    img {
      object-fit: contain;
      border: 1px solid grey;
      width: 100px;
    }
  }
`

export const UploadButton = styled.input`
  margin-bottom: 30px;
`
