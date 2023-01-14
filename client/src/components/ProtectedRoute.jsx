import { Navigate, Outlet } from "react-router-dom";
import { useIndex } from "../context/IndexContext";
export const ProtectRoute = ({ children }) => {
  const { user } = useIndex();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};
