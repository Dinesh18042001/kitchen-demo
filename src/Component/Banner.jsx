import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Banner() {
  // Define options for the carousel
  const options = {
    items: 3,
    margin: 30,
    loop: true,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // animateIn: "fadeIn",
    // animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div className="banner-section">
      {/* Owl Carousel goes here */}
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="banner-img position-relative">
            <img src="/assets/banner/img1.jpg" alt="" />

            <div className="banner-info">
              <h1 className="text-center"> Welcome to apna Kitchne</h1>
              <p className="text-center">We are providing subscription for Breakfast, Lunch, Dinner</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="banner-img">
            <img src="/assets/banner/img2.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="banner-img">
            <img src="/assets/banner/img3.jpg" alt="" />
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
