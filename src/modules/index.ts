import { combineReducers } from "redux";
import secButton from "./secButton";
import todo from "./todo";
import memo from "./memo";
import category from "./category";

const rootReducer = combineReducers({
  secButton,
  todo,
  memo,
  category
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;