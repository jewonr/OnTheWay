import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

function TodoList() {
  return (
    <Container>
      <TodoItem text='test' isDone={true} />
      <TodoItem text='test' isDone={true} />
      <TodoItem text='test' isDone={false} />
      <TodoItem text='test' isDone={false} />
    </Container>
  )
}

export default TodoList