import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      {" "}
      <h1>Error 404, pagina no encontrada</h1>
      <Link className="btn btn-dark" to="/">
        Volver
      </Link>
    </div>
  );
};

export default NotFound;
