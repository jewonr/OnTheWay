import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import MenuBar from '../components/MenuBar'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

function Header() {
  return (
    <Container>
      <MenuBar />
    </Container>
  )
}

export default Header