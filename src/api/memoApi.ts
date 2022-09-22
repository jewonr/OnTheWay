import axios from "axios";
import { MemosState } from "../modules/memo";

const URL = 'http://localhost:8000/api';

export const getMemos = async () => {
  try {
    return (await axios.get(`${URL}/get/memo`)).data;
  } catch (e) {
    console.error(e);
  }
}

export const updateMemos = async (memos: MemosState) => {
  try {
    await axios.post(`${URL}/update/memo`, { memos });
  } catch (e) {
    console.error(e);
  }
}