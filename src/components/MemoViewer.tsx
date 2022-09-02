import React, { useState } from 'react'
import styled from 'styled-components'

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

function MemoViewer() {
  const [memo, setMemo] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  }

  return (
    <Container>
      <MemoInput value={memo} placeholder='번뜩이는 아이디어를 써보세요...' onChange={onChange} />
    </Container>
  )
}

export default MemoViewer