import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
`

const TodoInput = styled.input`
  padding: 10px;
  font-size: 18px;
  font-weight: 300;
  border: .3px solid #868686;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  background-color: #FFFFFF;
`

function AddTodo() {
  const [todo, setTodo] = useState('');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }
  return (
    <Container>
      <TodoInput value={todo} placeholder='할 일을 입력해보세요...' onChange={onChange} />
    </Container>
  )
}

export default AddTodo