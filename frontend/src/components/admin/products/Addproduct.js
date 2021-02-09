import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getallcategory } from "../../../actions/category";
import { addproduct } from "../../../actions/product";

const Addproduct = ({ getallcategory, categories, addproduct }) => {
  const [data, setdata] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    invamount: "",
    rate: "",
    color: "",
  });

  const [subcat, setsubcat] = useState([]);

  const {
    name,
    description,
    subcategory,
    category,
    rate,
    color,
    invamount,
  } = data;

  useEffect(() => {
    getallcategory();
  }, [getallcategory]);

  //COm Change FOrm
  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  //Change of select input type
  const onChanges = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    let newsub;
    //Filling up the Subcategory Select Options
    categories.map((cat) => {
      if (cat.categoryname === e.target.value) {
        newsub = cat.subcategory;
      }
      return null;
    });
    setsubcat(newsub);
  };

  //Submit FOrm
  const onSubmit = (e) => {
    e.preventDefault();
    addproduct(data);
  };

  return (
    <Fragment>
      <div className="view__cnt">
        <h3>Add New product</h3>
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
          {categories && (
            <div className="view__item">
              <label>Category</label>
              <select name="category" value={category} onChange={onChanges}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.categoryname}>
                    {cat.categoryname}
                  </option>
                ))}
              </select>
            </div>
          )}
          {subcat.length !== 0 && (
            <div className="view__item">
              <label>Sub Category</label>
              <select
                name="subcategory"
                value={subcategory}
                onChange={onChange}
              >
                <option value="">Select Sub Category</option>
                {subcat.map((sb, i) => (
                  <option key={i} value={sb}>
                    {sb}
                  </option>
                ))}
              </select>
            </div>
          )}
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { getallcategory, addproduct })(
  Addproduct
);
