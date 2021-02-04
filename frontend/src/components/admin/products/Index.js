import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Alert from "../layout/Alert";

import { Helmet } from "react-helmet";
import Viewproducts from "./Viewproducts";

const Index = ({ user }) => {
  const [active, setactive] = useState("view_product");

  //Switcher
  const change = (e) => {
    var id = e.target.id;
    setactive(id);
  };

  return (
    <Fragment>
      <div className="min-height">
        <Helmet>
                  <title>Product - Pasal</title>     
        </Helmet>
        <div className="profile__row ">
          <div className="tab__bar">
            <div className="tab__item ">
              <span
                id="view_product"
                className={active === "view_product" ? "active" : ""}
                onClick={change}
              >
                View Product
              </span>
            </div>
          </div>
          <div className="info__bar">
            <div
              className={active === "view_product" ? "view_product active" : ""}
            >
              <Viewproducts />
            </div>
          </div>
        </div>
      </div>

      <Alert />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Index);
