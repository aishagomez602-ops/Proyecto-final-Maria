import "./Inicio.css";
import cerrarSesion from "./CerrarSesion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Inicio() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("usuarioLogueado");
    if (nombreGuardado) {
      setUsuario(nombreGuardado);
    }
  }, []);

  return (
    <div>
      <header className="header">

        <div className="logo">
          <img src="imag/logoSF.png" alt="Logo Clínica" />
        </div>

        <nav className="navbar">
          <Link to="/inicio">
            <button>Inicio</button>
          </Link>
          <Link to="/servicios">
            <button>Servicios</button>
          </Link>
          <Link to="/turnos">
            <button>Turnos</button>
          </Link>
          <p className="texto">
            <Link to="/login" className="link">Cerrar Sesion</Link>
          </p>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="contenido">
        <h1 className="titulo-bienvenida">
          Bienvenido
        </h1>
        <img
          src="imag/clinica.png"
          alt="Sanatorio del Norte"
          className="imagen-sanatorio" />
        <p className="descripcion">
          Brindamos atención médica de excelencia, tecnología de vanguardia y un equipo
          profesional comprometido con tu bienestar.
        </p>
        <br />
        <br />
      </main>

      <div className="equipo">
        <h1>Nuestro equipo</h1>
        <section className="equipoImg">
          <figure>
          <img src="imag/doctor1.png" alt="Doctor" />
          <p>Dr.Sebastián Alcázar</p>
          </figure>
          <figure>
          <img src="imag/doctor2.png" alt="Doctora" />
          <p>Dra.Isabella Montenegro</p>
          </figure>
          <figure>
          <img src="imag/doctor3.png" alt="Doctor" />
          <p>Dr.Santiago Valdés</p>
          </figure>
        </section>
          <section className="equipoImg">
          <figure>
          <img src="imag/doctor5.jpeg" alt="Doctor" />
          <p>Dra.Melina Delgado</p>
          </figure>
          <figure>
          <img src="imag/doctor6.png" alt="Doctora" />
          <p>Dr.Alejandro Montiel</p>
          </figure>
          <figure>
          <img src="imag/doctor7.png" alt="Doctor" />
          <p>Dra.Catalina Beaumont</p>
          </figure>
          </section>
        <section className="equipoImg">
          <figure>
          <img src="imag/doctor8.jpeg" alt="Doctor" />
          <p>Dr.Eduardo Villanueva</p>
          </figure>
          <figure>
          <img src="imag/doctor9.jpeg" alt="Doctora" />
          <p>Dra.Victoria Salvatierra</p>
          </figure>
          <figure>
          <img src="imag/doctor10.jpeg" alt="Doctor" />
          <p>Dra.Valeria Montserrat</p>
          </figure>
        </section>
      </div>

      {/* Footer */}
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

export default Inicio;
