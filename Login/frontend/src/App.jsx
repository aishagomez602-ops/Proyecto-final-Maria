
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro"; 
import Inicio from "./Inicio";
import "./Inicio.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/Inicio" element={<Inicio />} /> 
      </Routes>
    </BrowserRouter>
  );
}  