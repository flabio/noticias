import React, { useState, useEffect, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import axios from "axios/dist/axios";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const consultaApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=09845f0f86b445999aca4dd4919a3907`;
      const resultado = await axios.get(url);
      setNoticias(resultado.data.articles);
      console.log(resultado.data.articles);
    };
    consultaApi();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container">
        <Formulario setCategoria={setCategoria} />
        <Resultado noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
