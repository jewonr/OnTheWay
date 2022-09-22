import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../modules'
import { clickMemo, MemosState } from '../modules/memo'
import MemoItem from './MemoItem'

type MemoListType = {
  setRendered: ($: string) => void;
}

const Container = styled.div<{ length: number }>`
  margin: 20px 0;
  width: 100%;
  border-collapse: collapse;
  > * {
    border: .5px solid #E1E1E1;

    &:first-child {
      border-radius: 5px 5px 0 0;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
    }

    &:first-child, last-child {
      border-radius: 5px;
    }
  }
`

function MemoList({ setRendered }: MemoListType) {
  const memos: MemosState = useSelector((state: RootState) => state.memo);
  const dispatch  = useDispatch();
  
  const onClick = (id: number) => {
    dispatch(clickMemo(id))
  }

  useEffect(() => {
    console.log(memos.length);
    setRendered('memo rendered');
  }, []);

  return (
    <Container length={memos.length} >
      {memos.map(memo => (
        <MemoItem memo={memo} onClick={onClick} key={memo.id} />
      ))}
    </Container>
  )
}

export default MemoList;