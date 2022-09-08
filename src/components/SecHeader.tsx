import styled from 'styled-components'
import React from 'react'
import SecButton from './SecButton'
import SecTitle from './SecTitle'

type SecHeaderProps = {
  titleText: string;
  buttonText: string;
  pageName: string;
}

const Container = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function SecHeader({ titleText, buttonText, pageName }: SecHeaderProps) {

  return (
    <Container>
      <SecTitle text={titleText} />
      <SecButton text={buttonText} pageName={pageName} />
    </Container>
  )
}

export default SecHeader