import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { RootState } from '../modules';
import { removeCategory } from '../modules/category';
import Category from './Category';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
`

function CategoryList() {
  const categories = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  const onRemove = (id: number) => {
    dispatch(removeCategory(id));
  }

  return (
    <Container>
      {categories.map(category => (
        <Category 
          category={category}
          onRemove={onRemove}
          key={category.id}
        />
      ))}
    </Container>
  )
}

export default CategoryList;
