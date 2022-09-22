import { combineReducers } from "redux";
import secButton from "./secButton";
import todo from "./todo";
import memo from "./memo";
import category from "./category";

const rootReducer = combineReducers({
  category,
  memo,
  secButton,
  todo,
});

export const initialState = {
  category: [{ id: 1, text: 'test' }],
  secButton: {
    feedClicked: false,
    scrapClicked: false,
    todoClicked: false,
    memoClicked: false
  },
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;