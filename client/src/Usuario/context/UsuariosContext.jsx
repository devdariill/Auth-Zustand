import axios from "axios";
import { useContext, useState, createContext } from "react";
import {
  createUsuarioRequest,
  getUsuarioRequest,
  updateUsuarioRequest,
  setCookieiRequest,
} from "../api/usuarios.api";
export const UsuarioContext = createContext();
export const useUsuarios = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error(
      "useUsuarios debe estar dentro de un UsuarioContextProvider"
    );
  }
  return context;
};
// nomusu, clausu, nitter, nivusu, estusu, codcos, cosfij, codbod, bodfij, bodtra, agefij, empcod, tokusu
export const UsuarioContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nomusu: "",
    nitter: "",
    nivusu: "",
    estusu: "",
    codcos: "",
    cosfij: "",
    codbod: "",
    bodfij: "",
    bodtra: "",
    agefij: "",
    empcod: "",
    tokusu: "",
  });
  // loadUsuario
  const createUsuario = async (usuario) => {
    try {
      await createUsuarioRequest(usuario);
    } catch (error) {
      console.log(
        "🚀 ~ file: UsuariosContext.jsx:38 ~ createUsuario ~ error",
        error
      );
    }
  };
  const loginUsuario = async (usuario) => {
    try {
      const remodelarApi = await axios.get(
        'http://192.168.1.101:3000/usuarios/setcookie/asd',
        { withCredentials: true }
      );
      console.log("remodelarApi", remodelarApi)
      localStorage.setItem("token", remodelarApi.data.token);
      return remodelarApi;

      // const res = await getUsuarioRequest(usuario);
      // console.log("RES+1",res)
      // console.log("RES+2",res.data.token)
      // const token = await setCookieiRequest(res.data.token);
      // console.log("token", token);
      // return res;
    } catch (error) {
      console.log(
        "🚀 ~ file: UsuariosContext.jsx:48 ~ loginUsuario ~ error\n",
        error
      );
    }
  };
  return (
    <UsuarioContext.Provider
      value={{ usuario, setUsuario, createUsuario, loginUsuario }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
