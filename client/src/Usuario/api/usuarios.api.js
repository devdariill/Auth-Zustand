import axios from "../../libs/axios";

// const remodelarApi = axios.create({ baseURL: "http://192.168.1.101:3000" });
  
export const getUsuarioRequest = async (usuario) =>
  await axios.post("/login", usuario);

export const profileRequest = async () => 
  await axios.get("/profile");

// // export const toggleTaskDoneRequest = async (codprod, done) =>
// //   await remodelarApi.put(`/Usuarios/${codprod}`, {
// //     done,
// //   });
