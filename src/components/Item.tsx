import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-radius: 25px;
  background-color: #FFFFFF;
  box-shadow: 0 0 15px rgba(149, 157, 165, 25%);
`

function Item() {
  const viewWidth: number = window.innerWidth;
  const itemWidth: number = (viewWidth - 70) / 2;
  return (
    <Container width={itemWidth}>
      {}
    </Container>
  )
}

export default Item