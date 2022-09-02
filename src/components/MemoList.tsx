import React from 'react'
import styled from 'styled-components'
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
  return (
    <Container>
      <MemoItem text='hello' date='08-31' />
      <MemoItem text='hello' date='08-31' />
      <MemoItem text='hello' date='08-31' />
      <MemoItem text='hello' date='08-31' />
    </Container>
  )
}

export default MemoList