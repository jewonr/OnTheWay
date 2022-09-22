import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Content, getFeeds } from '../api/feedApi'
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
  const [feeds, setFeeds] = useState([]);
  let nextId = 0;
  
  useEffect(() => {
    (async () => {
      setFeeds(await getFeeds());
    })();
  }, []);


  return (
    <Container>
      <SubTitle text={text} />
      <>
        {feeds.forEach((feed: Content[], idx: number) => {
          <ItemWrapper key={idx}>
              <>
                <NewsItem category={feed[idx].category} />
                {feed.forEach(item => {
                  <NewsItem feed={item} key={nextId++} />
                })}
              </>
          </ItemWrapper>
        })}
      </>
    </Container>
  )
}

export default NewsItemList;