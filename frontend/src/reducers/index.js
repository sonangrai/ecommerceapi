import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import product from "./product";
import category from "./category";
import gallery from "./gallery";

export default combineReducers({
  auth,
  alert,
  product,
  category,
  gallery,
});
