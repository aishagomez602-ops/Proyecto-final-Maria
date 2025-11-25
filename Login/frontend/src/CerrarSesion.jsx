
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CerrarSesion() {
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    try {
      await axios.post("http://localhost:3001/logout", {}, { withCredentials: true });

      alert("Sesión cerrada correctamente");

      // Redirige al login
      navigate("/login");
    } catch (error) {
      alert("Error al cerrar sesión");
    }
  };

 
}


