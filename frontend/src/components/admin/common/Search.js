import React, { Fragment, useState } from "react";

const Search = () => {
  const [query, setquery] = useState("");

  //Handle Change
  const onChange = (e) => {
    setquery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <div className="tbl__search">
        <form>
          <input onChange={onChange} value={query} type="text" />
          <button>Search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
