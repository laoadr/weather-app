import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Application</h1>
      <Weather />
      <footer>This project was coded by Adrienne Lao and is open-sourced on <a href="https://github.com/laoadr/weather-app" target="_blank">Github</a></footer>
      </div>
    </div>
  );
}
