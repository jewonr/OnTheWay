import React from 'react'
import styled from 'styled-components'
import SecHeader from '../components/SecHeader'
import SecBottomButton from '../components/SecBottomButton'
import ScrapItemList from '../components/ScrapItemList'
import { useSelector } from 'react-redux'
import { RootState } from '../modules'
import SubTitle from '../components/SubTitle'

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  min-height: 454.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopWrapper = styled.div``;

const SecButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function MyScrap() {
  const data = useSelector((state: RootState) => state.scrap.content);

  return (
    <Container>
      <TopWrapper>
        <SecHeader titleText='나의 스크랩' buttonText='스크랩 편집' pageName='SCRAP' />
        {!data.data?.length ? <SubTitle text='새로운 스크랩을 추가해보세요...' /> : <></>}
      </TopWrapper>
      <ScrapItemList />
      <SecButtonContainer>
        <SecBottomButton text='더보기' pageName='scrap' />
      </SecButtonContainer>
    </Container>
  )
}

export default MyScrap;