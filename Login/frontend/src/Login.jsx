import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
export default function Login() {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const enviarLogin = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await axios.post("http://localhost:3001/login", {
        usuario: usuario,
        contraseña: contraseña,
      });

      if (respuesta.data.mensaje === "login exitoso") {

        // Guardamos el usuario en el localStorage
        localStorage.setItem("usuario", JSON.stringify(respuesta.data.usuario));

        navigate("/inicio");
      } else {
        setMensaje("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.mensaje);
      } else {
        setMensaje("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="contenedor">
      <div className="caja">
        <form className="form" onSubmit={enviarLogin}>

          <label>
            Usuario
            <br />
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </label>
          <br /><br />

          <label>
            Contraseña
            <br />
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </label>
          <br /><br />

          <button type="submit">Iniciar sesión</button>

          {mensaje && <p>{mensaje}</p>}

          <p className="texto">
            ¿No tenes una cuenta?{" "}
            <Link to="/registro" className="link">
              Registrate aca
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
