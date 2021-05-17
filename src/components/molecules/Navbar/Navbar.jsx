import React from "react";
import { NavLink } from "react-router-dom";

import Toggle from "../../darkmode/Toggle";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../darkmode/globalStyles";
import { lightTheme, darkTheme } from "../../darkmode/Theme";
import { useDarkMode } from "../../darkmode/useDarkMode";

import Github from "../../../assets/img/svgr/Github";
import LogoSneakers from "../../../assets/img/svgr/LogoSneakers";
import Home from "../../../assets/img/svgr/Home";
import Categories from "../../../assets/img/svgr/Categories";
import Heart from "../../../assets/img/svgr/Heart";

import "./Navbar.scss";

function Navbar() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <nav>
        <div className="github-toggle">
          <a
            href="https://github.com/yoramtaieb/thebasket-front"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="path-white" />
          </a>
          <div>
            <ThemeProvider theme={themeMode}>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </ThemeProvider>
          </div>
        </div>
        <div className="container-logo-links">
          <NavLink exact to="/">
            <LogoSneakers className="logo-sneakers path-white" />
          </NavLink>
          <div className="links">
            <NavLink
              exact
              to="/"
              className="link"
              activeClassName="active-home"
            >
              <Home className="path-black" activeClassName="active-home" />
              <h2>Home</h2>
            </NavLink>
            <NavLink
              exact
              to="/categories"
              className="link"
              activeClassName="active-categories"
            >
              <Categories
                className="path-black"
                activeClassName="active-categories"
              />
              <h2>Categories</h2>
            </NavLink>
            <NavLink
              exact
              to="/wishlist"
              className="link"
              activeClassName="active-wishlist"
            >
              <Heart className="path-black" activeClassName="active-wishlist" />
              <h2>Wishlist</h2>
            </NavLink>
          </div>
        </div>
        <div className="auth">
          <NavLink exact to="/signin" className="test" activeClassName="active">
            <h2 className="signin">Sign In</h2>
          </NavLink>
          <NavLink exact to="/signup" activeClassName="active">
            <h2 className="signup">Sign Up</h2>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
