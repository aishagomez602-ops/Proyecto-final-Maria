import React from "react";
import "./Inicio.css";
import { useState } from "react";


function Inicio () {
  return (
    <div>
      <header>
        <nav></nav>
      </header>

      {/* Primera fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Medicina general <br />
            <img src="imag/MedicinaG.jpg" alt="Medicina general" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Médico cirujano <br />
            <img src="imag/medicoc.jpg" alt="Médico cirujano" className="imag" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Nutrición <br />
            <img src="imag/nutricion.jpg" alt="Nutrición" className="imag" />
          </button>
        </figure>
      </section>

      {/* Segunda fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Odontología <br />
            <img src="imag/odontologia.jpg" alt="Odontología" className="imag" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Oftalmología <br />
            <img src="imag/oftangologia.jpg" alt="Oftalmología" className="imag" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Pediatría <br />
            <img src="imag/pediatria.jpg" alt="Pediatría" className="imag" />
          </button>
        </figure>
      </section>

      {/* Tercera fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Dermatología <br />
            <img src="imag/Dermatología.jpg" alt="Dermatología" className="imag" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Gastrología <br />
            <img src="imag/Gastrología.jpg" alt="Gastrología" className="imag" />
          </button>
        </figure>

        <figure className="areas">
          <button>
            Neumología <br />
            <img src="imag/Neumología.jpg" alt="Neumología" className="imag" />
          </button>
        </figure>
      </section>

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
};

export default  Inicio;