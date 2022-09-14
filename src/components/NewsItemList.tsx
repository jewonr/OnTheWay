import React from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import SubTitle from './SubTitle'

type ItemListProps = {
  text: string;
}

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

function NewsItemList({ text }: ItemListProps) {
  return (
    <Container>
      <SubTitle text={text} />
      <ItemWrapper>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </ItemWrapper>
    </Container>
  )
}

export default NewsItemList;