import * as types from "./types";
import Axios from "axios";
import { loadUser, logout } from "./auth";
import { setAlert } from "./alert";

//Updating Info
export const updateinfo = (data) => async (dispatch) => {
  var id = localStorage.getItem("userid");
  var jdata = JSON.stringify(data);
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
  }
};

//Changing Password
export const changepsswd = (oldpassword, password) => async (dispatch) => {
  var jdata = JSON.stringify({ oldpassword, password });
  var id = localStorage.getItem("userid");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await Axios.put(`/api/password/${id}`, jdata, config);
    dispatch({
      type: types.PASSWORD_CHANGED,
    });
    dispatch(setAlert("Password Updated! Please Login again", "success"));
    dispatch(logout());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: types.PASSWORD_CHANGE_FAIL,
    });
  }
};
