import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { allproduct } from "../../../actions/product";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";
const DataTable = require("react-data-components").DataTable;

const Viewproducts = ({ allproduct, product }) => {
  useEffect(() => {
    allproduct();
  }, [allproduct]);

  const renderUrl = (val, row) => (
    <Link
      className="btn primary-btn"
      target="_blank"
      to={`/product/${row["_id"]}`}
    >
      View
    </Link>
  );

  const columns = [
    {
      prop: "name",
      title: "Name",
    },
    {
      prop: "color",
      title: "Color",
    },
    {
      prop: "category",
      title: "Category",
    },
    {
      prop: "subcategory",
      title: "Sub Category",
    },
    {
      prop: "rate",
      title: "Rate",
    },
    {
      prop: "invamount",
      title: "Inventroy Amount",
    },
    {
      prop: "name",
      title: "Name",
    },
    {
      title: "Actions",
      prop: "actions",
    },
    { title: "Actions", render: renderUrl },
  ];

  return (
    <Fragment>
      {product ? (
        <div className="data__tbl">
          <DataTable
            keys="_id"
            columns={columns}
            initialData={product}
            initialPageLength={5}
            initialSortBy={{ prop: "date", order: "descending" }}
          />
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
