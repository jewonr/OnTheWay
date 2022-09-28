import axios from "axios";
import { CategoryState } from "../modules/category";

const URL = 'http://localhost:8000/api';

export interface Content {
  title: string
  desc: string
  url: string
  imgLink?: string
  category?: string
}

export const getSearchResult = async (category: string) => {
  let content: Content[] = [];
  try {
    const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCDsd-pO3-wb2GE-ZmVjxErTp1TKUhAHUk&cx=33916d969f65c47b0&q=${category}`);
    res.data.items.map((item: any) => {
      content.push({
        title: item.title,
        desc: item.snippet,
        url: item.formattedUrl,
        imgLink: '',
      });
    });
    return content;
  } catch (e) {
    console.error(e);
    return content;
  }
}

export const getFeeds = async () => {
  try {
    const res = await axios.get(`${URL}/get/feed`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const updateFeeds = async (category: CategoryState) => {
  const feed: Content[] = await getSearchResult(category.text);
  await axios.post(`${URL}/update/feed`, { feed, category: category.text });
}