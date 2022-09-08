import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../modules'
import { clickMemo } from '../modules/memo'
import MemoItem from './MemoItem'

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  border-collapse: collapse;
  > * {
    &:first-child {
      border-radius: 5px 5px 0 0;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`

function MemoList() {
  const memos = useSelector((state: RootState) => state.memo);
  const dispatch  = useDispatch();

  const onClick = (id: number) => {
    dispatch(clickMemo(id))
  }

  return (
    <Container>
      {memos.map(memo => (
        <MemoItem memo={memo} onClick={onClick} key={memo.id} />
      ))}
    </Container>
  )
}

export default MemoList