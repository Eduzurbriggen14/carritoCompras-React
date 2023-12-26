import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { FormCompra } from "../components/FormCompra";
import { Modal, Button } from "react-bootstrap";

export const CarritoPage = () => {
  const {
    listaCompras,
    eliminarCompra,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
  } = useContext(CarritoContext);

  const [mostrarForm, setMostrarForm] = useState(false);
  const [mostrarModalCompraExitosa, setMostrarModalCompraExitosa] =
    useState(false);

  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };

  const handleComprar = () => {
    if (listaCompras.length === 0) {
      alert("El carrito no posee elementos");
      setMostrarForm(false);
    } else {
      setMostrarForm(true);
    }
  };

  const handleCompraExitosa = () => {
    setMostrarForm(false);
    setMostrarModalCompraExitosa(true);
    vaciarCarrito();
  };

  const handleCerrarCompraExitosa = () => {
    setMostrarModalCompraExitosa(false);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar Producto</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th>
              <b>TOTAL : </b>
            </th>
            <td>${calcularTotal()}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" onClick={handleComprar}>
          Comprar
        </button>
      </div>

      <div>
        {mostrarForm && (
          <Modal show={mostrarForm} onHide={() => setMostrarForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Formulario de Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormCompra handleCompraExitosa={handleCompraExitosa} />
            </Modal.Body>
          </Modal>
        )}

        {mostrarModalCompraExitosa && (
          <Modal
            show={mostrarModalCompraExitosa}
            onHide={handleCerrarCompraExitosa}
          >
            <Modal.Header closeButton>
              <Modal.Title>Compra Exitosa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCerrarCompraExitosa}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};
