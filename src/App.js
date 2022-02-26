import "./App.css";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Forms";
import Resumen from "./Componentes/Resumen";
import Resultado from "./Componentes/Resultado";
import Spiner from "./Componentes/Spiner";
import React, {useState} from "react";

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);

  //extraer datos
  const {datos, cotizacion} = resumen;

  return (
    <div className="contenedor">
      <Header titulo="Cotizador de seguros" />;
      <div className="contenedorFormulario">
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spiner /> : null}
        <Resumen datos={datos} />
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </div>
    </div>
  );
}

export default App;
