import * as types from "./types";
import Axios from "axios";
import { loadUser } from "./auth";
import { setAlert } from "./alert";

export const updateinfo = (data) => async (dispatch) => {
  var id = localStorage.getItem("userid");
  var jdata = JSON.stringify(data);
  console.log(jdata);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await Axios.put(`/api/user/${id}`, jdata, config);
    dispatch({
      type: types.UPDATE_PROFILE,
    });
    dispatch(loadUser(id));
    dispatch(setAlert("Profile Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.UPDATE_PROFILE_FAIL,
    });
    console.log(errors);
  }
};
