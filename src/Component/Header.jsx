// import React, { useEffect } from "react";
// import Login from "./Modal/Login";
// import SignUp from "./Modal/SignUp";
// import MobileOffcanvas from "./MobileOffcanvas";

// export default function Header() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector(".navbar");
//       if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("header-scrolled");
//       } else {
//         nav.classList.remove("header-scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <a
//             data-bs-toggle="offcanvas"
//             href="#offcanvasMenu"
//             role="button"
//             aria-controls="offcanvasMenu"
//             aria-expanded="false"
//             className="d-lg-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               fill="currentColor"
//               className="bi bi-list"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 fill="#000"
//                 d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//               />
//             </svg>
//           </a>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>

//             {/* Login and SignUp */}
//             <div className="header-btn d-flex ms-3">
//               <a
//                 className="me-2"
//                 href="#"
//                 data-bs-toggle="modal"
//                 data-bs-target="#loginModal"
//                 aria-label="Open Login Modal"
//               >
//                 Login
//               </a>
//               <a
//                 className="me-2"
//                 href="#"
//                 data-bs-toggle="modal"
//                 data-bs-target="#signupModal"
//                 aria-label="Open SignUp Modal"
//               >
//                 SignUp
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Offcanvas Menu */}
//       <MobileOffcanvas />

//       <Login />
//       <SignUp />
//     </>
//   );
// }

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
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
