import { combineReducers } from "redux";
import secButton from "./secButton";
import todo from "./todo";
import memo from "./memo";

const rootReducer = combineReducers({
  secButton,
  todo,
  memo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;