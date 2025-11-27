import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Turnos.css";

export default function Turnos() {

    // Estado para los turnos guardados
  const [turnos, setTurnos] = useState(() => {
    const guardados = localStorage.getItem("turnos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // Estados para el formulario
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("Medicina General");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Guardar los turnos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !fecha || !hora) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    const nuevoTurno = {
      id: Date.now(),
      nombre,
      especialidad,
      fecha,
      hora,
    };

    setTurnos([...turnos, nuevoTurno]);
    setNombre("");
    setEspecialidad("Medicina General");
    setFecha("");
    setHora("");
  };

  // Función para eliminar un turno
  const eliminarTurno = (id) => {
    const nuevos = turnos.filter((t) => t.id !== id);
    setTurnos(nuevos);
  };
  return (
    <div className="turnos-page">
        
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
    
    <main className="turnos-main">
      <h1>Gestión de Turnos</h1>
      <p>Seleccioná la especialidad y el horario que prefieras.</p>

      <div className="turnos-container">
        <form className="turnos-form" onSubmit={handleSubmit}>
          <label>
            Nombre y apellido:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
            />
          </label>

          <label>
            Especialidad:
            <select
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
            >
              <option>Medicina General</option>
              <option>Pediatría</option>
              <option>Odontología</option>
              <option>Dermatología</option>
              <option>Oftalmología</option>
              <option>Gastroenterología</option>
              <option>Neumología</option>
              <option>Médico cirujano</option>
              <option>Nutrición</option>

            </select>
          </label>

          <label>
            Fecha:
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>

          <label>
            Hora:
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </label>

          <button type="submit">Reservar turno</button>
        </form>
      </div>

      <section className="turnos-lista">
        <h2>Turnos agendados</h2>
        {turnos.length === 0 ? (
          <p>No hay turnos registrados aún.</p>
        ) : (
          <ul>
            {turnos.map((t) => (
              <li key={t.id}>
                <strong>{t.nombre}</strong> — {t.especialidad} <br />
                Fecha: {t.fecha} Hora: {t.hora}
                <button onClick={() => eliminarTurno(t.id)} > Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </section>
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
