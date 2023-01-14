import Navbar from "../../components/NavbarFilter";
import { Form, Formik } from "formik";
import { useUsuarios } from "../context/UsuariosContext";
import { useAuthStore } from "../../store/auth.js";
import {useNavigate} from "react-router-dom";
function LoginUsuariosForm() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const { usuario, loginUsuario, profileUsuario } = useUsuarios();
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen flex-col gap-y-5">
        <Formik
          initialValues={usuario}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            try {
              // const nitter = "1233";
              // const tokusu = "ronald";
              // values.nitter = nitter;
              // values.tokusu = tokusu;
              // const res1 =
              //   await axios.post("/api/usuarios/login",
              //   {
              //     nitter,
              //     tokusu,
              //   },
              //   {
              //     withCredentials: true,
              //   });
              // console.log("RES1", res1);              
              const res = await loginUsuario(values);
              setToken(res.data.token);
              // localStorage.setItem("token", res.data.token);
              const resProfile = await profileUsuario();
              console.log("resProfile", resProfile);
              setProfile(resProfile.data);
              navigate("/profile");
            } catch (error) {
              console.log(
                "🚀 ~ file: Login.usuarios.jsx:29 ~ onSubmit={ ~ error",
                error
              );
            }
            actions.resetForm();
          }}
        >
          {/* 1 handleChange  : cambia el estado de initialValues */}
          {/* 2 handleSunbmit : envia los datos actualues al  */}
          {/* 3 values : genera los valores iniciales despues de enviar */}
          {({ handleChange, handleSubmit, values, isSubmiting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-y-2 items-center ">
                <label className="text-center rounded-md font-bold py-1">
                  nitter
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="nitter"
                  placeholder="nitter"
                  className="text-center"
                  value={values.nitter}
                />
                <label className="text-center rounded-md font-bold py-1">
                  tokusu
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="tokusu"
                  placeholder="tokusu"
                  className="text-center"
                  value={values.tokusu}
                />
                <button
                  type="submit"
                  className="bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold"
                  disabled={isSubmiting}
                >
                  {isSubmiting ? "Saving" : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default LoginUsuariosForm;
