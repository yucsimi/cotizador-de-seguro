import React from "react";
import PropTypes from "prop-types";

const Header = ({titulo}) => {
  return (
    <header className="ContenedorHeader">
      <h1> {titulo}</h1>
    </header>
  );
};
Header.prototypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
