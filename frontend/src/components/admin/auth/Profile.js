import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "../layout/Loader";
import Editprofile from "./Editprofile";
import Viewprofile from "./Viewprofile";

const Profile = ({ user }) => {
  const [active, setactive] = useState("view_profile");

  //Switcher
  const change = (e) => {
    var id = e.target.id;
    setactive(id);
  };

  return (
    <Fragment>
      {user ? (
        <>
          <div className="profile__row min-height">
            <div className="tab__bar">
              <div className="tab__item ">
                <span
                  id="view_profile"
                  className={active === "view_profile" ? "active" : ""}
                  onClick={change}
                >
                  View Profile
                </span>
              </div>
              <div className="tab__item">
                <span
                  id="edit_profile"
                  className={active === "edit_profile" ? "active" : ""}
                  onClick={change}
                >
                  Edit Profile
                </span>
              </div>
            </div>
            <div className="info__bar">
              <div
                className={
                  active === "view_profile" ? "view_profile active" : ""
                }
              >
                <Viewprofile />
              </div>
              <div
                className={
                  active === "edit_profile" ? "edit_profile active" : ""
                }
              >
                <Editprofile />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
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
