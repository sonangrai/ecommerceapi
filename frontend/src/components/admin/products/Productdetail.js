import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getproduct } from "../../../actions/product";
import Loader from "../layout/Loader";

const Productdetail = ({ getproduct, product, match }) => {
  useEffect(() => {
    getproduct(match.params.id);
  }, [getproduct, match]);

  return (
    <Fragment>
      {product ? (
        <>
          <Helmet>
            <title>
              {product.name} - {product.category}
            </title>
          </Helmet>
          <div className="title__box">
            <div className="title__name">
              <h2>{product.name}</h2>
            </div>
            <div className="item__action">
              <h2>
                <Link className="btn btn-secondary">Edit</Link>
              </h2>
            </div>
          </div>
          <div className="tiles__container">
            <div className="tile__card">
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <span>{product.category}</span>
              <span>{product.subcategory}</span>
              <strong>{product.rate}</strong>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
});

export default connect(mapStateToProps, { getproduct })(Productdetail);
