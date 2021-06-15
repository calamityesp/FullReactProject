import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomePage from "./homepage.component";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
