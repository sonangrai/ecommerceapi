import * as types from "./types";
import Axios from "axios";
import { setAlert } from "./alert";

//Getting all the products
export const allproduct = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/product");
    dispatch({
      type: types.ALL_PRODUCT_LOADED,
      payload: res.data,
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

//Adding the products
export const addproduct = (data) => async (dispatch) => {
  const jdata = JSON.stringify(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await Axios.post("/api/product", jdata, config);
    dispatch({
      type: types.PRODUCT_ADDED,
      payload: res.data,
    });
    dispatch(setAlert("Product Added Successfully", "success"));
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.PRODUCT_ADD_FAIL,
    });
  }
};

//Getting the products
export const getproduct = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/product/${id}`);
    dispatch({
      type: types.PRODUCT_LOADED,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.PRODUCT_LOADED_FAIL,
    });
  }
};

//EDit Product
export const updateproduct = (data, id) => async (dispatch) => {
  const jdata = JSON.stringify(data);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await Axios.put(`/api/product/${id}`, jdata, config);
    dispatch({
      type: types.PRODUCT_UPDATED,
      payload: res.data,
    });
    dispatch(setAlert("Product updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.PRODUCT_UPDATE_FAIL,
    });
  }
};
