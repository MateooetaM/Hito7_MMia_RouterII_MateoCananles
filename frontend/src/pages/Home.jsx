import { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import "./Home.css";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

function Home() {
  const { data } = useContext(ProductosContext);
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };
  const handleAumentar = (id) => {
    aumentarCantidad(id);
  };

  const handleDisminuir = (id) => {
    disminuirCantidad(id);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="text-center mt-3">Elige a la carta!</h1>
        <p className="text-center">
          Las mejores sabores del mediterraneo en un solo lugar
        </p>
        <div className="container my-5">
          <div className="d-flex flex-wrap gap-3 p-0 p-sm-2 justify-content-center">
            {data.length > 0 ? (
              data.map((pizza) => (
                <CardPizza
                  key={pizza.id}
                  pizza={pizza}
                  handleAgregar={() => handleAgregar(pizza)}
                  handleQuitar={() => handleQuitar(pizza.id)}
                />
              ))
            ) : (
              <p>Cargando pizzas...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
