import React from "react";
import logo from "../../../imagenes/THMlogo.png";
// !asd
// TODO
export default function Principal() {
  return (
    <nav className="navbar navbar-expand-lg navbar-fondo">
      <img className="Logo" src={logo} alt="Logo" width="135" />
      <container className="ingreso">
        <button type="button">
          Join Now
        </button>
        <button type="button">
          Login
        </button>
      </container>
    </nav>
  );
}
