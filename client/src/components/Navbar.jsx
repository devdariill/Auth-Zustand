import Rutas from "./Rutas.jsx";
import { useIndex } from "../context/IndexContext.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const openSVG = (
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
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
  const { open, handlerOpen, user, login } = useIndex();
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === " ") {
        handlerOpen();
        console.log("ctrl + space");
      }
    });
  }, []);
  const menuClass = open
    ? "flex fixed top-0 left-0 flex-col items-center justify-center gap-6 bg-neutral-700 min-w-full min-h-full"
    : "hidden";
  return (
    <header className="bg-neutral-700 p-4 w-full">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%]">
        <Link to="/" className="py-1">
          Hermes
        </Link>
        {user ? (
          <div className="cursor-pointer block h-6 w-6" onClick={handlerOpen}>
            {openSVG}
          </div>
        ) : (
          <Link
            to={"/usuarios/login"}
            className="hover:scale-125 transition-transform block text-center py-3 px-5 rounded-lg bg-neutral-800 "
          >
            Login
          </Link>
        )}
        <nav onClick={handlerOpen} className={menuClass}>
          <ul>
            <div className="flex-col flex items-center w-auto [&>li:hover]:font-bold gap-4">
              <Rutas />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
// <button
//   className="bg-neutral-500  text-black py-1 px-5 rounded-lg font-semibold"
//   onClick={login}
// >
//   Login
// </button>
