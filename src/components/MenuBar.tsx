import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

type MenuBarType = {
  onClick: () => void;
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

function MenuBar({ onClick }: MenuBarType) {
  return (
    <Container>
      <MenuIcon fontSize='large' onClick={onClick} />
      <Title><Link to="/">OnTheWay.</Link></Title>
      <PersonIcon fontSize='large' />
    </Container>
  )
}

export default MenuBar;