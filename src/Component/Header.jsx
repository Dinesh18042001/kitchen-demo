// import React, { useEffect } from 'react';
// import Login from './Modal/Login';
// import SignUp from './Modal/SignUp';

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
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* Right Side - Other Links */}
//             <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Contact</a>
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
//       <Login />
//       <SignUp />
//     </>
//   );
// }



import React, { useEffect } from 'react';
import Login from './Modal/Login';
import SignUp from './Modal/SignUp';

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
          <a className="navbar-brand" href="#">Navbar</a>
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasMenu"
            role="button"
            aria-controls="offcanvasMenu"
            aria-expanded="false"
            className="d-lg-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                fill="#000"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-2 mb-lg-0">
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

            {/* Login and SignUp */}
            <div className="header-btn d-flex ms-3">
              <a
                className="me-2"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                aria-label="Open Login Modal"
              >
                Login
              </a>
              <a
                className="me-2"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                aria-label="Open SignUp Modal"
              >
                SignUp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
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
          <div className="d-flex flex-column mt-4">
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

      <Login />
      <SignUp />
    </>
  );
}

