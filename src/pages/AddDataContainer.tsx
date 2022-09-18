import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import DataInput from '../components/AddData'
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

function AddDataContainer() {
  const clickedPage = useSelector((state: RootState) => state.secButton);

  const visible = clickedPage.feedClicked || clickedPage.scrapClicked || clickedPage.memoClicked;

  return (
    <Container visible={visible} >
      <DataInput clickedPage={clickedPage} visible={visible} />
    </Container>
  )
}

export default AddDataContainer;
