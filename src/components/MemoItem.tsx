import React from 'react'
import styled from 'styled-components'

type MemoItemType = {
  text: string;
  date: string;
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: .5px solid #E1E1E1;
  border-collapse: collapse;
  background-color: #FFFFFF;
`

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #868686;
  background-color: #FFFFFF;
`

const Date = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #868686;
  background-color: #FFFFFF;
`

function MemoItem({ text, date }: MemoItemType) {
  return (
    <Container>
      <Text>
        {text}
      </Text>
      <Date>
        {date}
      </Date>
    </Container>
  )
}

export default MemoItem