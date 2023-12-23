import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

// Define el reducer antes de su uso
const comprasReducer = (state = [], action = {}) => {
  switch (action.type) {
    case "[Carrito] Agregar Compra":
      return [...state, action.payload];

    case "[Carrito] Aumentar Cantitad":
      // Lógica para aumentar la cantidad
      break;

    case "[Carrito] Disminuir Cantidad":
      // Lógica para disminuir la cantidad
      break;

    case "[Carrito] Eliminar Compra":
      return state.filter((compra) => compra.id !== action.payload);

    default:
      return state;
  }
};

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const [ListaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    const action = {
      type: "[Carrito] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: "[Carrito] Aumentar Cantitad",
      payload: id,
    };
    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: "[Carrito] Disminuir Cantidad",
      payload: id,
    };
    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[Carrito] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        ListaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};