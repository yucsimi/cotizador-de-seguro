import React from "react";
import PropTypes from "prop-types";

///
const Resumen = ({datos}) => {
  //extraer datos
  const {marca, year, plan} = datos;
  if (marca === "" || year === "" || plan === "") return null;
  return (
    <div className="contenedorResumen">
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Plan: {plan}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </div>
  );
};
Resumen.prototypes = {
  datos: PropTypes.object.isRequired,
};
export default Resumen;
