import { useContext, useState, createContext } from "react";
import { getUsuarioRequest, profileRequest } from "../api/usuarios.api";
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
  const loginUsuario = async (usuario) => {
    try {
      // const remodelarApi = await axios.get(
      //   "http://192.168.1.101:3000/usuarios/setcookie/asd",
      //   { withCredentials: true }
      // );
      // console.log("remodelarApi", remodelarApi);
      // localStorage.setItem("token", remodelarApi.data.token);
      // return remodelarApi;
      const res = await getUsuarioRequest(usuario);
      return res;
    } catch (error) {
      console.log(
        "🚀 ~ file: UsuariosContext.jsx:48 ~ loginUsuario ~ error\n",
        error
      );
    }
  };
  const profileUsuario = async () => {
    try {
      const res = await profileRequest();
      return res;
    } catch (error) {
      console.log(
        "🚀 ~ file: UsuariosContext.jsx:56 ~ profileUsuario ~ error",
        error
      );
    }
  };
  return (
    <UsuarioContext.Provider
      value={{ usuario, setUsuario, loginUsuario, profileUsuario }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
