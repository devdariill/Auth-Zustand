import Login from "./Usuario/pages/Login.usuarios.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { ProtectRoute } from "./components/ProtectedRoute.jsx";
import { useAuthStore } from "./store/auth.js";
import Layout from "./components/NavBarProtect";
function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectRoute isAllow={isAuth} />}>
          <Route path="/home" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/profile" element={<Layout />}>
            <Route index element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
