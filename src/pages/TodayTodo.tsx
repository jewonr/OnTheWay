import React from 'react'
import styled from 'styled-components'
import AddTodo from '../components/AddTodo';
import SecHeader from '../components/SecHeader'
import SubTitle from '../components/SubTitle';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { useSelector } from 'react-redux';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  min-height: 447px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopWrapper = styled.div``

function TodayTodo() {
  const toggle = useSelector((state: RootState) => state.secButton.toggle);
  const todos = useSelector((state: RootState) => state.todo);

  const num = todos.filter(todo => todo.done === false).length;
  const buttonText = num === 0 ? '할 일을 추가해보세요...' : `할 일 ${num}개 남음` ;

  return (
    <Container>
      <TopWrapper>
        {toggle ? <SecHeader titleText='오늘 할 일' buttonText="완료" /> : <SecHeader titleText='오늘 할 일' buttonText="할 일 편집" />}
        <SubTitle text={buttonText} />
        <TodoList toggleSecButton={toggle} />
      </TopWrapper>
      <AddTodo />
    </Container>
  );
}

export default TodayTodo