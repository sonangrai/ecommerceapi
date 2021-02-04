import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../layout/Loader";
import { updateinfo } from "../../../actions/user";

const Editprofile = ({ user, updateinfo }) => {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
  });

  const { firstname, lastname, email, contactnumber } = data;
  //Form Change
  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //Form Submit
  const onSubmit = (e) => {
    e.preventDefault();
    updateinfo(data);
  };

  return (
    <Fragment>
      {user ? (
        <div className="view__cnt">
          <h3>Edit Profile</h3>
          <form onSubmit={onSubmit}>
            <div className="view__item">
              <label>Firstname</label>
              <input
                type="text"
                onChange={onChange}
                value={firstname}
                name="firstname"
                placeholder={user.firstname}
              />
            </div>
            <div className="view__item">
              <label>Lastname</label>
              <input
                type="text"
                onChange={onChange}
                value={lastname}
                name="lastname"
                placeholder={user.lastname}
              />
            </div>
            <div className="view__item">
              <label>Email</label>
              <input
                type="text"
                onChange={onChange}
                value={email}
                name="email"
                placeholder={user.email}
              />
            </div>
            <div className="view__item">
              <label>Contact</label>
              <input
                type="text"
                onChange={onChange}
                value={contactnumber}
                name="contactnumber"
                placeholder={user.contactnumber}
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

Editprofile.propType = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { updateinfo })(Editprofile);
