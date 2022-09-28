import styled from 'styled-components'
import React from 'react'

type SecTitleProps = {
  text: string;
}

const Container = styled.div`
  font-family: "Neo Bold";
  font-size: 25px;
`

function SecTitle({ text }: SecTitleProps) {
  return (
    <Container>{text}</Container>
  )
}

export default SecTitle