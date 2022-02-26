import React, {useState} from "react";
import PropTypes from "prop-types";
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from "../helper";

const Formulario = ({guardarResumen, guardarCargando}) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);
  ///
  const {marca, year, plan} = datos;

  //leer datos del formulario y colocarlo en el state
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario presiona submit
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);
    // base de datos de 2000
    let resultado = 2000;

    // obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);

    // por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    //americano 15%, //asiatico 5%, //europeo 30%
    resultado = calcularMarca(marca) * resultado;
    //basico aumenta 20%
    // completo aumenta 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(3);

    guardarCargando(true);

    setTimeout(() => {
      // elimina spiner
      guardarCargando(false);
      //pasa informacion al componente principal
      guardarResumen({
        cotizacion: Number(resultado),
        datos,
      });
    }, 1000);

    ////
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? (
        <div className="alert-error" null>
          Todos los campos son obligatorios
        </div>
      ) : null}

      <div className="campo">
        <label className="label" htmlFor="">
          Marca
        </label>
        <select
          className="select"
          name="marca"
          value={marca}
          onChange={obtenerInformacion}
        >
          <option value="">--Seleccione--</option>
          <option value="Americano">Americano</option>
          <option value="Europeo">Europeo</option>
          <option value="Asiatico">Asiatico</option>
        </select>
      </div>

      <div className="campo">
        <label className="label" htmlFor="">
          Año
        </label>
        <select
          className="select"
          name="year"
          value={year}
          onChange={obtenerInformacion}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>
      <div className="campo">
        <label className="label">Plan:</label>
        <input
          className="input"
          type="radio"
          name="plan"
          value="Basico"
          /* checked={plan === "basico"} */
          onChange={obtenerInformacion}
        />
        Basico
        <input
          className="input"
          type="radio"
          name="plan"
          value="completo"
          /*  checked={plan === "completo"} */
          onChange={obtenerInformacion}
        />
        Completo
      </div>

      <button className="button" type="submit">
        Cotizar
      </button>
    </form>
  );
};

Formulario.prototypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired,
};

export default Formulario;
