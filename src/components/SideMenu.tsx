import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

type SideMenuType = {
  visible: boolean;
  onClose: () => void;
}

const Container = styled.div<{ visible: boolean }>`
  height: 100vh;
  width: 80vw;
  padding: 20px;
  background-color: #000000;
  position: absolute;
  top: 0;
  transition: 0.5s;
  left: ${props => props.visible ? '0' : '-80vw'};
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
  > * {
    text-decoration: none;
    color: #FFFFFF;
  }
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
  margin-bottom: 18px;
  > * {
    text-decoration: none;
    color: #FFFFFF;
  }
`

function SideMenu({ visible, onClose }: SideMenuType) {
  return (
    <Container visible={visible} >
      <Close>
        <CloseIcon fontSize='large' htmlColor='#FFFFFF' onClick={onClose} />
      </Close>
      <TextWrapper>
        <HomeText><Link to="/" onClick={onClose}>홈</Link></HomeText>
        <MenuTextWrapper>
          <MenuText><Link to="/feed" onClick={onClose}>오늘의 피드</Link></MenuText>
          <MenuText><Link to="/scrap" onClick={onClose}>나의 스크랩</Link></MenuText>
          <MenuText><Link to="/todo" onClick={onClose}>오늘 할 일</Link></MenuText>
          <MenuText><Link to="/memo" onClick={onClose}>메모</Link></MenuText>
        </MenuTextWrapper>
        <MenuText><Link to='/history' onClick={onClose}>히스토리</Link></MenuText>
      </TextWrapper>
    </Container>
  )
}

export default SideMenu;