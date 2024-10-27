import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Subscription() {
  // Owl Carousel settings
  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText : [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="subscription-section mt-4 mb-5">
      <div className="container">
        <div className="subscription-section-tittle mb-4">
          <h5 className="text-start">All Subscription</h5>
        </div>
        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {/* Card 1 */}
          <div className="sub-card-main">
              <div className="sub-card-tittle d-flex gap-3 align-items-center">
                <div className="sub-card-img">
                  <img src="assets/subscription/img1.jpg" alt="Breakfast" />
                </div>
                <div className="sub-card-name">
                  <h6 className="m-0">Breakfast</h6>
                  <p>Subscription</p>
                </div>
              </div>
              <div className="sub-card-body mt-3">
                <h6 className="mb-3">Monthly/Weekly/15 Days</h6>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Provide daily breakfast</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Easy Refund</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Support unlimited</p>
                </div>
                <div className="sub-card-btn text-center mb-3 mt-3">
                  <a href="#">Buy now</a>
                </div>
              </div>
          </div>

          {/* Card 2 */}
          <div className="sub-card-main">
           
              <div className="sub-card-tittle d-flex gap-3 align-items-center">
                <div className="sub-card-img">
                  <img src="assets/subscription/img1.jpg" alt="Breakfast" />
                </div>
                <div className="sub-card-name">
                  <h6 className="m-0">Breakfast</h6>
                  <p>Subscription</p>
                </div>
              </div>
              <div className="sub-card-body mt-3">
                <h6 className="mb-3">Monthly/Weekly/15 Days</h6>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Provide daily breakfast</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Easy Refund</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Support unlimited</p>
                </div>
                <div className="sub-card-btn text-center mb-3 mt-3">
                  <a href="#">Buy now</a>
                </div>
              </div>
            
          </div>

          {/* Card 3 */}
          <div className="sub-card-main">
          
              <div className="sub-card-tittle d-flex gap-3 align-items-center">
                <div className="sub-card-img">
                  <img src="assets/subscription/img1.jpg" alt="Breakfast" />
                </div>
                <div className="sub-card-name">
                  <h6 className="m-0">Breakfast</h6>
                  <p>Subscription</p>
                </div>
              </div>
              <div className="sub-card-body mt-3">
                <h6 className="mb-3">Monthly/Weekly/15 Days</h6>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Provide daily breakfast</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Easy Refund</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Support unlimited</p>
                </div>
                <div className="sub-card-btn text-center mb-3 mt-3">
                  <a href="#">Buy now</a>
                </div>
              </div>
           
          </div>

          {/* Card 4 */}
          <div className="sub-card-main">
           
              <div className="sub-card-tittle d-flex gap-3 align-items-center">
                <div className="sub-card-img">
                  <img src="assets/subscription/img1.jpg" alt="Breakfast" />
                </div>
                <div className="sub-card-name">
                  <h6 className="m-0">Breakfast</h6>
                  <p>Subscription</p>
                </div>
              </div>
              <div className="sub-card-body mt-3">
                <h6 className="mb-3">Monthly/Weekly/15 Days</h6>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Provide daily breakfast</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Easy Refund</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Support unlimited</p>
                </div>
                <div className="sub-card-btn text-center mb-3 mt-3">
                  <a href="#">Buy now</a>
                </div>
              </div>
         
          </div>

    {/* Card 5 */}
          <div className="sub-card-main">
           
              <div className="sub-card-tittle d-flex gap-3 align-items-center">
                <div className="sub-card-img">
                  <img src="assets/subscription/img1.jpg" alt="Breakfast" />
                </div>
                <div className="sub-card-name">
                  <h6 className="m-0">Breakfast</h6>
                  <p>Subscription</p>
                </div>
              </div>
              <div className="sub-card-body mt-3">
                <h6 className="mb-3">Monthly/Weekly/15 Days</h6>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Provide daily breakfast</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Easy Refund</p>
                </div>
                <div className="sub-card-body-para d-flex align-items-center mb-2">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  <p>Support unlimited</p>
                </div>
                <div className="sub-card-btn text-center mb-3 mt-3">
                  <a href="#">Buy now</a>
                </div>
              </div>
         
          </div>


        </OwlCarousel>
      </div>
    </div>
  );
}
