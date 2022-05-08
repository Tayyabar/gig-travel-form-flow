import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/bootstrap.css";
import "./assets/css/motor.css";
import "./assets/css/style.css";
import "./assets/css/custom_en.css";
import "./assets/css/bod.css";
import "./assets/css/all.css";
class WebComponent extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

const ELEMENT_ID = "gig-remote-app";

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
