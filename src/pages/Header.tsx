import { useState } from 'react';
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'
import SideMenu from '../components/SideMenu'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #F9F9F9;
`

function Header() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  return (
    <Container>
      <SideMenu visible={visible} onClose={onClose} />
      <MenuBar onClick={onClick} />
    </Container>
  )
}

export default Header