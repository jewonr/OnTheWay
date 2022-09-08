import styled from 'styled-components'
import MenuBar from '../components/MenuBar'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #F9F9F9;
`

function Header() {
  return (
    <Container>
      <MenuBar />
    </Container>
  )
}

export default Header