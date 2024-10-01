import React, { useContext } from "react";
import { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpass, setConfpass] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    //Validacion
    if (
      !email.trim() ||
      !password.trim() ||
      !confpass.trim() ||
      password.length < 6 ||
      password.trim() != confpass.trim()
    ) {
      setError(true);
      return;
    }
    setError(false);
    setEmail("");
    setPassword("");
    setConfpass("");
  };

  return (
    <div className="form">
      <h1>Registrarse</h1>
      <form onSubmit={validarDatos} className="formulario">
        <div className="form-group">
          <label>*Email</label>
          <input
            type="email"
            value={email}
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>*Contraseña</label>
          <input
            type="password"
            value={password}
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>*Confirmar contraseña</label>
          <input
            type="password"
            value={confpass}
            name="confpass"
            className="form-control"
            onChange={(e) => setConfpass(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn
            btn-primary"
        >
          Enviar
        </button>
        {error ? <p style={{ color: "red" }}>Verifica los campos</p> : null}
      </form>
    </div>
  );
}

export default RegisterPage;
