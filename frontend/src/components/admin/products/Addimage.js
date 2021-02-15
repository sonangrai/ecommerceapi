import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { getproduct } from "../../../actions/product";
import { delimg, getimage, uploadimg } from "../../../actions/gallery";
import Loader from "../layout/Loader";

const Addimage = ({
  match,
  getproduct,
  product,
  getimage,
  gallery,
  uploadimg,
  delimg,
}) => {
  const [loading, setloading] = useState(false);

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
    setloading(
      true,
      uploadimg(data, match.params.pid).then(() => setloading(false))
    );
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
                    <span className="del__img">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          delimg(gal._id);
                        }}
                      >
                        X
                      </button>
                    </span>
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
                  {loading && (
                    <div className="uploading__anim">
                      <span>Uploading</span>
                    </div>
                  )}
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
  gallery: state.gallery.galleries,
});

export default connect(mapStateToProps, {
  getproduct,
  getimage,
  uploadimg,
  delimg,
})(Addimage);
