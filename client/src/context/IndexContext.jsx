import { useContext, useState, createContext } from "react";
// import {
//   createProductoRequest,
// } from "../api/productos.api";
export const IndexContext = createContext();
export const useIndex = () => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error("useIndex debe estar dentro de un IndexContextProvider");
  }
  return context;
};
export const IndexContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handlerOpen = () => {
    setOpen(!open);
  };
  const [user, setUser] = useState(null);
  // const login = () => {
  //   // generar fetch backend request
  //   setUser({ id: 1, name: "Juan", permissions: ["analize"] });
  // };
  const logout = () => setUser(null);
  return (
    <IndexContext.Provider
      value={{ user, setUser, logout, open, setOpen, handlerOpen }}
    >
      {children}
    </IndexContext.Provider>
  );
};
