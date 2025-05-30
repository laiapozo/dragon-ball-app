import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
