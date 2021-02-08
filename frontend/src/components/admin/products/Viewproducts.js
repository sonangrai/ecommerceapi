import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { allproduct } from "../../../actions/product";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";
import Search from "../common/Search";
import Table from "../common/Table";

const Viewproducts = ({ allproduct, product }) => {
  const [row, setrow] = useState([]);

  useEffect(() => {
    allproduct();
    setrow(product);
  }, [allproduct, product]);

  const columns = [
    "SNo",
    "Name",
    "Color",
    "Category",
    "Subcategory",
    "Rate",
    "Inventory Amount",
    "Actions",
  ];

  const dataindex = [
    "name",
    "color",
    "category",
    "subcategory",
    "rate",
    "invamount",
  ];

  //Getting Filtered Data from Search
  const returnfilterdata = (fdata) => {
    setrow(fdata);
  };

  return (
    <Fragment>
      {row ? (
        <>
          <div className="search__box">
            <Search row={row} returnfilterdata={returnfilterdata} />
          </div>
          <div className="view__cnt">
            <div className="tbl__cont">
              <Table
                column={columns}
                row={row}
                dataindex={dataindex}
                to="product"
              />
            </div>
          </div>
        </>
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
