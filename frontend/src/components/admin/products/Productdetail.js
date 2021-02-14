import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getimage } from "../../../actions/gallery";
import { getproduct } from "../../../actions/product";
import Loader from "../layout/Loader";

const Productdetail = ({ getproduct, product, match, getimage, gallery }) => {
  useEffect(() => {
    getproduct(match.params.id);
  }, [getproduct, match]);

  useEffect(() => {
    getimage(match.params.id);
  }, [getimage, match]);

  return (
    <Fragment>
      {product ? (
        <div className="view__product">
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
              <Link
                to={`/admin/product/image/${product._id}`}
                className="btn btn-primary mr-2"
              >
                Add Image
              </Link>
              <Link
                to={`/admin/product/${product._id}/edit`}
                className="btn btn-secondary"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h3>Product Information</h3>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="cat">
                <span>{product.category}</span>
              </div>
              <div className="subcat">
                <span>{product.subcategory}</span>
              </div>
              <div className="rate">
                <strong>{product.rate}</strong>
              </div>
            </div>
            {gallery && (
              <div className="card slid">
                {gallery.length === 0 && <span>No Image For this Product</span>}
                {gallery.map((gal) => (
                  <img key={gal._id} src={gal.imageurl} alt={gal.imageurl} />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  gallery: state.gallery.gallery,
});

export default connect(mapStateToProps, { getproduct, getimage })(
  Productdetail
);
