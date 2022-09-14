import axios from "axios";
import { MemosState } from "../modules/memo";
import { TodosState } from "../modules/todo";

const URL = 'http://localhost:8000/api';

export const getTodos = async () => {
  const res = await axios.get(`${URL}/get/todo`);
  return res;
}

export const updateTodos = async (todos: TodosState) => {
  await axios.post(`${URL}/update/todo`, { todos });
}

export const getMemos = async () => {
  const res = await axios.get(`${URL}/get/memo`);
  return res;
}

export const updateMemos = async (memos: MemosState) => {
  await axios.post(`${URL}/update/memo`, { memos });
}