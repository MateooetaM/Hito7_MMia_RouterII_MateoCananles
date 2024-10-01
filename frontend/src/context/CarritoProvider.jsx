import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[CARRITO] Agregar compra":
      return [...state, action.payload];
    case "[CARRITO] Aumentar Cantidad compra":
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) return { ...item, cantidad: cant };
        return item;
      });

    case "[CARRITO] Disminuir Cantidad compra": // TODO: Agregar cantidad y modificar
      return state.map((item) => {
        const cant = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1)
          return { ...item, cantidad: cant };
        return item;
      });
    case "[CARRITO] Eliminar compra":
      return state.filter((compra) => compra.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar compra",
      payload: id,
    };
    dispatch(action);
  };
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0)
      .toFixed(2);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
        calcularTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
