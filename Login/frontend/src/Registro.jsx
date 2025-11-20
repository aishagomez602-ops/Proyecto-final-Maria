import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Registro() {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/registro", {
        usuario: usuario,
        contraseña: contraseña
      });

      if (response.data.mensaje === "usuario creado") {
        navigate("/login");  // redirige cuando se registra bien
      } else {
        setMensaje("No se pudo crear el usuario");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <div className="contenedor">
      <div className="caja">
        <form className="form" onSubmit={handleRegistro}>


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

          <button type="submit">Registrarse</button>

          {mensaje && <p>{mensaje}</p>}

          <p className="texto">
            ¿Ya tenés una cuenta?{" "}
            <Link to="/login" className="link">Inicia sesión</Link>
          </p>

        </form>
      </div>
    </div>
  );
}
