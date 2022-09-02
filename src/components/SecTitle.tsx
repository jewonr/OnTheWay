import styled from 'styled-components'
import React from 'react'

type SecTitleProps = {
  text: string;
}

const Container = styled.div`
  font-size: 25px;
  font-weight: 700;
`

function SecTitle({ text }: SecTitleProps) {
  return (
    <Container>{text}</Container>
  )
}

export default SecTitle