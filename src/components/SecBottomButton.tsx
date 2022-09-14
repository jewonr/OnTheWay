import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

type SecBottomButtonProps = {
  text: string;
  pageName: string;
}

const Button = styled.button`
  font-size: 15px;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  
  > * {
    text-decoration: none;
    color: #868686;
  }
`

function SecBottomButton({ text, pageName }: SecBottomButtonProps) {
  return (
    <Button><Link to={pageName}>{text}</Link></Button>
  )
}

export default SecBottomButton;