import React, { Fragment, useState } from "react";

import { Helmet } from "react-helmet";
import Viewproducts from "./Viewproducts";
import Addproduct from "./Addproduct";

const Index = () => {
  const [active, setactive] = useState("view_product");

  //Switcher
  const change = (e) => {
    var id = e.target.id;
    setactive(id);
  };

  return (
    <Fragment>
      <>
        <Helmet>
                  <title>Product - Pasal</title>     
        </Helmet>
        <div className="main__row ">
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
            <div className="tab__item ">
              <span
                id="add_product"
                className={active === "add_product" ? "active" : ""}
                onClick={change}
              >
                Add Product
              </span>
            </div>
          </div>
          <div className="info__bar">
            <div
              className={active === "view_product" ? "view_product active" : ""}
            >
              <Viewproducts />
            </div>
            <div
              className={active === "add_product" ? "add_product active" : ""}
            >
              <Addproduct />
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default Index;
