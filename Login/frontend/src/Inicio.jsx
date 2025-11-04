import { useState,useEffect } from "react";
import "./Inicio.css";

function Inicio() {
    return( 

        <div>
        <header className="header">
  <div className="logo">
    <img src="imag/logoSF.png" alt="Logo Clínica" />
  </div>

  <nav className="navbar">
    <button>Inicio</button>
    <button>Servicios</button>
    <button>Historia del hospital</button>
  </nav>
</header>

        <div>
            <img src="imag/clinica.png" alt="" />
        </div>

        </div>
    );  
};

export default  Inicio;