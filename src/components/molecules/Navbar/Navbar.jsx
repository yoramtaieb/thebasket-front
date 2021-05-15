import React from "react";
import { NavLink } from "react-router-dom";

import Toggle from "../../darkmode/Toggle";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../darkmode/globalStyles";
import { lightTheme, darkTheme } from "../../darkmode/Theme";
import { useDarkMode } from "../../darkmode/useDarkMode";

import "./Navbar.scss";

function Navbar() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <nav>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
        <NavLink to="/signin">
          <h1>Signin</h1>
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
