import * as types from "./types";
import Axios from "axios";
import { setAlert } from "./alert";

//Getting all Category
export const getallcategory = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/category");
    dispatch({
      type: types.ALL_CATEGORY_LOADED,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.ALL_CATEGORY_LOADED_FAIL,
    });
  }
};
