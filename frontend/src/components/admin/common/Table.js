import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Table = ({ column, data }) => {
  return (
    <Fragment>
      <table className="tbl">
        <thead>
          <tr>
            {column.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((prod, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.color}</td>
              <td>{prod.category}</td>
              <td>{prod.subcategory}</td>
              <td>{prod.rate}</td>
              <td>{prod.invamount}</td>
              <td>
                <Link className="btn primary-btn" to={`/product/${prod._id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
