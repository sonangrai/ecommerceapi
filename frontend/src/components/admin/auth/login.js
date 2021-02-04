import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import Alert from "../layout/Alert";
import { Helmet } from "react-helmet";

const Login = ({ login, isAuthenticated }) => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin/home" />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Login - Pasal Admin</title>
      </Helmet>
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
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form__item">
                <button type="submit">Login</button>
              </div>
            </form>
            <Link className="link" to="/admin/forgot">
              Forgot Password
            </Link>
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

export default connect(mapStateToProps, { login })(Login);
