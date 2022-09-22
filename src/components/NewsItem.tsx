import React from 'react'
import styled from 'styled-components'
import { Content } from '../api/feedApi'

type NewsItemtype = {
  feed?: Content;
  category?: string;
}

const Container = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: 0 0 15px rgba(149, 157, 165, 25%);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  gap: 6px;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  gap: 12px;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 4vw;
  flex: 1;
  overflow: hidden;
`

const Desc = styled.div`
  font-size: 3.5vw;
  flex: 2;
  word-break: break-all;
  color: #868686;
  overflow: hidden;
`

const CategoryWrapper = styled.div`
  width: 100%,
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Category = styled.div`
  font-weight: 700;
  font-size: 25px;
`

function NewsItem({ feed, category }: NewsItemtype) {
  const viewWidth: number = window.innerWidth;
  const itemWidth: number = (viewWidth - 70) / 2;
  return (
    <Container width={itemWidth}>
      {
        category ? 
        <>
          <Wrapper>
            <Title>{feed?.title}</Title>
          </Wrapper>
          <Desc>{feed?.desc}</Desc>
        </> 
        : 
        <>
          <Wrapper>
            <Category>{category}</Category>
          </Wrapper>
        </>
      }
    </Container>
  )
}

export default NewsItem;

// 12
// 48

// 18
// 76
