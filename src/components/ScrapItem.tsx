import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { clickSecButton } from '../modules/secButton';
import { Scrap } from '../api/scrapApi';

type ScrapItemType = {
  plusButton: boolean;
  scrap?: Scrap;

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
`

const ImgWrapper = styled.div`
  flex: 2;
  width: 100%;
  min-height: 60%;
  object-fit: cover;
`

const Img = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 100%;
`

const BottomWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 7px;
`

const Title = styled.div`
  font-family: Neo Bold;
  font-size: 4vw;
  overflow: hidden;
  word-break: break-all;
  height: 20px;
`

const BottomText = styled.div`
  font-size: 1vw;
  color: #868686;
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E1E1E1;
`

function ScrapItem({ plusButton, scrap }: ScrapItemType) {
  const viewWidth: number = window.innerWidth;
  const itemWidth: number = (viewWidth - 70) / 2;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(clickSecButton('SCRAP'));
  }

  return (
    <Container width={itemWidth} onClick={() => scrap?.link && window.open(scrap.link, '_blank')}>
      {plusButton ?
      <>
        <ButtonWrapper onClick={onClick}>
          <AddIcon fontSize='large' />
        </ButtonWrapper>
      </>
      : 
      <>
        <ImgWrapper>
          <Img src={scrap?.imgLink} />
        </ImgWrapper>
        <BottomWrapper>
          <Title>{scrap?.title}</Title>
          <BottomText>{scrap?.siteName}</BottomText>
        </BottomWrapper>
      </>
      }
    </Container>
  )
}

export default ScrapItem;
