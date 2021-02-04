import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../layout/Loader";
import { changepsswd } from "../../../actions/user";

const Changepassword = ({ user, changepsswd }) => {
  const [data, setdata] = useState({
    oldpassword: "",
    password: "",
    password1: "",
  });

  const { password, oldpassword, password1 } = data;
  //Form Change
  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //Form Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password1) {
      alert("Dont Match");
    } else {
      changepsswd(oldpassword, password);
    }
  };

  return (
    <Fragment>
      {user ? (
        <div className="view__cnt">
          <h3>Edit Profile</h3>
          <form onSubmit={onSubmit}>
            <div className="view__item">
              <label>Old Password</label>
              <input
                type="password"
                onChange={onChange}
                value={oldpassword}
                name="oldpassword"
              />
            </div>
            <div className="view__item">
              <label>New Password</label>
              <input
                type="password"
                onChange={onChange}
                value={password}
                name="password"
              />
            </div>
            <div className="view__item">
              <label>Confirm New Password</label>
              <input
                type="password"
                onChange={onChange}
                value={password1}
                name="password1"
              />
            </div>
            <div className="view__item">
              <button type="submit" className="primary-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

Changepassword.propType = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { changepsswd })(Changepassword);
