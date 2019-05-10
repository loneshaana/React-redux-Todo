import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import VisibilityReducer from "./visibilityReducer";

const rootReducer = combineReducers({
  allTodos: todoReducer,
  filterBy: VisibilityReducer
});

export default rootReducer;
