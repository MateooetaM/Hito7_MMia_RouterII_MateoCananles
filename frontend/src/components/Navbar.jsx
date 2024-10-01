import { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { TokenContext } from "../context/TokenContext";

const Navbar = () => {
  const { user, setUser } = useContext(TokenContext);
  const setActiveClass = ({ isActive }) =>
    isActive ? "linkActivo" : "linkInactivo";
  const { calcularTotal } = useContext(CarritoContext);
  const token = user.token;

  return (
    <nav className="navbar ">
      <div className="nav-elements container-fluid">
        <h1 className="fs-5 text-light">¡Pizzería Mamma Mia!</h1>
        <div className="nav-button">
          <NavLink className={setActiveClass} to="/home ">
            🍕 Home
          </NavLink>

          {token ? (
            <NavLink className={setActiveClass} to="/profile">
              🔓 Profile
            </NavLink>
          ) : null}

          <NavLink className={setActiveClass} to="/login">
            {" "}
            🔐 Login
          </NavLink>
          <NavLink className={setActiveClass} to="/register">
            {" "}
            🔐 Register
          </NavLink>
          {token ? (
            <NavLink
              className={setActiveClass}
              onClick={() => {
                setUser({ username: "", password: "", token: false });
              }}
              to="/logout"
            >
              🔒 Logout
            </NavLink>
          ) : null}
        </div>

        <div>
          <NavLink className="btn btn-outline-info" to="/cart">
            🛒 Total: ${calcularTotal()}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
