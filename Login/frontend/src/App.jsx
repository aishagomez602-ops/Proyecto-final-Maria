
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import Turnos from "./Turnos";
import "./Inicio.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas de acceso */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Páginas del sitio */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>
    </BrowserRouter>
  );
}
