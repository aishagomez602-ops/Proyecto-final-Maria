import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        nombreUsuario: usuario,
        contraseña: contraseña,
      });

      if (response.data.mensaje === "login exitoso") {
        localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
        navigate("/inicio");
      } else {
        setMensaje("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div className="contenedor">
      <div className="caja">
        <form className="form" onSubmit={handleSubmit}>
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
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="link">
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

