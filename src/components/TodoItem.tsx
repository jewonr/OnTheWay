import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';

type TodoItemProps = {
  text: string;
  isDone: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .5px solid black;
  margin-top: 20px;
  padding-bottom: 5px;
`

const Text = styled.div<{ isDone: boolean }>`
  font-size: 18px;
  ${props => props.isDone && css`color: #E1E1E1; text-decoration: line-through`}
`

function TodoItem({ text, isDone }: TodoItemProps) {
  return (
    <Container>
      <Text isDone={isDone} >{text}</Text>
      {isDone ? <CheckBoxIcon fontSize='large' htmlColor='#868686' /> : <CheckBoxOutlineBlankIcon fontSize='large' htmlColor='#868686' />}
    </Container>
  )
}

export default TodoItem