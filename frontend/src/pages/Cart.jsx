import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "./Cart.css";
import { TokenContext } from "../context/TokenContext";

function Cart() {
  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
    calcularTotal,
  } = useContext(CarritoContext);
  const { user } = useContext(TokenContext);
  const token = user.token;

  // const calcularTotal = () => {
  //   return listaCompras
  //     .reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0)
  //     .toFixed(2);
  // };

  return (
    <div className="body">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras.map((pizza) => (
              <tr key={pizza.id}>
                <th>{pizza.name}</th>
                <td>{pizza.price}</td>
                <td>
                  <button
                    className="btn "
                    onClick={() => aumentarCantidad(pizza.id)}
                  >
                    +
                  </button>
                  <button className="btn btn-primary">{pizza.cantidad}</button>
                  <button
                    className="btn"
                    onClick={() => disminuirCantidad(pizza.id)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarCompra(pizza.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            <td>
              <b>TOTAL: </b>
            </td>
            <td></td>
            <td>${calcularTotal()}</td>
            <td></td>
          </tbody>
        </table>
        <div className="d-grid gap-2">
          <button disabled={token} className="btn btn-primary button-1">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
