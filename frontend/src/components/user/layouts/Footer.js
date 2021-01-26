import React, { Fragment } from "react";

const footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="wrapper">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="foot-item">
                <h3>ACE</h3>
                <ul>
                  <li>
                    <a href="./about.html">About Us</a>
                  </li>
                  <li>
                    <a href="./privacy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="./terms.html">Terms and Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="foot-item">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="./faq.html">Faq's</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="./categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="./delivery.html">Delivery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="foot-item">
                <h3>Service Hours</h3>
                <ul>
                  <li>MON-FRI (11AM-8PM)</li>
                </ul>
                <h3>Hotline</h3>
                <ul>
                  <li>9851000000, 014578895</li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-foot">
                <div className="copyright-part">
                  <p>
                    &copy Copyright 2020. All Rights Reserved
                    <br />
                    All assets of this website are subject to copyright.
                  </p>
                </div>
                <div className="social-link">
                  <ul>
                    <li>
                      <a href="http://">
                        <i className="flaticon-facebook-logo"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://">
                        <i className="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default footer;
