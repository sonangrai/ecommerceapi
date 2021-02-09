import React, { Fragment, useState } from "react";
import Alert from "../layout/Alert";

const Addproduct = () => {
  const [data, setdata] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    invamount: "",
    rate: "",
    color: "",
  });

  const {
    name,
    description,
    subcategory,
    category,
    rate,
    color,
    invamount,
  } = data;

  //Submit FOrm
  const onChange = (e) => {};

  //Submit FOrm
  const onSubmit = (e) => {};

  return (
    <Fragment>
      <div className="view__cnt">
        <h3>Edit Profile</h3>
        <form onSubmit={onSubmit}>
          <div className="view__item">
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={onChange} />
          </div>
          <div className="view__item">
            <label>Description</label>
            <textarea
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>
          <div className="view__item">
            <label>Category</label>
            <select name="category" value={category}>
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="view__item">
            <label>Sub Category</label>
            <select name="subcategory" value={category}>
              <option value="">Select Sub Category</option>
            </select>
          </div>
          <div className="view__item">
            <label>Rate</label>
            <input type="text" name="rate" value={rate} onChange={onChange} />
          </div>
          <div className="view__item">
            <label>Inventory Amount</label>
            <input
              type="text"
              name="invamount"
              value={invamount}
              onChange={onChange}
            />
          </div>
          <div className="view__item">
            <label>Color</label>
            <input type="text" name="color" value={color} onChange={onChange} />
          </div>
          <div className="view__item">
            <button type="submit" className="primary-btn">
              Submit Mail
            </button>
          </div>
        </form>
      </div>
      <Alert />
    </Fragment>
  );
};

export default Addproduct;
