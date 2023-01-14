import axios from "axios";

const remodelarApi = axios.create({ baseURL: "http://192.168.1.101:3000" });

export const createUsuarioRequest = async (usuario) =>
  await remodelarApi.post("/usuarios", usuario);
  
export const getUsuarioRequest = async (usuario) =>
  await remodelarApi.post("/usuarios/login", usuario);

export const updateUsuarioRequest = async (nitter, usuario) =>
  await remodelarApi.put(`/usuarios/${nitter}`, usuario);

export const setCookieiRequest = async (token) =>
  await remodelarApi.get(`/usuarios/setcookie/${token}`);
// // export const toggleTaskDoneRequest = async (codprod, done) =>
// //   await remodelarApi.put(`/Usuarios/${codprod}`, {
// //     done,
// //   });
