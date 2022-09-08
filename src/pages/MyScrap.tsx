import styled from 'styled-components'
import React from 'react'
import SecHeader from '../components/SecHeader'
import ItemList from '../components/ItemList'
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

function MyScrap() {
  return (
    <Container>
      <SecHeader titleText='나의 스크랩' buttonText='스크랩 추가' pageName='SCRAP' />
      <ItemList text='최근 스크랩' />
      <ItemList text='이전 스크랩' />
      <SecButtonContainer>
        <SecBottomButton text='더보기' />
      </SecButtonContainer>
    </Container>
  )
}

export default MyScrap