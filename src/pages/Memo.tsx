import React from 'react'
import styled from 'styled-components'
import SecHeader from '../components/SecHeader'
import MemoViewer from '../components/MemoViewer'
import MemoList from '../components/MemoList'
import SecBottomButton from '../components/SecBottomButton'

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
`

const SecButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function Memo() {
  return (
    <Container>
      <SecHeader titleText='메모' buttonText='새로운 메모' pageName='MEMO' />
      <MemoViewer pageName='MEMO' />
      <MemoList />
      <SecButtonContainer>
        <SecBottomButton text='더보기' />
      </SecButtonContainer>
    </Container>
  )
}

export default Memo
