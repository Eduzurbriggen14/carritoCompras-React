import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import { useEffect } from "react";


const comprasReducer = (state = [], action = {}) => {
  switch (action.type) {
    case "[Carrito] Agregar Compra":
      
      return [...state, action.payload];

    case "[Carrito] Aumentar Cantitad":
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) {
          return { ...item, cantidad: cant };
        } else {
          return item;
        }
      });

    case "[Carrito] Disminuir Cantidad":
      return state.map((item) => {
        const cant = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1) {
          return { ...item, cantidad: cant };
        } else {
          return item;
        }
      });

    case "[Carrito] Eliminar Compra":
      return state.filter((compra) => compra.id !== action.payload);

    case "[Carrito] Establecer Carrito":
      console.log("Nuevo carrito:", action.payload); 
      return action.payload;

    default:
      return state;
  }
};

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  /* useEffect(() => {
    const storedCarrito = localStorage.getItem("carrito");
    if (storedCarrito) {
      const parsedCarrito = JSON.parse(storedCarrito);
      establecerCarritoDesdeLocalStorage(parsedCarrito);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(ListaCompras));
  }, [ListaCompras]); */

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
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

  const establecerCarritoDesdeLocalStorage = (carrito) => {
    const action = {
      type: "[Carrito] Establecer Carrito",
      payload: carrito,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
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
