import * as types from "./types";
import Axios from "axios";
import { setAlert } from "./alert";

//Getting the gallery of product
export const getimage = (pid) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/image/${pid}`);
    dispatch({
      type: types.ALL_GALLERY_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.ALL_GALLERY_LOADED_FAIL,
    });
  }
};

//Uploading image to the product
export const uploadimg = (data, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  //Creating formdata for image file
  var fd = new FormData();
  fd.append("image", data.image);

  try {
    const res = await Axios.post(`/api/gallery/${id}`, fd, config);
    dispatch({
      type: types.IMAGE_UPLOADED,
      payload: res.data,
    });
    dispatch(setAlert("Image added to the Product Gallery", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.IMAGE_UPLOAD_FAIL,
    });
  }
};

//Deleting the image from product gallery
export const delimg = (id) => async (dispatch) => {
  try {
    const res = await Axios.post(`/api/gallery/destroy/${id}`);
    dispatch({
      type: types.IMAGE_DELETED,
      payload: res.data,
    });
    dispatch(setAlert("Image Deleted", "success"));
  } catch (err) {
    dispatch({
      type: types.IMAGE_DEL_FAIL,
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
