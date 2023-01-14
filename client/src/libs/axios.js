import axios from "axios";
import { useAuthStore } from "../store/auth";
// const remodelarApi = axios.create({ baseURL: "http://192.168.1.101:3000" });
const authApi = axios.create ({  
  baseURL: "http://192.168.1.101:3000",
  withCredentials: true,
});
authApi.interceptors.request.use(config => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});
export default authApi;
