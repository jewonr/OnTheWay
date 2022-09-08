import { combineReducers } from "redux";
import secButton from "./secButton";
import todo from "./todo";

const rootReducer = combineReducers({
  secButton,
  todo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;