


import { useState } from "react"; 
// Importa useState de React, permite guardar y cambiar el estado de un componente,
// en este caso, la vista que se muestra en pantalla

import Header from "./components/Header";
// Importa el componente Header, que contiene el encabezado y el menú de navegación

import Usuario from "./components/Usuario";
// Importa el componente que muestra la información del usuario.

import Ubicacion from "./components/Ubicacion";
// Importa el componente encargado de mostrar los datos de la ubicación.

import AtencionUsuario from "./components/AtencionUsuario";
// Importa el componente que contiene la sección de atención al usuario.

import "./App.css";
// Importa los estilos CSS que se aplican al componente principal App.


function App() {
  // Declara el componente principal de CleanCity
  // Aquí se organiza qué secciones se muestran según la opción seleccionada

  const [vista, setVista] = useState("inicio");
  // Crea una variable de estado llamada vista, cuyo valor inicial es "inicio"
  // setVista es la función que permite cambiar ese valor
  // Por ejemplo, setVista("usuario") hace que se seleccione la vista de usuario

  const usuario = {
    // Crea un objeto con los datos de ejemplo de un usuario.
    // Estos datos se pueden enviar a otros componentes mediante props.

    idUsuario: 1, // Identificador del usuario.
    nombre: "Alejandro", // Nombre del usuario.
    cedula: "123456789", // Número de identificación de ejemplo.
    correo: "alejandro@gmail.com", // Correo electrónico de ejemplo.
    telefono: "3001234567", // Número de teléfono de ejemplo.
  };
  // Las llaves anteriores delimitan el objeto usuario.

  const ubicacion = {
    // Crea un objeto con los datos de una ubicación de ejemplo.

    idUbicacion: 1, // Identificador de la ubicación.
    direccion: "Santa Rosa de Osos, Antioquia", // Dirección registrada.
    latitud: 6.647, // Coordenada geográfica de latitud.
    longitud: -75.460, // Coordenada geográfica de longitud.
  };
  // Las llaves anteriores delimitan el objeto ubicacion.

  return (
    // return indica qué elementos debe mostrar el componente App.
    // El JSX siguiente describe la estructura visual de la aplicación.

    <div>
      {/* Contenedor principal que agrupa el contenido de la aplicación. */}

      <Header
        // Muestra el encabezado y le entrega funciones para cambiar de vista.

        mostrarUsuario={() => setVista("usuario")}
        // Cuando se ejecuta esta función desde Header, cambia la vista a "usuario".

        mostrarUbicacion={() => setVista("ubicacion")}
        // Cambia la vista a "ubicacion" cuando el usuario selecciona esa opción.

        mostrarAtencionUsuario={() => setVista("atencion")}
        // Cambia la vista a "atencion" cuando se selecciona esa opción.
      />

      {vista === "usuario" && (
        // Comprueba si la vista actual es "usuario".
        // Si la condición es verdadera, React muestra el componente Usuario.

        <Usuario
          usuario={usuario}
          // Envía el objeto usuario al componente Usuario mediante una prop.

          ubicacion={ubicacion}
          // Envía también el objeto ubicacion al componente Usuario.
        />
        // Cierra el componente Usuario y el bloque condicional.
      )}

      {vista === "ubicacion" && (
        // Comprueba si la vista actual es "ubicacion".
        // Si es verdadera, muestra el componente Ubicacion.

        <Ubicacion
          ubicacion={ubicacion}
          // Envía los datos de ubicación al componente Ubicacion.

          usuario={usuario}
          // Envía los datos del usuario al componente Ubicacion.
        />
        // Cierra el componente Ubicacion y el bloque condicional.
      )}

      {vista === "inicio" && (
        // Comprueba si la vista actual es "inicio".
        // Si es verdadera, muestra el mensaje de bienvenida.

        <h2>Bienvenido a CleanCity 🌱</h2>
        // Encabezado de segundo nivel con el nombre de la aplicación.
      )}

      {vista === "atencion" && <AtencionUsuario />}
      // Si la vista es "atencion", muestra el componente AtencionUsuario.
      // Este componente no recibe props en este código.

    </div>
    // Cierra el contenedor principal.
  );
  // Termina el return con la interfaz que React debe representar.
}

export default App;
// Exporta el componente App para que pueda importarse y utilizarse en otros archivos,
// por ejemplo, desde main.jsx para mostrar la aplicación en el navegador.


