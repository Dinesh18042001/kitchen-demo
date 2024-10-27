
import React, { useEffect } from "react";
import Login from "./Modal/Login";
import SignUp from "./Modal/SignUp";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
         <img src="/assets/logo.png" alt="" />
          </a>
          <div
            className="collapse navbar-collapse me-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          

          {/* Profile Icon with Dropdown */}
          <div className="dropdown profile-manu ms-auto">
            <a
              href="#"
              role="button"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Open profile options"
              className="profile-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#fff"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </a>

            <ul
              className="dropdown-menu dropdown-menu-end mt-3"
              aria-labelledby="profileDropdown"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  aria-label="Open Login Modal"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  aria-label="Open SignUp Modal"
                >
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login and SignUp Modals */}
      <Login />
      <SignUp />
    </>
  );
}
