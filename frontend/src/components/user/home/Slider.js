import React, { Fragment } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import OwlCarousel from "react-owl-carousel";
import "animate.css";

const Slider = () => {
  return (
    <Fragment>
      <section className="slider">
        <OwlCarousel
          className="owl-carousel owl-theme main-slider"
          loop={true}
          margin={10}
          nav={true}
          items="1"
          dots={false}
          animateOut="fadeOut"
          autoplay={true}
        >
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/12/14/57/workshop-984022_1280.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2018/08/31/19/16/fan-3645379_1280.jpg"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://cdn.pixabay.com/photo/2018/05/12/16/07/lost-places-3393809_1280.jpg"
              alt=""
            />
          </div>
        </OwlCarousel>
      </section>
    </Fragment>
  );
};

export default Slider;
