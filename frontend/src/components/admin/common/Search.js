import React, { Fragment, useState } from "react";

const Search = ({ row, returnfilterdata }) => {
  const [query, setquery] = useState("");
  const [filterdata, setfilterdata] = useState("");

  //Handle Change
  const onChange = (e) => {
    setquery(e.target.value);
    const da = row.filter((row) => row.name.indexOf(query) !== -1);
    setfilterdata(da);
  };

  //Submit
  const onSubmit = (e) => {
    e.preventDefault();
    returnfilterdata(filterdata);
    console.log("query", query, "FilteredData", filterdata);
  };

  return (
    <Fragment>
      <div className="tbl__search">
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={query} type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
