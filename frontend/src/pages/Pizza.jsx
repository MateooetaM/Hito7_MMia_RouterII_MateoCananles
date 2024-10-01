import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Pizza.css";
import { ProductosContext } from "../context/ProductosContext";

// const urlPizza = "http://localhost:5000/api/pizzas/";

function Pizza() {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();
  const { handleAgregar, handleQuitar, detalles, getDetalles } =
    useContext(ProductosContext);
  const { id } = useParams();

  useEffect(() => {
    getDetalles(id); // Llama a la función getDetalles con el id de la pizza
  }, [id, getDetalles]);

  const clickAgregar = () => {
    if (handleAgregar) {
      handleAgregar();
      setAdded(true);
    }
  };
  const clickQuitar = () => {
    if (handleQuitar) {
      handleQuitar();
      setAdded(false);
    }
  };

  if (!detalles.id) {
    return <p>Cargando detalles...</p>; // Control de carga mientras los detalles se obtienen
  }

  return (
    <div className="body">
      <h1 className="text-center mt-3">Elige a la carta!</h1>
      <p className="text-center">
        Las mejores sabores del mediterraneo en un solo lugar
      </p>
      <div className="d-flex flex-wrap gap-3 p-0 p-sm-2 justify-content-center">
        <div className="card mb-3" style={{ width: "540px" }}>
          <div key={detalles.id} className="row g-0">
            <div className="col-md-4">
              <img
                src={detalles.img}
                className="img-fluid rounded-start"
                style={{ height: "100%", width: "250px" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h3 className="card-title text-center mt-3">
                  Pizza: {detalles.name || "Nombre no disponible"}
                </h3>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item mb-0">{detalles.desc}</li>
                  <li className="list-group-item">
                    Ingredientes:{" "}
                    {detalles.ingredients && detalles.ingredients.join(", ")}
                  </li>
                  <h5 className=" list-group-item mb-0">
                    Precio: {detalles.price || "Precio no disponible"}
                  </h5>

                  <div className="list-group-item card-body cards-buttons d-flex justify-content-evenly my-2">
                    {added ? (
                      <button
                        type="button"
                        className="btn btn-danger boton-quitar"
                        onClick={clickQuitar}
                      >
                        Quitar 🛒
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success boton-agregar"
                        onClick={clickAgregar}
                      >
                        Agregar 🛒
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={() => {
                        navigate(`/home`);
                      }}
                    >
                      Volver
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
