import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const ComprasPage = () => {
  const [productos, setProductos] = useState([]);

  //traemos los productos desde la api
  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <h2>PRODUCTOS</h2>
      <hr />

      {productos.map((producto) => {
        return (
          <Card
            key={producto.id} // clave única para cada elemento del array
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
          />
        );
      })}
    </>
  );
};
