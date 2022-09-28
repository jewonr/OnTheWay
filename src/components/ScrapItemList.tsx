import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Scrap } from '../api/scrapApi'
import { RootState } from '../modules'
import { getScrapThunk } from '../modules/scrap'
import ScrapItem from './ScrapItem'

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

function ScrapItemList() {
  const { data, loading, error } = useSelector((state: RootState) => state.scrap.content)
  const dispatch = useDispatch<any>();
  const [max, setMax] = useState(3);

  useEffect(() => {
    async function getScrap() {
      await dispatch(getScrapThunk());
    }
    getScrap();
  }, [dispatch]);

  return (
    <>
      {loading && <div>로딩중..</div>}
      {error && <div>에러 발생!</div>}
      {data &&
        <Container>
          <ItemWrapper>
            <ScrapItem plusButton={true} />
            {data.map((scrap: Scrap) => (
              <ScrapItem plusButton={false} scrap={scrap} key={scrap.id} />
            ))}
          </ItemWrapper>  
        </Container> 
      }
    </>
  )
}

export default ScrapItemList
