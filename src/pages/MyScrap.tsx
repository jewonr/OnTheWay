import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SecHeader from '../components/SecHeader'
import SecBottomButton from '../components/SecBottomButton'
import ScrapItemList from '../components/ScrapItemList'
import { useSelector } from 'react-redux'
import { RootState } from '../modules'
import SubTitle from '../components/SubTitle'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  min-height: 558px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const TopWrapper = styled.div`
  margin-bottom: 20px;
`;

const SecButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function MyScrap() {
  const data = useSelector((state: RootState) => state.scrap.content);
  const location = useLocation();
  const [max, setMax] = useState(5);

  useEffect(() => {
    if(location.pathname === "/scrap") setMax(100);
    else setMax(5);
  }, [setMax, location]);

  return (
    <Container>
      <Wrapper>
        <TopWrapper>
          <SecHeader titleText='나의 스크랩' buttonText='스크랩 편집' pageName='SCRAP' />
          {!data.data?.length ? <SubTitle text='새로운 스크랩을 추가해보세요...' /> : <></>}
        </TopWrapper>
        <ScrapItemList max={max} />
      </Wrapper>
      <SecButtonContainer>
        <SecBottomButton pageName='scrap' />
      </SecButtonContainer>
    </Container>
  )
}

export default MyScrap;