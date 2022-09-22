import React, { useState } from 'react'
import styled from 'styled-components'
import DataInput from '../components/DataInput';
import SecHeader from '../components/SecHeader'
import SubTitle from '../components/SubTitle';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { useSelector } from 'react-redux';
import { TodosState } from '../modules/todo';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  min-height: 454.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopWrapper = styled.div``

function TodayTodo() {
  const clicked = useSelector((state: RootState) => state.secButton.todoClicked);

  const [num, setNum] = useState<Number>();
  const buttonText = num === 0 ? '할 일을 추가해보세요...' : `할 일 ${num}개 남음` ;

  return (
    <Container>
      <TopWrapper>
        {clicked ? <SecHeader titleText='오늘 할 일' buttonText="완료" pageName="TODO" /> : <SecHeader titleText='오늘 할 일' buttonText="할 일 편집" pageName='TODO' />}
        <SubTitle text={buttonText} />
        <TodoList toggleSecButton={clicked} setNum={setNum} /> 
      </TopWrapper>
      <DataInput pageName='TODO' setInitialAdd={() => ''} />
    </Container>
  );
}

export default TodayTodo