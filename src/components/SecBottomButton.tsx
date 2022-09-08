import React from 'react'
import styled from 'styled-components'

type SecBottomButtonProps = {
  text: string;
}

const Button = styled.button`
  font-size: 15px;
  color: #868686;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
`

function SecBottomButton({ text }: SecBottomButtonProps) {
  return (
    <Button>{text}</Button>
  )
}

export default SecBottomButton;