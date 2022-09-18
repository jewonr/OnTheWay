import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import CategoryList from './CategoryList';
import DataInput from './DataInput';
import { clickSecButton, SecButtonState } from '../modules/secButton';
import { useDispatch } from 'react-redux';
import { addCategory } from '../modules/category';

type AddCategoryType = {
  clickedPage: SecButtonState;
  visible: boolean;
}

const Container = styled.div`
  border-top: 1px solid #E1E1E1;
  width: 100%;
  padding: 20px;
  transition: .5s;
  background: #F9F9F9;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
`

const HeaderText = styled.div`
  width: 100%;
  font-size: 17px;
  color: #868686;
  text-align: center;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-weight: 700;
`

interface pageNameAndHeaderTitle {
  pageName: string,
  headerTitle: string
}

function AddData({ clickedPage, visible }: AddCategoryType) {
  const dispatch = useDispatch();
  const { pageName, headerTitle }: pageNameAndHeaderTitle = 
    clickedPage.feedClicked ? { pageName: 'FEED', headerTitle: '카테고리' } :
    clickedPage.scrapClicked ? { pageName: 'SCRAP', headerTitle: '스크랩' } :
    { pageName: '', headerTitle: '' };

  const onClose = () => {
    dispatch(clickSecButton(pageName));
  }

  const onClickSubmitButton = () => {
    dispatch(clickSecButton(pageName));
  }

  return (
    <Container>
      <Header>
        <HeaderText>{headerTitle} 추가</HeaderText>
        <Close>
          <CloseIcon fontSize='large' htmlColor='#868686' onClick={onClose} />
        </Close>
      </Header>
      <Body>
        <CategoryList />
        <DataInput pageName={pageName} visible={visible} />  
      </Body>
      <Footer>
        <SubmitButton onClick={onClickSubmitButton}>저장</SubmitButton>
      </Footer>
    </Container>
  )
}

export default AddData;
