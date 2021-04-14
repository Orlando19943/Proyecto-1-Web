import React from "react";
import fondo from "../../../imagenes/waves.svg";

export default function Principal() {
  return (
    <div className="BackGround">
      <div className="imagenFondo">
        <img className="imagen" src={fondo} alt="logo" />
      </div>
    </div>
  );
}
