import axios from "axios";
import { useNavigate } from "react-router-dom";

function CerrarSesion() {
    const navigate = useNavigate();
    const cerrar = async () => {
        try {
            await axios.post("http://localhost:3001/logout", {}, {
                withCredentials: true
            });
            alert("Sesión cerrada correctamente");
            navigate("/Login");
        } catch (error) {
        };
    }
    alert("Error al cerrar sesión");
    return (
        <button onClick={cerrar}>Cerrar Sesión</button>
    );
}
export default CerrarSesion; 