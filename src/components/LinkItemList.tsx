import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Content } from '../api/feedApi'
import { RootState } from '../modules'
import { getDataThunk } from '../modules/data/thunks'
import LinkItem from './LinkItem'

type LinkItemListProps = {
  max: number;
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
  margin-bottom: 20px;
`

function LinkItemList({ max }: LinkItemListProps) {
  const { data, loading, error } = useSelector((state: RootState) => state.data.content)
  const dispatch = useDispatch<any>();

  let nextId = 0;

  useEffect(() => {
    async function getData() {
      await dispatch(getDataThunk());
    }
    getData();
  }, [dispatch]);

  return (
    <>
      {loading && <div>로딩중..</div>}
      {error && <div>에러 발생!</div>}
      {data &&
        <Container>
          <>
            {data.map((feed: Content[], idx: number) => (
              <ItemWrapper key={idx}>
                <>
                  <LinkItem category={feed[idx].category} />
                  {feed.slice(0, max).map(item => (
                    <LinkItem feed={item} key={nextId++} />
                  ))}
                </>
              </ItemWrapper>
            ))}
          </>
        </Container> 
      }
    </>
  ) 
}

export default LinkItemList;