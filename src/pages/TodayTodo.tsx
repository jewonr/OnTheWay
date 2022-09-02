import React, { useState } from 'react'
import styled from 'styled-components'
import AddTodo from '../components/AddTodo';
import SecHeader from '../components/SecHeader'
import SubTitle from '../components/SubTitle';
import TodoList from '../components/TodoList';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
`

function TodayTodo() {
  const num: number = 1;
  const buttonText: string = `할 일 ${num}개 남음`

  return (
    <Container>
      <SecHeader titleText='오늘 할 일' buttonText="할 일 편집" />
      <SubTitle text={buttonText} />
      <TodoList />
      <AddTodo />
    </Container>
  );
}

export default TodayTodo