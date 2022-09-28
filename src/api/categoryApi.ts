import axios from "axios";
import { CategoryState } from "../modules/category";

const URL = 'http://localhost:8000/api';

export const getCategory = async () => {
  try {
    return (await axios.get(`${URL}/get/category`)).data;
  } catch (e) {
    console.error(e);
  }
}

export const insertCategory = async (category: CategoryState) => {
  try {
    await axios.post(`${URL}/add/category`, category);
  } catch (e) {
    console.error(e);
  }
}

export const deleteCategory = async (text: string) => {
  try {
    await axios.delete(`${URL}/delete/category/${text}`);
  } catch (e) {
    console.error(e);
  }
}


