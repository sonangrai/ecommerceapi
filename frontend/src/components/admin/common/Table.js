import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Table = ({ column, row, dataindex, to }) => {
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
          {row.map((prod, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              {dataindex.map((datai, ix) => (
                <td key={ix}>{prod[datai]}</td>
              ))}
              <td>
                <Link className="btn primary-btn" to={`/${to}/${prod._id}`}>
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
