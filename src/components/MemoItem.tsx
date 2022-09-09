import React from 'react'
import styled from 'styled-components'
import { MemoState } from '../modules/memo'

type MemoItemType = {
  memo: MemoState;
  onClick: (id: number) => void;
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: .5px solid #E1E1E1;
  border-collapse: collapse;
  background-color: #FFFFFF;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #868686;
  background-color: #FFFFFF;
`

const Date = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #868686;
  background-color: #FFFFFF;
`

function MemoItem({ memo, onClick }: MemoItemType) {
  const handleClick = () => {
    onClick(memo.id);
  }

  return (
    <Container onClick={handleClick}>
      <Text>
        {memo.text === '' ? '새로운 메모' : memo.text.length > 10 ? memo.text.slice(0, 10) + '...' : memo.text}
      </Text>
      <Date>
        {memo.date}
      </Date>
    </Container>
  )
}

export default MemoItem;