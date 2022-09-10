import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

type SideMenuType = {
  visible: boolean;
  onClose: () => void;
}

const Container = styled.div<{ visible: boolean }>`
  height: 100vh;
  width: 75vw;
  padding: 20px;
  background-color: #000000;
  position: absolute;
  top: 0;
  transition: 0.5s;
  left: ${props => props.visible ? '0' : '-300px'};
`

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
`

const TextWrapper = styled.div`
  margin: 70px 20px 0 20px;
`

const HomeText = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #FFFFFF;
`

const MenuTextWrapper = styled.div`
  margin: 60px 0;

  > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const MenuText = styled.div`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 18px;
`

function SideMenu({ visible, onClose }: SideMenuType) {
  return (
    <Container visible={visible} >
      <Close>
        <CloseIcon fontSize='large' htmlColor='#FFFFFF' onClick={onClose} />
      </Close>
      <TextWrapper>
        <HomeText>홈</HomeText>
        <MenuTextWrapper>
          <MenuText>오늘의 피드</MenuText>
          <MenuText>나의 스크랩</MenuText>
          <MenuText>오늘 할 일</MenuText>
          <MenuText>메모</MenuText>
        </MenuTextWrapper>
        <MenuText>히스토리</MenuText>
      </TextWrapper>
    </Container>
  )
}

export default SideMenu;