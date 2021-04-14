import React from "react";
import Header from "./Header/Header";
import Principal from "./Principal/Principal";
import Info from "./Info/Info";

export default function App() {
  return (
    <div className="Contenedor">
      <div className="Header">
        <Header />
      </div>
      <div className="Principal">
        <Principal />
      </div>
      <div className="Info BackGroundInfo">
        <Info />
      </div>
    </div>
  );
}
