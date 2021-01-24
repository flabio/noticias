import React, { useState,useEffect, Fragment } from "react";
import useSelect from "../hooks/useSelect";
import axios from 'axios/dist/axios';

const Formulario = ({setCategoria}) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];
  const [categoria, SelectNoticias] = useSelect('general',OPCIONES);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(categoria)
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Buscar notocias por categorias</label>
              <SelectNoticias />
            </div>
            <button type="submit" className="btn btn-success">
              Buscar
            </button>
          </form>
        </div>
      </div>
      <hr/>
    </Fragment>
  );
};

export default Formulario;
