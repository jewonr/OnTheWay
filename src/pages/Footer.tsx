import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AddCategory from '../components/AddCategory'
import { RootState } from '../modules'
import { useDispatch } from 'react-redux'
import { clickSecButton } from '../modules/secButton'

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: ${props => props.visible ? 0 : -100}vh;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  transition: .5s;
`



function Footer() {
  const feedClicked = useSelector((state: RootState) => state.secButton.feedClicked);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(clickSecButton('FEED'));
  }

  return (
    <Container visible={feedClicked} >
      <AddCategory visible={feedClicked} onClose={onClose} />
    </Container>
  )
}

export default Footer;
