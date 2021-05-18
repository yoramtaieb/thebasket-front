import React from "react";
import Navbar from "../molecules/Navbar/Navbar";
import Home from "../pages/Home/Home";

import "./Layout.scss";

function Layout() {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default Layout;
