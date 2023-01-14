import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useIndex } from "../context/IndexContext.jsx";
function Rutas() {
  const navigate = useNavigate();
  const closeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  const { user, login, handlerOpen } = useIndex();
  // const RUTAS = [
  //   { name: "Productos", path: "/productos" },
  //   { name: "Ventas", path: "/ventas" },
  //   { name: "Compras", path: "/compras" },
  //   { name: "Terceros", path: "/terceros" },
  //   { name: "Login", path: "/login" },
  // ];
  const RUTAS = {
    Productos: "/productos",
    Ventas: "/ventas",
    Compras: "/compras",
    Terceros: "/terceros",
    Login: "/profile",
  };

  function renderLogin() {
    if (user) {
      return (
        <div className="justify-center items-center flex flex-col  gap-y-3">
          {Object.entries(RUTAS).firEach(([name,key], i) => (
            <li key={i} className="hover:scale-125 transition-transform">
              <Link
                onClick={handlerOpen}
                to={key}
                className=" block text-center py-3 px-5 rounded-lg bg-neutral-800 "
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="bg-neutral-900 py-2 px-4 rounded-lg"
              onClick={() => {
                navigate(`/usuarios`);
              }}
            >
              Profile
            </button>
          </li>
        </div>
      );
    } else {
      return (
        <li className="hover:scale-125 transition-transform ">
          <Link
            to="/profile"
            className="block text-center py-3 px-5 rounded-lg bg-neutral-800 "
          >
            Profile
          </Link>
        </li>
      );
    }
  }
  return (
    <div>
      {renderLogin()}
      <li
        className="cursor-pointer hover:scale-150 transition-transform  w-50 flex justify-center items-center mt-5"
        onClick={handlerOpen}
      >
        {closeSVG}
      </li>
    </div>
  );
}

export default Rutas;
// <button
//   className="bg-neutral-500  text-black py-1 px-5 rounded-lg font-semibold"
//   onClick={login}
// >
//   Login
// </button>
