import React, { Fragment } from "react";

const Breadcrumb = () => {
  return (
    <Fragment>
      <div className="bread-crumb">
        <div className="wrapper">
          <div className="row">
            <div className="col-12">
              <div className="crumb-wrap">
                <ul>
                  <li>
                    <a href="./">Home</a>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
