import styled from 'styled-components'
import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleSecButton } from '../modules/secButton';

type SecButtonProps = {
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

function SecButton({ text }: SecButtonProps) {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleSecButton());
  }

  return (
    <Button onClick={onToggle}>{text}</Button>
  )
}

export default SecButton