import React from "react";
import logo from "../../../imagenes/THMlogo.png";

export default function Principal() {
  return (
    <div className="barra">
      <nav className="navbar navbar-expand-sm navbar-fondo">
        <div className="container-fluid">
          <img className="Logo" src={logo} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02 botones">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <div className="botones LogIn">Login</div>
              </li>
              <li className="nav-item">
                <div className="botones LogIn">Login</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

{ /* <div className="barra">
    <nav className="navbar navbar-fondo">
      <img className="Logo" src={logo} alt="logo" />
      <div className="botones LogIn">Login</div>
      <div className="botones LogIn">Join Now</div>
    </nav>
  </div> */ }
