import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse"
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
