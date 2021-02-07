import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { allproduct } from "../../../actions/product";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";

const Viewproducts = ({ allproduct, product }) => {
  useEffect(() => {
    allproduct();
  }, [allproduct]);

  return (
    <Fragment>
      {product ? (
        <div className="">
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th>Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {product.map((prod, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{prod.name}</td>
                    <td>{prod.description}</td>
                    <td>{prod.category}</td>
                    <td>{prod.subcategory}</td>
                    <td>{prod.rate}</td>
                    <td>{prod.amount}</td>
                    <td>{prod.createdAt}</td>
                    <td>{prod.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

Viewproducts.propTypes = {
  product: PropTypes.array.isRequired,
  allproduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product.products,
});

export default connect(mapStateToProps, { allproduct })(Viewproducts);
