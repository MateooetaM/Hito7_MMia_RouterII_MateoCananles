import React from "react";
import headerImage from "../assets/img/img_header.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="overlay"></div>
      <img src={headerImage} alt="Header" className="img_header" />
      <div className="text-header">
        <h1 className="text-title fs-1">¡Pizzería Mamma Mia!</h1>
        <p className="text-desc fs-6">
          ¡Tenemos las mejores pizzas que podrías encontrar!
        </p>
      </div>
    </header>
  );
}

export default Header;
