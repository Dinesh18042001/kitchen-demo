import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Banner() {
  // Define options for the carousel
  const options = {
    items: 3,
    margin: 30, 
    loop: true, 
    autoplay: true,
    dots: false, 
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
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
    <div className="banner-section mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1>manu</h1>
          </div>
          <div className="col-lg-8">
            {/* Owl Carousel goes here */}
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="banner-img">
                    <img src="/assets/banner/img1.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}
