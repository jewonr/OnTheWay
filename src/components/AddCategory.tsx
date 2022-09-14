import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addCategory } from '../modules/category';

type AddCategoryType = {
  visible: boolean;
}

const Container = styled.form<{ visible: boolean }>`
  border-top: 1px solid #E1E1E1;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: .5s;
  background: #F9F9F9;
`

const CategoryInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border: .5px solid #E1E1E1;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;

  &::placeholder {
    color: #E1E1E1;
    font-weight: 300;
  }
`

function AddCategory({ visible }: AddCategoryType) {
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
    <Container visible={visible} onSubmit={onSubmit} >
      <CategoryInput 
        placeholder='#경제, #환경 ...' 
        ref={categoryInput} 
        value={category} 
        onChange={onChange} 
      />
    </Container>
  )
}

export default AddCategory;
