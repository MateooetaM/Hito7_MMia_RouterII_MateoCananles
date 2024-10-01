import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext";

const urlBase = "http://localhost:5000/api/pizzas";

export const ProductosProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [detalles, setDetalles] = useState({});

  const getData = async () => {
    const response = await fetch(urlBase);
    const datos = await response.json();
    setData(datos);
  };

  const getDetalles = async (id) => {
    const response = await fetch(`${urlBase}/${id}`);
    const data = await response.json();
    setDetalles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductosContext.Provider
      value={{ data, setData, detalles, setDetalles, getDetalles }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
