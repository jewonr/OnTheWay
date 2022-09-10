import React from 'react'
import styled, { css } from 'styled-components'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoState } from '../modules/todo';

type TodoItemProps = {
  todo: TodoState;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  toggleSecButton: boolean;
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

function TodoItem({ todo, onToggle, onRemove, toggleSecButton }: TodoItemProps) {
  const handleRemove = () => {
    onRemove(todo.id);
  }

  const handleToggle = () => {
    onToggle(todo.id);
  }

  return (
    <Container>
      <Text isDone={todo.done} >{todo.text}</Text>
      {toggleSecButton ? 
        <DeleteIcon fontSize='large' htmlColor='#868686' onClick={handleRemove} /> : 
        todo.done ? 
          <CheckBoxIcon fontSize='large' htmlColor='#868686' onClick={handleToggle} /> : 
          <CheckBoxOutlineBlankIcon fontSize='large' htmlColor='#868686' onClick={handleToggle} /> 
      }
    </Container>
  )
}

export default TodoItem