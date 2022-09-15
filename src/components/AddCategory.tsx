import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addCategory } from '../modules/category';
import CloseIcon from '@mui/icons-material/Close';
import { clickSecButton } from '../modules/secButton'
import CategoryList from './CategoryList';

type AddCategoryType = {
  visible: boolean;
  onClose: () => void;
}

const Container = styled.div<{ visible: boolean }>`
  border-top: 1px solid #E1E1E1;
  width: 100%;
  height: 100vh;
  padding: 20px;
  transition: .5s;
  background: #F9F9F9;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const CategoryInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border: .5px solid #E1E1E1;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  margin: 20px 0;

  &::placeholder {
    color: #E1E1E1;
    font-weight: 300;
  }
`

const Close = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: flex-end;
`

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  color: #E1E1E1;
`

function AddCategory({ visible, onClose }: AddCategoryType) {
  const categoryInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  useEffect(() => {
    if (visible) {
      categoryInput.current?.focus();
    }
  })

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    console.log(category);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCategory(category));
    setCategory('');
  }

  return (
    <Container visible={visible} >
      <Close>
        <CloseIcon fontSize='large' htmlColor='#868686' onClick={onClose} />
      </Close>
      <Form onSubmit={onSubmit} >
        <CategoryList />
        <CategoryInput 
          placeholder='내가 원하는 카테고리를 입력해보세요.' 
          ref={categoryInput} 
          value={category} 
          onChange={onChange} 
        />
        <Text>ex) #경제, #사회 ...</Text>
      </Form>
    </Container>
  )
}

export default AddCategory;
