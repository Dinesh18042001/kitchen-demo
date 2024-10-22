import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control custom-input"
                  id="signupEmail"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password field with eye icon */}
              <div className="mb-3 position-relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control custom-input"
                  id="signupPassword"
                  placeholder="Enter your password"
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
                  style={{ top: '50%', right: '10px', cursor: 'pointer', transform: 'translateY(-50%)' }}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>


               {/* Remember Me and Forgot Password */}
               <div className="remember-Forgot d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <div>
                  <a href="#" className="forgot-password-link">
                    Forgot Password?
                  </a>
                </div>
              </div>


              <div className="signup-btn mt-4">
                <a href="#" type="submit" className="w-100 text-center">
                  Login
                </a>
              </div>

              {/* Login Now link */}
              <div className="login-btn mt-4 text-center">
              Create an account ? <a href="#"> Sign Up</a>
              </div>



            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
