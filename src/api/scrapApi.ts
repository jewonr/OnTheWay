import axios from "axios";

const URL = 'http://localhost:8000/api';

interface Req {
  id: number
  url: string
}

export interface Scrap {
  id: number
  title: string
  desc: string
  imgLink: string
  link: string
  siteName: string
}

export const getScrap = async () => {
  try {
    const data = (await axios.get(`${URL}/get/scrap`)).data;
    return data;
  } catch (e) {
    console.error(e);
  }
}

export const addScrap  = async (url: string) => {
  const scrap: Req = { id: Math.ceil(new Date().getTime() + Math.random()), url }
  try {
    await axios.post(`${URL}/add/scrap`, { scrap });
  } catch (e) {
    console.error(e);
  }
}

export const deleteScrap = async (id: number) => {
  try {
    await axios.delete(`${URL}/delete/scrap/${id}`);
  } catch (e) {
    console.error(e);
  }
}

