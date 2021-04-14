import React from "react";
import logo from "../../../imagenes/THMlogo.png";

export default function Principal() {
  return (
    <div className="barra">
      <nav className="navbar navbar-expand-sm navbar-fondo">
        <div className="container-fluid">
          <img className="Logo" src={logo} alt="logo" />
          <button className="navbar-toggler" type=" " data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0 ml-auto botones">
              <li className="nav-item LogIn">
                <div className="a">Login </div>
              </li>
              <li className="nav-item joinNow">
                <button className="tamaño">
                  <div>
                    JoinNow
                  </div>
                </button>
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
