import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../layout/Loader";

const Viewprofile = ({ user }) => {
  return (
    <Fragment>
      {user ? (
        <div className="view__cnt">
          <h3>View Profile</h3>
          <div className="view__item">
            <label>Firstname</label>
            <input type="text" value={user.firstname} readOnly />
          </div>
          <div className="view__item">
            <label>Lastname</label>
            <input type="text" value={user.lastname} readOnly />
          </div>
          <div className="view__item">
            <label>Email</label>
            <input type="text" value={user.email} readOnly />
          </div>
          <div className="view__item">
            <label>Contact</label>
            <input type="text" value={user.contactnumber} readOnly />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

Viewprofile.propType = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Viewprofile);
