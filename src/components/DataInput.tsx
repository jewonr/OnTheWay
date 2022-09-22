import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../modules/todo'
import { addCategory } from '../modules/category'

type AddDataType = {
  pageName: string;
  visible?: boolean;
  setInitialAdd: ($: boolean) => void;
}

const Container = styled.form`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border: .5px solid #E1E1E1;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;

  &::placeholder {
    color: #E1E1E1;
  }
`

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  color: #E1E1E1;
`

interface ActionAndPlaceholder {
  action: (text: string) => any,
  placeholder: string
}

const setActionAndPlaceholder = (pageName: string): ActionAndPlaceholder => {
  switch (pageName) {
    case 'FEED':
      return { action: addCategory, placeholder: "관심있는 카테고리를 저장해보세요..." }
    case 'SCRAP':
      return { action: addTodo, placeholder: "관심있는 기사나 블로그를 저장해보세요..." }
    case 'TODO':
      return { action: addTodo, placeholder: "할 일을 추가해보세요..." }
    default:
      return { action: addCategory, placeholder: "관심있는 카테고리를 저장해보세요..." }
  }
}

function DataInput({ pageName, visible, setInitialAdd }: AddDataType) {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const input = useRef<HTMLInputElement>(null);
  const { action, placeholder }: ActionAndPlaceholder = setActionAndPlaceholder(pageName);

  useEffect(() => {
    if(visible) input.current?.focus();
  } ,[]);

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(action(data));
    setData('');
    setInitialAdd(true);
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input value={data} placeholder={placeholder} onChange={onChange} ref={input} />
      {pageName === 'FEED' && <Text>ex) #경제, #사회 ...</Text>}
    </Container>
  )
}

export default DataInput;