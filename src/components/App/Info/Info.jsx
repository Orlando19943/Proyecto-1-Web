import React from "react";
import logo from "../../../imagenes/badges.png";
import Carousel from "./carousel";

export default function Principal() {
  return (
    <div className="container">
      <div className="primeraParte">
        <div className="row">
          <img className="col-3" src={logo} alt="Logo" width="auto" />
          <div className="col">
            <p className="titulo1">Byte-sized gamified lessons</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Learning cybersecurity on TryHackMe is fun and
              addictive. Earn points by answering questions, taking on challenges
              and maintain your hacking streak through short lessons.
            </p>
          </div>
        </div>
        <hr className="separacion" />
        <div className="row">
          <div className="col">
            <p className="titulo1">Learn, Practice and Complete</p>
            <div className="lineaVerde" />
            <p className="texto1">
              Learn by following a structured pathway or guide your
              own learning. Start your own private hackable machines
              (no sharing) and use your skills in a real-world
              environment by completing guided, objective-based tasks.
            </p>
          </div>
          <div className="col">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
