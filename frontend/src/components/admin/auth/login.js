import React, { Fragment } from "react";
import "../../../assets/admin/main.css";

document.title = "Login - Pasal";

const login = () => {
  return (
    <Fragment>
      <div className="login__row">
        {/* Login Form For Admin */}
        <div className="form__part">
          <div className="cont">
            <div className="site__title">
              <span>Pasal.COM</span>
            </div>
            <form>
              <div className="form__item">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="form__item">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="form__item">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="illustration__part">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/01/18/38/background-1789175_1280.png"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default login;
