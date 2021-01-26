import React, { Fragment } from "react";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";

document.title = "Login - Pasal.COM";

const login = () => {
  return (
    <Fragment>
      <Breadcrumb />
      {/* Login Main Part */}
      <section className="login">
        <div className="wrapper">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="illustration-login">
                <div>
                  <h3>Get logged in or Register for free to</h3>
                  <h2>Ace Hardware</h2>
                  {/* <img src="./img/logo.png" alt="" /> */}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="login-forms">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="login-tab"
                      data-toggle="tab"
                      href="#login"
                      role="tab"
                      aria-controls="login"
                      aria-selected="true"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="register-tab"
                      data-toggle="tab"
                      href="#register"
                      role="tab"
                      aria-controls="register"
                      aria-selected="false"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="login"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                  >
                    <div className="row register-form">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <a href="./forgot.html">Forgot Password</a>
                        </div>
                        <input
                          type="submit"
                          className="btnLogin"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                  >
                    <div className="row register-form">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            maxlength="10"
                            minlength="10"
                            className="form-control"
                            placeholder="Phone *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="`Answer *"
                            value=""
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default login;
