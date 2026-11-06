

//Cambio del desarrolador 2: reportes cleancity

// Cambio del desarrollador 1: atencion al usuario

// App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Usuario from "./components/Usuario";
import Ubicacion from "./components/Ubicacion";
import AtencionUsuario from "./components/AtencionUsuario";
import Inicio from "./components/Inicio"; // el dashboard nuevo
import "./App.css";

function App() {
  // Vista actual: "inicio", "usuario", "ubicacion" o "atencion"
  const [vista, setVista] = useState("inicio");

  const usuario = {
    idUsuario: 1,
    nombre: "Alejandro",
    cedula: "123456789",
    correo: "alejandro@gmail.com",
    telefono: "3001234567",
  };

  const ubicacion = {
    idUbicacion: 1,
    direccion: "Santa Rosa de Osos, Antioquia",
    latitud: 6.647,
    longitud: -75.460,
  };

  return (
    <div>
      <Header
        mostrarInicio={() => setVista("inicio")}
        mostrarUsuario={() => setVista("usuario")}
        mostrarUbicacion={() => setVista("ubicacion")}
        mostrarAtencionUsuario={() => setVista("atencion")}
      />

      {vista === "inicio" && <Inicio />}
      {vista === "usuario" && <Usuario usuario={usuario} ubicacion={ubicacion} />}
      {vista === "ubicacion" && <Ubicacion ubicacion={ubicacion} usuario={usuario} />}
      {vista === "atencion" && <AtencionUsuario />}
    </div>
  );
}

export default App;
