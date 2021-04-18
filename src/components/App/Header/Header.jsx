import React, { useState } from "react";
import { BiTrophy } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { RiBankFill, RiBookOpenLine } from "react-icons/ri";
import logo from "../../../imagenes/THMlogo.png";

export default function Principal() {
  // La parte para cambiar el header cuando baje en la pagina me lo saque de esta pagina: https://www.geeksforgeeks.org/how-to-change-the-navbar-color-when-you-scroll-in-reactjs/
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const [iconsChange, setIconsChange] = useState(false);
  const changeIconsVisibility = () => {
    if (window.scrollY > 100) {
      setIconsChange(true);
    } else {
      setIconsChange(false);
    }
  };
  window.addEventListener("scroll", changeIconsVisibility);
  return (
    <div className="barra">
      <nav className={colorChange ? "navbar navbar-expand-sm navbar-fondo2" : "navbar navbar-expand-sm navbar-fondo"}>
        <div className="container-fluid">
          <img className="Logo" src={logo} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={iconsChange ? "container contenedorIconos" : "container contenedorIconosNone"}>
            <div className="row">
              <div className="contenedorIconos col">
                <RiBookOpenLine className="iconos" />
                <p>Learn</p>
              </div>
              <div className="contenedorIconos col">
                <BiTrophy className="iconos" />
                <p>Compete</p>
              </div>
              <div className="contenedorIconos col">
                <FaNetworkWired className="iconos" />
                <p>Networks</p>
              </div>
              <div className="contenedorIconos col">
                <AiOutlineBank className="iconos" />
                <p>Educations</p>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-lg-0 ml-auto botones">
              <li className="nav-item LogIn">
                <div className="a">Login </div>
              </li>
              <li className="nav-item joinNow">
                <button type="button" className="tamaño">
                  <div>
                    Join Now
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
