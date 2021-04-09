import React from "react";
import Header from "./Header/Header";
import Principal from "./Principal/Principal";
import Info from "./Info/Info";

export default function App() {
  return (
    <div className="row">
      <Header />
      <Principal />
      <Info />
    </div>
  );
}
