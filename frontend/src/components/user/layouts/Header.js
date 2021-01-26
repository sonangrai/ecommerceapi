import React, { Fragment } from "react";

const header = () => {
  return (
    <Fragment>
      <header>
        <div className="wrapper">
          <div className="upper-head">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="logo">
                  <a href="./">LOGO</a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6">
                <div className="top-right">
                  <a className="link-item" href="./wishlist.html">
                    <i className="flaticon-favourite-heart"></i> WishList{" "}
                    <sup>2</sup>
                  </a>
                  <a className="link-item" href="./track.html">
                    <i className="flaticon-box"></i> Track
                  </a>
                  <a className="link-item" href="./cart.html">
                    <i className="flaticon-shopping-cart"></i> Cart <sup>2</sup>
                  </a>
                  <a
                    type="button"
                    className="dropdown link-item droppe dropdown-toggle"
                    data-toggle="dropdown"
                    href="#!"
                  >
                    <i className="flaticon-user"></i> Account
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="./login.html">
                      Login
                    </a>
                    <a className="dropdown-item" href="./login.html">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-head" id="stickit">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-2 col-2">
                <div
                  className="category"
                  data-toggle="model"
                  data-target="#category"
                >
                  <div id="cat">
                    <button
                      type="button"
                      className="catbtn"
                      data-toggle="modal"
                      data-target="#category"
                    >
                      <i className="flaticon-menu"></i>
                      <span>All Category</span>
                      <i className="flaticon-down-arrow"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="modal category-model"
                  aria-labelledby="category"
                  id="category"
                  tabindex="-1"
                >
                  <div className="categories">
                    <div className="header">
                      <span>All Categories</span>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="main-category">
                      <a href="#!">
                        <i className="motorcycle-repair"></i>
                        <span>Motorcycle Accessories</span>
                        <i className="hp-right-arrow"></i>
                      </a>
                      <div className="sub-category">
                        <ul>
                          <li>
                            <a href="#!">Motorcycle Lights</a>
                          </li>
                          <li>
                            <a href="#!">Rear Mirrors</a>
                          </li>
                          <li>
                            <a href="#!">Riding Gears</a>
                          </li>
                          <li>
                            <a href="#!">Tank Pads and Stickers</a>
                          </li>
                          <li>
                            <a href="#!">Modification Accessories</a>
                          </li>
                          <li>
                            <a href="#!">Tyres</a>
                          </li>
                          <li>
                            <a href="#!">Combo deal</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="main-category">
                      <a href="car-accessories">
                        <i className=""></i>
                        <span>Car Accessories</span>
                        <i className="hp-right-arrow"></i>
                      </a>
                      <div className="sub-category">
                        <ul>
                          <li>
                            <a href="#!">Car Care Products</a>
                          </li>
                          <li>
                            <a href="#!">Internal Accessories</a>
                          </li>
                          <li>
                            <a href="#!">External Accessories</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="main-category">
                      <a href="lights-accessories">
                        <i className=""></i>
                        <span>Lights &amp; Accessories</span>
                        <i className="hp-right-arrow"></i>
                      </a>
                      <div className="sub-category">
                        <ul>
                          <li>
                            <a href="wiring-cable">Wiring Cable</a>
                          </li>
                          <li>
                            <a href="sockets">Sockets </a>
                          </li>
                          <li>
                            <a href="lights">Lights</a>
                          </li>
                          <li>
                            <a href="accessories">Accessories</a>
                          </li>
                          <li>
                            <a href="heater">Heater</a>
                          </li>
                          <li>
                            <a href="fan">Fan</a>
                          </li>
                          <li>
                            <a href="water-heater">Water heater</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="main-category">
                      <a href="power-tools">
                        <i className=""></i>
                        <span>Power Tools</span>
                        <i className="hp-right-arrow"></i>
                      </a>
                      <div className="sub-category">
                        <ul>
                          <li>
                            <a href="sander">Sander</a>
                          </li>
                          <li>
                            <a href="air-compressor">Air Compressor</a>
                          </li>
                          <li>
                            <a href="cut-off-machine">Cut Off Machine</a>
                          </li>
                          <li>
                            <a href="electric-blower">Electric Blower</a>
                          </li>
                          <li>
                            <a href="heat-gun">Heat Gun</a>
                          </li>
                          <li>
                            <a href="ill-machine">Drill machine </a>
                          </li>
                          <li>
                            <a href="uters">Routers</a>
                          </li>
                          <li>
                            <a href="cuum-cleaner">Vacuum Cleaner</a>
                          </li>
                          <li>
                            <a href="ectric-planer">Electric Planer</a>
                          </li>
                          <li>
                            <a href="wer-saws">Power Saws </a>
                          </li>
                          <li>
                            <a href="mps">Pumps</a>
                          </li>
                          <li>
                            <a href="ectric-trimmers">Electric Trimmers</a>
                          </li>
                          <li>
                            <a href="inders-cutters">Grinders &amp; Cutters</a>
                          </li>
                          <li>
                            <a href="ttery-charger">Battery Charger</a>
                          </li>
                          <li>
                            <a href="nch-grinder">Bench Grinder</a>
                          </li>
                          <li>
                            <a href="ttery-tester">Battery Tester</a>
                          </li>
                          <li>
                            <a href="ain-cleaner">Drain Cleaner</a>
                          </li>
                          <li>
                            <a href="are-parts">Spare parts </a>
                          </li>
                          <li>
                            <a href="owel">Trowel</a>
                          </li>
                          <li>
                            <a href="ttery">Battery</a>
                          </li>
                          <li>
                            <a href="xer">Mixer</a>
                          </li>
                          <li>
                            <a href="nerator">Generator</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-10">
                <div className="search-box">
                  <form action="">
                    <i className="flaticon-magnifiying-glass"></i>
                    <input type="text" placeholder="Search Here" />
                    <button className="search">Search</button>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="hotline">
                  <div className="call">
                    <div className="call-ico">
                      <i className="flaticon-call-center"></i>
                    </div>
                    <div className="call-info">
                      <strong>Customer Support</strong>
                      <span>9851000000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default header;
