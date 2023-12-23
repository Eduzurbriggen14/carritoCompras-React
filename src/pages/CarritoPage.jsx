import React from "react";

export const CarritoPage = () => {
  return (
    <>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Eliminar Producto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Nombre</th>
          <td>Precio</td>
          <td>Cantidad</td>
          <td>Eliminar Producto</td>
        </tr>
      </tbody>
    </table>
    <div className="d-grid gap-2">
        <button className="btn btn-primary">Comprar</button>
    </div>
    </>
    
  );
};
