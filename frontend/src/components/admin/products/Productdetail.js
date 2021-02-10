import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getproduct } from "../../../actions/product";

const Productdetail = ({ getproduct, product, match }) => {
  useEffect(() => {
    getproduct(match.params.id);
  }, [getproduct, match]);

  return (
    <Fragment>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <div className="title__box">
        <h2>Title</h2>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getproduct })(Productdetail);
