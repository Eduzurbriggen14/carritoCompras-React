import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
//traemos los productos mediante useContext
  const {productos} = useContext (ProductosContext)

  const {
    agregarCompra,
    eliminarCompra,
  }= useContext(CarritoContext)

  const handelAgregar = (compra)=>{
    agregarCompra(compra)

  }
  const handelQuitar = (id)=>{
    eliminarCompra(id)

  }

  return (
    <>
      <h2>PRODUCTOS</h2>
      <hr />

      {productos.map((producto) => {
        //realizamos un map para mostrar las propiedades del producto que nos interesa mostrar
        return (
          <Card
            key={producto.id} // clave única para cada elemento del array
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handelAgregar={()=>handelAgregar(producto)}
            handelQuitar={()=>handelQuitar(producto.id)}
          />
        );
      })}
    </>
  );
};
