import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

type MenuBarType = {
  onClick: () => void;
  onClickProfile: () => void;
  visibleProfile: boolean;
  onBlur: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #E1E1E1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

const Title = styled.div`
  > * {
    text-decoration: none;
    color: #000000;
    font-size: 35px;
    font-weight: 800;
    font-family: 'Vollkorn';
  }
`

const LogoutButton = styled.div<{ visible: boolean }>`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  position: absolute;
  top: 70px;
  right: 20px;
  font-size: 15px;
  border: none;
  background-color: #FFFFFF;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #868686;
  box-shadow: 0 0 15px rgba(149, 157, 165, 25%);
  border-radius: 3px;
`

function MenuBar({ onClick, onClickProfile, visibleProfile, onBlur }: MenuBarType) {
  const navigate = useNavigate();
  const auth = getAuth();
  const logout = () => {
    signOut(auth).then(() => {
      sessionStorage.clear();
      navigate("/login");
    });
  }

  return (
    <Container>
      <MenuIcon fontSize='large' onClick={onClick} />
      <Title><Link to="/">OnTheWay.</Link></Title>
      <PersonIcon fontSize='large' onClick={onClickProfile} />
      <LogoutButton onClick={logout} visible={visibleProfile} onBlur={onBlur} >로그아웃</LogoutButton>
    </Container>
  )
}

export default MenuBar;