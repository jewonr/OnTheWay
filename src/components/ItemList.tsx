import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import SubTitle from './SubTitle'

type ItemListProps = {
  text: string;
}

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

function ItemList({ text }: ItemListProps) {
  return (
    <Container>
      <SubTitle text={text} />
      <Row>
        <Item />
        <Item />
      </Row>
      <Row>
        <Item />
        <Item />
      </Row>
    </Container>
  )
}

export default ItemList