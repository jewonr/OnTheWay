import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../modules'
import { clickSecButton } from '../modules/secButton';
import { addMemo, newMemo } from '../modules/memo';

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
  resize: none;
  background-color: #FFFFFF;

  &::placeholder {
    color: #E1E1E1;
  }
`

function MemoViewer({ pageName }: MemoViewerType) {
  const clicked = useSelector((state: RootState) => state.secButton.memoClicked);
  const memos = useSelector((state: RootState) => state.memo);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const memoInput = useRef<HTMLTextAreaElement>(null);
  const id = useRef(0);

  useEffect(() => {
    if(clicked) {
      setText('');
      dispatch(clickSecButton(pageName));
      dispatch(newMemo());
      memoInput.current?.focus();
    }
  }, [clicked, dispatch, pageName]);

  useEffect(() => {
   for (const memo of memos) {
    if(memo.view) {
      id.current = memo.id;
      setText(memo.text);
      break;
    }
   }
  }, [memos]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const onBlur = () => {
    dispatch(addMemo(id.current, text));
  }

  return (
    <Container>
      <MemoInput value={text} placeholder='번뜩이는 아이디어를 써보세요...' onChange={onChange} onBlur={onBlur} ref={memoInput} />
    </Container>
  )
}

export default MemoViewer