import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { allproduct } from "../../../actions/product";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";
import Search from "../common/Search";
import Table from "../common/Table";

const Viewproducts = ({ allproduct, product }) => {
  useEffect(() => {
    allproduct();
  }, [allproduct]);

  const columns = [
    "SNo",
    "Name",
    "Color",
    "Category",
    "Subcategory",
    "Rate",
    "Inventory Amounr",
    "Actions",
  ];

  return (
    <Fragment>
      <div className="search__box">
        <Search />
      </div>
      {product ? (
        <div className="view__cnt">
          <div className="tbl__cont">
            <Table column={columns} data={product} />
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
