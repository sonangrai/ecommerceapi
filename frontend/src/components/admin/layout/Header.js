import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/auth";
import { connect } from "react-redux";

const Header = ({ logout, auth }) => {
  return (
    <Fragment>
      <div className="header">
        <div className="head__item">
          <div className="notification">
            <Link to="/admin/profile">{auth.user && auth.user.firstname}</Link>
          </div>
        </div>
        <div className="head__item">
          <div className="notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path d="M253.681,71.32c-92.722,0-168.154,75.432-168.154,168.154v178.591h34.79V239.474c0-73.535,59.822-133.364,133.364-133.364    s133.364,59.828,133.364,133.364v178.591h34.791V239.474C421.835,146.752,346.403,71.32,253.681,71.32z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M441.549,400.67H70.451c-9.608,0-17.395,7.787-17.395,17.395s7.787,17.395,17.395,17.395h371.099    c9.608,0,17.395-7.787,17.395-17.395S451.157,400.67,441.549,400.67z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M253.681,0c-29.415,0-53.345,23.93-53.345,53.345s23.93,53.345,53.345,53.345c29.415,0,53.345-23.93,53.345-53.345    S283.096,0,253.681,0z M253.681,71.9c-10.06,0-18.555-8.5-18.555-18.555c0-10.06,8.495-18.555,18.555-18.555    s18.555,8.495,18.555,18.555S263.741,71.9,253.681,71.9z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M283.832,418.066v30.152c0,15.986-13.006,28.992-28.992,28.992c-15.986,0-28.992-13.006-28.992-28.992v-30.152h-34.791    v30.152c0,35.167,28.615,63.783,63.783,63.783c35.167,0,63.783-28.615,63.783-63.783v-30.152H283.832z" />
                </g>
              </g>
            </svg>
            <sup className="not__count">3</sup>
          </div>
        </div>
        <div className="head__item">
          <div className="logout">
            <Link onClick={logout} to="/admin/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="512pt"
                viewBox="0 0 511 512"
                width="512pt"
              >
                <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
