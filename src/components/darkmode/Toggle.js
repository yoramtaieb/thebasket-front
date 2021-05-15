import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

import Sun from "../../img/svgr/Sun.jsx";
import Togglemoon from "../../img/svgr/Moon";

const Button = styled.button`
   {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Togglemoon /> : <Sun />}
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
