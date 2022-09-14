import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { CategoryState } from '../modules/category';

type CategoryType = {
  category: CategoryState;
  onRemove: (id: number) => void;
}

const Container = styled.div`
  height: 35px;
  width: fit-content;
  border-radius: 12.5px;
  background-color: #FFFFFF;
  box-shadow: 0 0 15px rgba(149, 157, 165, 25%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

const Text = styled.div`
  font-size: 14px;
  color: #868686;
  margin-right: 5px;
`

function Category({ category, onRemove }: CategoryType) {

  const handleRemove = () => {
    onRemove(category.id);
  }

  return (
    <Container>
      <Text>{category.text}</Text>
      <CloseIcon fontSize='small' htmlColor='#868686' onClick={handleRemove} />
    </Container>
  );
}

export default Category;
