import React from "react";
import fondo from "../../../imagenes/waves.svg";
import guides from "../../../imagenes/Principal/tryhackme_cloudguide.svg";
import challenges from "../../../imagenes/Principal/tryhackme_cloudctf.svg";
import star from "../../../imagenes/star-pattern.svg";

export default function Principal() {
  return (
    <div className="BackGround">
      <div className="presentacion">
        <div className="container">
          <div className="todoEspacio">
            <div className="row justify-content-center align-items-center">
              <p className="tituloPrincipal">Cyber Security Training</p>
              <p className="textoPrincipal">Making it easier to break into security, all through you browser.</p>
            </div>
            <div className="row justify-content-center align-items-center espaciado">
              <div className="col-2">
                <img className="imagen2" src={guides} alt="logo" width="auto" />
              </div>
              <div className="col-4">
                <p className="subtitulo">Guides</p>
                <p className="textoSecundario">Develop your skills by working through hands-on guided tasks and supporting videos.</p>
              </div>
              <div className="col-2">
                <img className="imagen2" src={challenges} alt="logo" width="auto" />
              </div>
              <div className="col-4">
                <p className="subtitulo">Challenges Training</p>
                <p className="textoSecundario">Learn and test your skills with gamified, real-word cybersecurity challenges.</p>
              </div>
            </div>
          </div>
        </div>
        <img className="imagen" src={fondo} alt="logo" />
      </div>
    </div>
  );
}
