import React from 'react'

export default function MobileOffcanvas() {
  return (
   <>
      <div className="offcanvas offcanvas-end offcanvas-half" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* Login and Sign Up Buttons */}
          <div className="d-flex flex-column mt-5">
            <a
              className="btn btn-primary mb-2"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
              aria-label="Open Login Modal"
            >
              Login
            </a>
            <a
              className="btn btn-secondary"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
              aria-label="Open SignUp Modal"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
   </>
  )
}
