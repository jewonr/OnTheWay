import React from 'react'
import styled from 'styled-components'
import SecHeader from '../components/SecHeader'
import NewsItemList from '../components/NewsItemList'
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

function TodayFeed() {
  return (
    <Container>
      <SecHeader titleText='오늘의 피드' buttonText='카테고리 추가' pageName='FEED' />
      <NewsItemList text='' />
      <SecButtonContainer>
        <SecBottomButton text='더보기' pageName='feed' />
      </SecButtonContainer>
    </Container>
  )
}

export default TodayFeed