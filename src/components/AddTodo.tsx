import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../modules/todo'

const Container = styled.form`
  margin: 20px 0;
  width: 100%;
`

const TodoInput = styled.input`
  padding: 10px;
  font-size: 18px;
  font-weight: 300;
  border: .5px solid #E1E1E1;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
`

function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }

  return (
    <Container onSubmit={onSubmit}>
      <TodoInput value={todo} placeholder='할 일을 추가해보세요...' onChange={onChange} />
    </Container>
  )
}

export default AddTodo;