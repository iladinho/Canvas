import styled from 'styled-components'

export const Container = styled.div`
  max-width: 640px;
  margin: auto;
  background: white;

  .applyButton {
    width: 100%;
    margin: 10px auto auto auto;
  }

  .react-select__control {
    min-width: 150px;
    border-radius: 0;
    max-height: 38px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextDecoration = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > button {
    background-color: blue;
    color: white;
    width: 38px;
    height: 38px;
    border: 0;

    &.bold {
      font-weight: bold;
    }

    &.cursive {
      font-style: italic;
    }

    &.underline {
      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;
    }
  }
`

export const TextArea = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  overflow: auto;
  line-height: 1.5;
  padding: 0;
  border: 1px solid grey;
  border-radius: 3px;
  text-align: left;

  div {
    width: fit-content;
    min-width: 30px;
    min-height: 30px;
    max-width: 600px;
    max-height: 200px;
    margin: 0 auto auto 0;
  }
`
