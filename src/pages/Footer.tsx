import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AddCategory from '../components/AddCategory'
import { RootState } from '../modules'

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: ${props => props.visible ? 0 : -100}px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  transition: .5s;
`

function Footer() {
  const feedClicked = useSelector((state: RootState) => state.secButton.feedClicked);

  return (
    <Container visible={feedClicked} >
      <AddCategory visible={feedClicked} />
    </Container>
  )
}

export default Footer;
