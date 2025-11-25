import { Link } from "react-router-dom";
import "./Servicios.css";
import { useState,useEffect } from "react";


function Servicios () {

    const [turnos, setTurnos] = useState(() => {
    const guardados = localStorage.getItem("turnos")
    return guardados ? JSON.parse(guardados) : []
  })
  const [nombre, setNombre] = useState("")
  const [servicio, setServicio] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos))
  }, [turnos])

  const reservarTurno = (e) => {
    e.preventDefault()
    if (!nombre || !servicio || !fecha || !hora) {
      setMensaje("⚠️ Completá todos los datos.")
      return
    }
    const nuevoTurno = { nombre, servicio, fecha, hora }
    setTurnos([...turnos, nuevoTurno])
    setMensaje("✅ Turno reservado correctamente.")
    setNombre("")
    setServicio("")
    setFecha("")
    setHora("")
  }

  const eliminarTurno = (i) => {
    const nuevos = turnos.filter((_, index) => index !== i)
    setTurnos(nuevos)
  }
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
      <Link to="/CerrarSesion">
        <button>Cerrar Sesión</button>
      </Link>
    </nav>

      </header>

      {/* Primera fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Medicina general <br />
            <img src="imag/MedicinaG.jpg" alt="Medicina general" />
            <p>Área encargada de la atención primaria de la salud. Evalúa, diagnostica y trata enfermedades comunes, orientando al paciente hacia el especialista adecuado cuando es necesario.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Médico cirujano <br />
            <img src="imag/medicoc.jpg" alt="Médico cirujano" className="imag" />
            <p>Especialista en el tratamiento quirúrgico de enfermedades, lesiones o malformaciones. Su labor combina precisión técnica con un profundo conocimiento anatómico y clínico.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Nutrición <br />
            <img src="imag/nutricion.jpg" alt="Nutrición" className="imag" />
            <p>Departamento dedicado a la evaluación del estado nutricional y la creación de planes alimenticios personalizados para promover una vida saludable y prevenir enfermedades.</p>
          </button>
        </figure>
      </section>

      {/* Segunda fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Odontología <br />
            <img src="imag/odontologia.jpg" alt="Odontología" className="imag" />
            <p>Servicio enfocado en el cuidado integral de la salud bucal, abarcando prevención, diagnóstico y tratamiento de afecciones dentales y gingivales.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Oftalmología <br />
            <img src="imag/oftangologia.jpg" alt="Oftalmología" className="imag" />
            <p>Especialidad que se ocupa del diagnóstico y tratamiento de enfermedades oculares, preservando y mejorando la visión mediante controles, tratamientos y cirugías.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Pediatría <br />
            <img src="imag/pediatria.jpg" alt="Pediatría" className="imag" />
            <p>Área médica que brinda atención integral a niños y adolescentes, velando por su crecimiento, desarrollo y prevención de enfermedades desde el nacimiento hasta la adolescencia.</p>
          </button>
        </figure>
      </section>

      {/* Tercera fila */}
      <section className="areas1">
        <figure className="areas">
          <button>
            Dermatología <br />
            <img src="imag/Dermatología.jpg" alt="Dermatología" className="imag" />
            <p>Rama especializada en el diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas, ofreciendo también procedimientos estéticos y preventivos.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Gastroenterología <br />
            <img src="imag/Gastrología.jpg" alt="Gastrología" className="imag" />
            <p>Especialidad médica dedicada al diagnóstico, tratamiento y prevención de enfermedades del sistema digestivo, que incluye el esófago, estómago, intestinos, hígado, páncreas y vesícula biliar.</p>
          </button>
        </figure>

        <figure className="areas">
          <button>
            Neumología <br />
            <img src="imag/Neumología.jpg" alt="Neumología" className="imag" />
            <p>Especialidad que aborda el estudio, diagnóstico y tratamiento de enfermedades respiratorias, como asma, bronquitis crónica o EPOC, favoreciendo una adecuada función pulmonar.</p>
          </button>
        </figure>
      </section>
      <br />
      <br />

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

export default  Servicios;