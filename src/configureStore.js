import { createStore } from "redux";
import rootReducer from "./rootReducer";
function configureStore() {
  return createStore(rootReducer);
}
export default configureStore;
