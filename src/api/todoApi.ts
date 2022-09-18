import axios from "axios";
import { MemosState } from "../modules/memo";
import { TodosState } from "../modules/todo";

const URL = 'http://localhost:8000/api';

export const getTodos = async () => {
  return await axios.get(`${URL}/get/todo`);
}

export const updateTodos = async (todos: TodosState) => {
  await axios.post(`${URL}/update/todo`, { todos });
}

export const getMemos = async () => {
  return await axios.get(`${URL}/get/memo`);
}

export const updateMemos = async (memos: MemosState) => {
  await axios.post(`${URL}/update/memo`, { memos });
}