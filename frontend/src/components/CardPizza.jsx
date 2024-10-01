import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardPizza.css";

// import { pizzasMenu } from "../data/pizzas.js";

function CardPizza({
  pizza,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
}) {
  const { id, img, ingredients, name, price } = pizza;
  const [added, setAdded] = useState(false);

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

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div key={id} className="card">
          <img src={img} className="card-img-top images" alt="..." />
          <div className="card-body">
            <h3 className="card-title mb-0">Pizza: {name}</h3>
          </div>
          <ul className="list-group list-group-flush">
            <div className="list-group-item">
              <p>🍕 Ingredientes:</p>
              {ingredients &&
                ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
            </div>
            <h5 className="list-group-item mb-0">Precio: {price}</h5>
            {/* ID: {id} */}
          </ul>
          <div className="card-body cards-buttons d-flex justify-content-evenly">
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
              onClick={() => {
                navigate(`/pizza/${id}`);
              }}
              type="button"
              className="btn btn-dark"
            >
              Ver Más 👀
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPizza;
