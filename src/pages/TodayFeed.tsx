import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SecHeader from '../components/SecHeader'
import LinkItemList from '../components/LinkItemList'
import SecBottomButton from '../components/SecBottomButton'
import SubTitle from '../components/SubTitle'
import { useSelector } from 'react-redux'
import { RootState } from '../modules'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  min-height: 558px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopWrapper = styled.div``;

const SecButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function TodayFeed() {
  const data = useSelector((state: RootState) => state.data.content);
  const location = useLocation();
  const [max, setMax] = useState(3);

  useEffect(() => {
    if(location.pathname === "/feed") setMax(9);
    else setMax(3);
  }, [setMax, location]);

  return (
    <Container>
      <TopWrapper>
        <SecHeader titleText='오늘의 피드' buttonText='카테고리 편집' pageName='FEED' />
        {!data.data?.length ? <SubTitle text='카테고리를 추가해 보세요...' /> : <></>}
      </TopWrapper>
      <LinkItemList max={max} />
      <SecButtonContainer>
        <SecBottomButton pageName='feed' />
      </SecButtonContainer>
    </Container>
  )
}

export default TodayFeed