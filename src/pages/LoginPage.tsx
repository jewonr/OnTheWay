import React from 'react'
import styled from 'styled-components'
import Login from '../components/Login'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  transition: .5s;
  background: #F9F9F9;
  display: flex;
  flex-direction: column;
  
`

function LoginPage() {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default LoginPage;
