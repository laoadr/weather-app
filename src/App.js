import "./App.css";
import Weather from "./Weather";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Application</h1>
      <Weather />
      
      </div>
    </div>
  );
}
