import React from "react";
import logo from "../../../imagenes/tryhackme_logo.png";
import star from "../../../imagenes/star-pattern.svg";

export default function Final() {
  return (
    <div className="BackGroundFinal justify-content-center">
      <img className="estrellas" src={star} alt="logo" />
      <div className="container row justify-content-center align-items-center">
        <div className="col-3 imagenLogo">
          <img className="LogoF" src={logo} alt="logo" />
          <p className="tituloLogoFinal">
            Copyright TryHackMe 2018-2020
            160 Kemp House, London, EC1V 2NX
          </p>
        </div>
        <div className="col-3">
          <p className="titulosFinal"> Learn</p>
          <p className="textoFinal">Hacktivities</p>
          <p className="textoFinal">Learning Paths</p>
          <p className="textoFinal">Leaderboards</p>
          <p className="textoFinal">Competitive Hacking</p>
        </div>
        <div className="col-3">
          <p className="titulosFinal">Docs</p>
          <p className="textoFinal">Teaching</p>
          <p className="textoFinal">About Us</p>
          <p className="textoFinal">Blog</p>
          <p className="textoFinal">Buy Vouchers</p>
        </div>
        <div className="col-3">
          <p className="titulosFinal">Social</p>
          <p className="textoFinal">Twitter</p>
          <p className="textoFinal">Email</p>
          <p className="textoFinal">Discord</p>
          <p className="textoFinal">Forum</p>
        </div>
      </div>
    </div>
  );
}
