import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { RootState } from '../modules';
import { removeCategory } from '../modules/category';
import Category from './Category';

type CategoryListType = {
  setInitialAdd: ($: boolean) => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
`

function CategoryList({ setInitialAdd }: CategoryListType) {
  const categories = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const onRemove = (text: string) => {
    dispatch(removeCategory(text));
  }

  return (
    <Container>
      {categories.map(category => (
        <Category 
          category={category}
          onRemove={onRemove}
          key={category.id}
          setInitialAdd={setInitialAdd}
        />
      ))}
    </Container>
  )
}

export default CategoryList;
