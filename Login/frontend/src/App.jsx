
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro"; 
import Inicio from "./Inicio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/Inicio" element={<Inicio />} /> 
      </Routes>
    </BrowserRouter>
  );
}  