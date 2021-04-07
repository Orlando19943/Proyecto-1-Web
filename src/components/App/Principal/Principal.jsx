import React from "react";
import logo from "../../../imagenes/THMlogo.png";

export default function Principal() {
  return (
    <div className="BackGround">
      <container>
        <img className="Logo" src={logo} alt="Logo" width="135" />
        <container className="ingreso">
          <button type="button">
            Join Now
          </button>
          <button type="button">
            Login
          </button>
        </container>
      </container>
    </div>
  );
}
