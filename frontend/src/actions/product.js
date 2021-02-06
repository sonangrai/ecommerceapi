import * as types from "./types";
import Axios from "axios";
import { setAlert } from "./alert";

//Getting all the products
export const allproduct = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/product");
    dispatch({
      type: types.ALL_PRODUCT_LOADED,
    });
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.ALL_PRODUCT_LOADED_FAIL,
    });
  }
};
