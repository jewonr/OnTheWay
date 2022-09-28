import { combineReducers } from "redux";
import secButton from "./secButton";
import todo from "./todo";
import memo from "./memo";
import category from "./category";
import data from "./data/reducer";
import scrap from "./scrap/reducer";

const rootReducer = combineReducers({
  category,
  memo,
  secButton,
  todo,
  data,
  scrap
});

export const initialState = {
  secButton: {
    feedClicked: false,
    scrapClicked: false,
    todoClicked: false,
    memoClicked: false
  },
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;