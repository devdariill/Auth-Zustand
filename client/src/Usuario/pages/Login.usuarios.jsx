import Navbar from "../../components/Navbar";
import { Form, Formik } from "formik";
import { useUsuarios } from "../context/UsuariosContext";
import axios from "axios";
function LoginUsuariosForm() {
  const { usuario, loginUsuario } = useUsuarios();
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen flex-col gap-y-5">
        <Formik
          initialValues={usuario}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            try {
              const nitter = "1233";
              const tokusu = "ronald";
              const res1 =
                await axios.post("/api/usuarios/login",
                {
                  nitter,
                  tokusu,
                },
                {
                  withCredentials: true,                  
                });
              console.log("RES1", res1);
              const res = await loginUsuario(values);
              localStorage.setItem('token',res.data.token)
            } catch (error) {
             console.log("🚀 ~ file: Login.usuarios.jsx:29 ~ onSubmit={ ~ error", error)
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
