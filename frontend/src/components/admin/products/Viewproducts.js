import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { allproduct } from "../../../actions/product";

const Viewproducts = ({ allproduct }) => {
  const [product, setproduct] = useState({});

  useEffect(() => {
    const d = allproduct;
    setproduct(d);
    console.log(product);
  }, []);

  return <Fragment>All Products</Fragment>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { allproduct })(Viewproducts);
