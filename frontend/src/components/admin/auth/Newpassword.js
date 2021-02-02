import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import { newpswd } from "../../../actions/auth";
import Alert from "../layout/Alert";
import Title from "../layout/Title";

document.title = "Recover Password - Pasal Admin";

const Newpassword = ({ newpswd, match }) => {
  const [data, setdata] = useState({
    password: "",
    repassword: "",
  });

  const { password, repassword } = data;

  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    newpswd(password, repassword, match.params.uid, match.params.tid);
  };

  return (
    <Fragment>
      <Title title="New Password - Pasal" />
      <div className="login__row">
        {/* Login Form For Admin */}
        <div className="form__part">
          <div className="cont">
            <div className="site__title">
              <span>Pasal.COM</span>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form__item">
                <label>New Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form__item">
                <label>Re-enter Password</label>
                <input
                  type="password"
                  name="repassword"
                  value={repassword}
                  onChange={onChange2}
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

export default connect(mapStateToProps, { newpswd })(Newpassword);
