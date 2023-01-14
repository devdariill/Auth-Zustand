// import { UsuarioContextProvider } from "./Usuario/context/UsuariosContext";
import { IndexContextProvider } from "./context/IndexContext.jsx";
import { UsuarioContextProvider } from "./Usuario/context/UsuariosContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsuarioContextProvider>
      <IndexContextProvider>
        <App />
      </IndexContextProvider>
    </UsuarioContextProvider>
  </React.StrictMode>
);
