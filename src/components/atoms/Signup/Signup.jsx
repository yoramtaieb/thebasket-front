import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../molecules/Navbar/Navbar";

import "./Signup.scss";

function Signup() {
  return (
    <>
      <div className="container-global">
        <Navbar />
        <div class="content-signup">
          <form action="#">
            <h2>Create an account</h2>
            <div className="inputs">
              <label htmlFor="#">Firstname</label>
              <input
                type="text"
                name="#"
                id="#"
                placeholder="Enter a firstname"
              />
              <label htmlFor="#" className="marge-more">
                Lastname
              </label>
              <input
                type="text"
                name="#"
                id="#"
                placeholder="Enter a lastname"
              />
              <label htmlFor="#" className="marge-more">
                E-mail
              </label>
              <input type="email" name="#" id="#" placeholder="Enter a email" />
              <label htmlFor="#" className="marge-more">
                Password
              </label>
              <input
                type="password"
                name="#"
                id="#"
                placeholder="Enter a password"
              />
            </div>
            <div className="buttons">
              <div className="signin">
                <button>Create account</button>
              </div>
            </div>
          </form>
          <div className="signin">
            <p>
              You have an account ?{" "}
              <NavLink exact to="/signin">
                <span>Sign In</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
