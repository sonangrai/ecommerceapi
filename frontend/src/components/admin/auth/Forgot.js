import React, { Fragment, useState } from "react";
import "../../../assets/admin/main.css";

import { connect } from "react-redux";
import { recover } from "../../../actions/auth";
import Alert from "../layout/Alert";

document.title = "Recover Password - Pasal Admin";

const Forgot = ({ recover }) => {
  const [data, setdata] = useState({
    email: "",
  });

  const { email } = data;

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    recover(email);
  };

  return (
    <Fragment>
      <div className="login__row">
        {/* Login Form For Admin */}
        <div className="form__part">
          <div className="cont">
            <div className="site__title">
              <span>Pasal.COM</span>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form__item">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="form__item">
                <button type="submit">Submit Mail</button>
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
      <Alert />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { recover })(Forgot);
