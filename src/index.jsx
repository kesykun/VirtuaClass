import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";

const root = document.querySelector("#root");
const mainRoot = ReactDOM.createRoot(root);

mainRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);