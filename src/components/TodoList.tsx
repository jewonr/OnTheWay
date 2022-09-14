import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { removeTodo, TodosState, toggleTodo } from '../modules/todo';

type TodoListType = {
  toggleSecButton: boolean;
}

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

function TodoList({ toggleSecButton }: TodoListType) {
  const todos: TodosState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  } 

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  }

  return (
    <Container>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          toggleSecButton={toggleSecButton}
          key={todo.id}
        />
      ))}
    </Container>
  )
}

export default TodoList