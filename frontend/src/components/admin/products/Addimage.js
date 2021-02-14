import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { getproduct } from "../../../actions/product";
import { getimage, uploadimg } from "../../../actions/gallery";
import Loader from "../layout/Loader";

const Addimage = ({
  match,
  getproduct,
  product,
  getimage,
  gallery,
  uploadimg,
}) => {
  useEffect(() => {
    getproduct(match.params.pid);
  }, [getproduct, match]);

  useEffect(() => {
    getimage(match.params.pid);
  }, [getimage, match]);

  const [data, setdata] = useState({
    image: "",
  });

  const onChange = (e) => {
    setdata({ ...data, image: e.target.files[0] });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    uploadimg(data, match.params.pid);
  };

  return (
    <Fragment>
      {product ? (
        <div className="gal__add">
          <Helmet>
            <title>Add Image for {product.name}</title>
          </Helmet>
          <div className="gall__row">
            {gallery ? (
              <>
                {gallery.map((gal) => (
                  <div className="gal__item" key={gal._id}>
                    <img src={gal.imageurl} alt="" />
                  </div>
                ))}
                <div className="gal__item">
                  <form onSubmit={onSubmit}>
                    <label htmlFor="image">Select Image</label>
                    <input type="file" onChange={onChange} />
                    <button type="submit" className="btn primary-btn">
                      Add Image
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  gallery: state.gallery.gallery,
});

export default connect(mapStateToProps, { getproduct, getimage, uploadimg })(
  Addimage
);
