import React, { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Sign Up
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
                    placeholder="Enter your Number"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="signupEmail"
                    placeholder="Enter your Email"
                  />
                </div>

                {/* Password field with eye icon */}
                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control custom-input"
                    id="signupPassword"
                    placeholder="Enter your password"
                  />
                  <i
                    className={`fa ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    } position-absolute`}
                    style={{
                      top: "50%",
                      right: "10px",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                    }}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>

                {/* Confirm password field with eye icon */}
                <div className="mb-3 position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control custom-input"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <i
                    className={`fa ${
                      showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                    } position-absolute`}
                    style={{
                      top: "50%",
                      right: "10px",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                    }}
                    onClick={toggleConfirmPasswordVisibility}
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

                {/* Sign Up button */}
                <div className="signup-btn mt-4">
                  <a href="#" type="submit" className="w-100 text-center">
                    Sign Up
                  </a>
                </div>

                {/* Login Now link */}
                <div className="login-btn mt-3 text-center">
                  Have an account ? <a href="#">Login Now</a>
                </div>
                <hr />
                <div className="google-login-btn text-center">
                  <a href="#">
                    <i class="fa-brands fa-google me-2"></i> Sign with Google
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
