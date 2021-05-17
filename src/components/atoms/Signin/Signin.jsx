import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../molecules/Navbar/Navbar";

import logoFb from "../../../assets/img/facebook.svg";
import logoGoogle from "../../../assets/img/google.svg";

import "./Signin.scss";

function Signin() {
  return (
    <>
      <div className="container-global">
        <Navbar />
        <div class="content-signin">
          <form action="#">
            <h2>Sign into your account</h2>
            <div className="inputs">
              <label htmlFor="#">E-mail</label>
              <input
                type="email"
                name="#"
                id="#"
                placeholder="Enter your e-mail"
              />
              <label htmlFor="#" className="password">
                Password
              </label>
              <input
                type="password"
                name="#"
                id="#"
                placeholder="Enter your password"
              />
            </div>
            <div className="buttons">
              <div className="signin">
                <button>Sign In</button>
              </div>
              <div className="socialnetwork">
                <button>
                  Facebook <img src={logoFb} alt="logo-fb" />
                </button>
                <button>
                  Google <img src={logoGoogle} alt="logo-google" />
                </button>
              </div>
            </div>
          </form>
          <div className="signup">
            <p>
              You do not have an account ?{" "}
              <NavLink exact to="/signup">
                <span>Sign Up</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
