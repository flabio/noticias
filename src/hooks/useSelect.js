import React, { useState } from "react";
const useSelect = (stateInicial, opciones) => {

  const [state,setState]=useState(stateInicial);
  const SelectNoticias = () => (
    <select className="form-control" value={state} onChange={e=>setState(e.target.value)}>
      
      {opciones.map(option=>(
          <option key={option.value}  value={option.value}>{option.label}</option>
      ))}
    </select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
