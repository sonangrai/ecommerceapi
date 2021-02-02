import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Title from "../layout/Title";

const Profile = ({ user }) => {
  return (
    <Fragment>
      {user && (
        <>
          <Title title={` ${user.firstname} - Profile`} />
          <span>${user.firstname}</span>
        </>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
