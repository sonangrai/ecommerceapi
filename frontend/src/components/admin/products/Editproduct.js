import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getallcategory } from "../../../actions/category";
import { updateproduct, getproduct } from "../../../actions/product";
import Loader from "../layout/Loader";

const Editproduct = ({
  getallcategory,
  categories,
  getproduct,
  product,
  updateproduct,
  match,
}) => {
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
    getproduct(match.params.pid);
  }, [getproduct, match]);

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
    updateproduct(data, match.params.pid);
    e.target.reset();
  };

  //Reset Form
  const reset = (e) => {
    setdata({
      name: "",
      description: "",
      category: "",
      subcategory: "",
      invamount: "",
      rate: "",
      color: "",
    });
  };

  return (
    <Fragment>
      {product ? (
        <>
          <Helmet>
            <title>Edit - {product.name}</title>
          </Helmet>
          <div className="edit__product">
            <div className="view__cnt">
              <h3>Edit product</h3>
              <form onSubmit={onSubmit}>
                <div className="view__item">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder={product.name}
                  />
                </div>
                <div className="view__item">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={description}
                    onChange={onChange}
                    placeholder={product.description}
                  />
                </div>
                {categories && (
                  <div className="view__item">
                    <label>Category</label>
                    <select
                      name="category"
                      value={category}
                      onChange={onChanges}
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat.categoryname}>
                          {cat.categoryname}
                        </option>
                      ))}
                    </select>
                    <small className="small__info">
                      Current: {product.category}
                    </small>
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
                    <small className="small__info">
                      Current: {product.subcategory}
                    </small>
                  </div>
                )}
                <div className="view__item">
                  <label>Rate</label>
                  <input
                    type="text"
                    name="rate"
                    value={rate}
                    onChange={onChange}
                    placeholder={product.rate}
                  />
                </div>
                <div className="view__item">
                  <label>Inventory Amount</label>
                  <input
                    type="text"
                    name="invamount"
                    value={invamount}
                    onChange={onChange}
                    placeholder={product.invamount}
                  />
                </div>
                <div className="view__item">
                  <label>Color</label>
                  <input
                    type="text"
                    name="color"
                    value={color}
                    onChange={onChange}
                    placeholder={product.color}
                  />
                </div>
                <div className="view__item">
                  <button type="submit" className="primary-btn">
                    Update
                  </button>
                  <button
                    type="reset"
                    className="secondary-btn"
                    onClick={reset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  product: state.product.product,
});

export default connect(mapStateToProps, {
  getallcategory,
  getproduct,
  updateproduct,
})(Editproduct);
