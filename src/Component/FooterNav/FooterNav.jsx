import React from "react";
import MobileOffcanvas from "../MobileOffcanvas";

export default function FooterNav() {
  return (
    <>
      <div className="footernav-section">
        <div className="container footer-nav-box-main d-flex justify-content-between align-items-center">
          <div className="footer-nav-box">
            <a href="#"><img src="./assets/FooterNav/icon1.png" alt="Home icon" /></a>
          </div>
          <div className="footer-nav-box">
            <a href="#"><img src="./assets/FooterNav/application.png" alt="Application icon" /></a>
          </div>
          <div className="footer-nav-box">
            <a href="#"><img src="./assets/FooterNav/telephone.png" alt="Contact icon" /></a>
          </div>
          <div className="footer-nav-box">
            <a 
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              role="button"
              aria-controls="offcanvasMenu"
              aria-expanded="false"
              aria-label="Open mobile menu"
              className="d-lg-none"
            >
              <img src="./assets/FooterNav/burger-bar.png" alt="Menu icon" />
            </a>
          </div>
        </div>
      </div>

      <MobileOffcanvas />
    </>
  );
}
