import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../modules'
import { clickSecButton } from '../modules/secButton';
import { newMemo } from '../modules/memo';

type MemoViewerType = {
  pageName: string;
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`

const MemoInput = styled.textarea`
  width: 100%;
  height: 200px;
  box-shadow: 0 0 15px rgba(149, 157, 165, 25%);
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 300;
  resize: none;
  background-color: #FFFFFF;
`

function MemoViewer({ pageName }: MemoViewerType) {
  const clicked = useSelector((state: RootState) => state.secButton.memoClicked);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const onBlur = () => {
    
  }

  useEffect(() => {
    if(clicked) {
      setText('');
      dispatch(clickSecButton(pageName));
      dispatch(newMemo());
    }
  }, [clicked, dispatch, pageName]);

  return (
    <Container>
      <MemoInput value={text} placeholder='번뜩이는 아이디어를 써보세요...' onChange={onChange} onBlur={onBlur} />
    </Container>
  )
}

export default MemoViewer