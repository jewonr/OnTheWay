import React from 'react'
import styled from 'styled-components'

type SubTitleProps = {
  text: string;
}

const Container = styled.div`
  font-size: 18px;
  color: #868686;
`

function SubTitle({ text }: SubTitleProps) {
  return (
    <Container>{text}</Container>
  )
}

export default SubTitle
