import styled from 'styled-components'
import React, { useState } from 'react'

type SecButtonProps = {
  text: string;
}

const Button = styled.button`
  font-size: 15px;
  color: #868686;
  border: none;
`

function SecButton({ text }: SecButtonProps) {
  return (
    <Button>{text}</Button>
  )
}

export default SecButton