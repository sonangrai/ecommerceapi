import * as types from "./types";
import Axios from "axios";

//Getting the gallery of product
export const getimage = (pid) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/image/${pid}`);
    dispatch({
      type: types.GALLERY_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.GALLERY_LOADED_FAIL,
    });
  }
};
