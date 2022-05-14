import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import questionReducer from "./questionReducer";

export const reducers = combineReducers({
  auth: authReducer,
  authErrors: errorReducer,
  questions: questionReducer,
});
