import React, { useState, useEffect } from "react";
import "../styles/card.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handelAgregar,
  handelQuitar,
  handelAumentar,
  handelDisminuir,
}) => {
  const [agregado, setAgregado] = useState(false);

  /* const clickAgregar = ()=>{
    handelAgregar()
    setAgregado(true)
  }
   const clickQuitar = ()=>{
    handelQuitar()
    setAgregado(false)
  } */

  useEffect(() => {
    // Recupera el estado 'agregado' específico del producto desde localStorage al montar el componente
    const storedAgregado = localStorage.getItem(`${titulo}_agregado`);
    if (storedAgregado) {
      setAgregado(JSON.parse(storedAgregado));
    }
  }, [titulo]);

  const clickAgregar = () => {
    if (!agregado) {
      handelAgregar();
      setAgregado(true);
      // Almacena el estado 'agregado' específico del producto en localStorage
      localStorage.setItem(`${titulo}_agregado`, JSON.stringify(true));
    }
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">${precio}</p>

        {agregado ? (
          <div>
            <span role="img" aria-label="Checkmark">
              ✅
            </span>{" "}
            Producto Agregado al Carrito
          </div>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};
