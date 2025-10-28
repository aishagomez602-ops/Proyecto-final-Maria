import "./Login.css";
import { Link } from "react-router-dom"; 
export default function Registro() {

  return (
    <div className="contenedor">
      <div className="caja">
        <form className="form">
          <label htmlFor="">
            Usuario
            <br />
            <input type="text" />
          </label>
          <br /> <br />
          <label htmlFor="">
            Contraseña
            <br />
            <input type="password" />
          </label>
          <br /><br />
          <button type="submit"><Link to = "/inicio">Registrarse</Link></button>
          <br />
    
        </form>
      </div>
    </div>
  )
}