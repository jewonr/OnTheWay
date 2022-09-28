import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { clickSecButton } from '../modules/secButton';

type SecButtonProps = {
  text: string;
  pageName: string;
}

const Button = styled.button`
  font-size: 15px;
  color: #868686;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
`

function SecButton({ text, pageName }: SecButtonProps) {
  const dispatch = useDispatch();

  const onToggle = () => {  
    if(pageName !== 'SCRAP') dispatch(clickSecButton(pageName));
  }

  return (
    <Button onClick={onToggle}>{text}</Button>
  )
}

export default SecButton;