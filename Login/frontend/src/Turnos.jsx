import { Link } from "react-router-dom";
import "./Turnos.css";

export default function Turnos() {
  return (
    <div className="turnos-page">
        
         <header className="header">
        <div className="logo">
          <img src="imag/logoSF.png" alt="Logo Clínica" />
          
        <nav className="navbar">
          <Link to="/inicio"><button>Inicio</button></Link>
          <Link to="/servicios"><button>Servicios</button></Link>
          <Link to="/turnos"><button>Turnos</button></Link>
        </nav>
        </div>

      </header>
        <main className="turnos-main">
        <h1>Gestión de Turnos</h1>
        <p>Seleccioná la especialidad y el horario que prefieras.</p>

        <div className="turnos-container">
          <form className="turnos-form">
            <label>
              Nombre y apellido:
              <input type="text" placeholder="Ej: Juan Pérez" />
            </label>

            <label>
              Especialidad:
              <select>
                <option>Medicina General</option>
                <option>Pediatría</option>
                <option>Odontología</option>
                <option>Dermatología</option>
                <option>Oftalmología</option>
              </select>
            </label>

            <label>
              Fecha:
              <input type="date" />
            </label>

            <label>
              Hora:
              <input type="time" />
            </label>

            <button type="submit">Reservar turno</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Sanatorio del Norte</h3>
            <p>Comprometidos con tu salud y bienestar.</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces útiles</h4>
            <ul>
              <li>Acerca de</li>
              <li>Servicios</li>
              <li>Política de Privacidad</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Redes sociales</h4>
            <div className="social-icons">
              <i className="fab fa-instagram">
                <img src="imag/instagram-logo.png" alt="Instagram" />
              </i>
              <i className="fab fa-facebook">
                <img src="imag/facebook.png" alt="Facebook" />
              </i>
              <i className="fab fa-whatsapp">
                <img src="imag/whatsapp.png" alt="WhatsApp" />
              </i>
              <i className="fab fa-telegram">
                <img src="imag/telegram.png" alt="Telegram" />
              </i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Sanatorio del Norte. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
