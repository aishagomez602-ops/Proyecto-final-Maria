import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

  const [usuario, setUsuarios] = useState(""); // guarda el valor del input usuario 
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState(""); // guarda el mensaje del servidor 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { usuario, contraseña });
      setMensaje(response.data);
    } catch (error) {
      console.error(error);
    };
  };


  return (
    
    <div className="contenedor">
      <div className="caja">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="">
            Usuario
            <br />
            <input type="text" value={usuario} onChange={(e) => setUsuarios(e.target.value)} />
          </label>
          <br /> <br />
          <label htmlFor="">
            Contraseña
            <br />
            <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
          </label>
          <br /><br />
          <button type="submit"><Link to="/inicio">Iniciar</Link></button>
          <br />
          {mensaje && <P>{mensaje}</P>}
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  
  )
}


export default Login;
