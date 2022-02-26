import React from "react";
import PropTypes from "prop-types";
import {TransitionGroup, CSSTransition} from "react-transition-group";

//
const Resultado = ({cotizacion}) => {
  return cotizacion === 0 ? (
    <p className="mensaje">Elige Marca, año y tipo de seguro</p>
  ) : (
    <div className="resultadoCotizacion">
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{enter: 500, exit: 500}}
        >
          <p className="textoCotiacion">El total Es: ${cotizacion}</p>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
Resultado.prototypes = {
  cotizacion: PropTypes.number.isRequired,
};
export default Resultado;
