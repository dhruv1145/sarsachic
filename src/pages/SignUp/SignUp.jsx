import React from "react";
import image from "../../images/n-1.jpeg";
import Google from "../../images/search-1.png";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="sign-container">
      <div className="sign-section-1">
        <div className="sign-text">
          <h1>Welcome Back</h1>
          <span>Welcome back! Please enter Your details</span>
        </div>

        <div className="sign-input-wrapper">
          <div className="sign-input">
            <label htmlFor="input-box">Name</label>
            <input
              type="email"
              placeholder=" Enter Your Name "
              id="input-box"
            />
          </div>

          <div className="sign-input">
            <label htmlFor="input-box">Email</label>
            <input
              type="email"
              placeholder=" Enter your email"
              id="input-box"
            />
          </div>

          <div className="sign-input">
            <label htmlFor="input-box">Password</label>
            <input type="password" placeholder=" *********" id="input-box" />
          </div>
        </div>

        <div className="wrapper">
          <div class="remember-checkbox-wrapper">
            <input class="remember-checkbox" type="checkbox" />
            <span>Remember Me</span>
          </div>

          <div class="forgot-password">Forgot password?</div>
        </div>

        <div className="button">
          <button class="sign-in-button">Register</button>

          <button class="Google-button">
            <img src={Google} alt="" />
            Sign In With Google
          </button>
        </div>

        <div class="dont-have-an-account-sign-up-wrapper">
          <div class="dont-have-an-container">
            <span class="dont-have-an">Alreeady have an account?</span>
            <span class="span"> </span>
            <Link to="/login" class="sign-up-fo">
              Login here!
            </Link>
          </div>
        </div>
      </div>

      <div className="sign-section-2">
        <img className="sign-cover-img" src={image} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
