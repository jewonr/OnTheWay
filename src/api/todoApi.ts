import axios from "axios";
import { TodosState } from "../modules/todo";

const URL = 'http://localhost:8000/api';

export const getTodos = async () => {
  try {
    return (await axios.get(`${URL}/get/todo`)).data;
  } catch (e) {
    console.error(e);
  }
}

export const updateTodos = async (todos: TodosState) => {
  try {
    await axios.post(`${URL}/update/todo`, { todos });
  } catch (e) {
    console.error(e);
  }
}

