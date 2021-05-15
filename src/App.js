import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkmode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkmode/Theme";
import { useDarkMode } from "./components/darkmode/useDarkMode";

import "./App.scss";

function App() {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Routes />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
