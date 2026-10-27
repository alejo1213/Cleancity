

import { useState } from "react";

function AtencionUsuario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipoSolicitud, setTipoSolicitud] = useState("Consulta");
  const [mensaje, setMensaje] = useState("");

  // 🔴 VALIDACIÓN NUEVA: guarda el mensaje de error que se mostrará en pantalla.
  const [error, setError] = useState("");

  function enviarSolicitud(event) {
    event.preventDefault();

    // 🔴 VALIDACIÓN NUEVA: comprueba si algún campo obligatorio está vacío.
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      mensaje.trim() === ""
    ) {
      setError("Error: debes completar todos los campos obligatorios.");
      return; // Detiene el envío si falta algún dato.
    }

    // 🔴 VALIDACIÓN NUEVA: comprueba el formato básico del correo electrónico.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) {
      setError("Error: escribe un correo electrónico válido.");
      return; // Detiene el envío si el correo no tiene un formato válido.
    }

    // 🔴 VALIDACIÓN NUEVA: elimina el error anterior si todo está correcto.
    setError("");

    alert(
      "Solicitud registrada en la interfaz. ¡Gracias por contactarnos, " +
      nombre +
      "!"
    );

    setNombre("");
    setCorreo("");
    setTipoSolicitud("Consulta");
    setMensaje("");
  }

  return (
    <div className="atencion-container">
      <div className="atencion-card">
        <h2>💬 Atención al usuario</h2>

        <p>
          ¿Necesitas ayuda con CleanCity?
          Envíanos tu solicitud.
        </p>

        <form onSubmit={enviarSolicitud}>
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
              setError(""); // borra el error al corregir.
            }}
            placeholder="Escribe tu nombre"
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            value={correo}
            onChange={(event) => {
              setCorreo(event.target.value);
              setError(""); // 🔴 VALIDACIÓN: borra el error al corregir.
            }}
            placeholder="ejemplo@correo.com"
            required
          />

          <label>Tipo de solicitud</label>
          <select
            value={tipoSolicitud}
            onChange={(event) => setTipoSolicitud(event.target.value)}
          >
            <option value="Consulta">Consulta</option>
            <option value="Queja">Queja</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Ayuda con un reporte">
              Ayuda con un reporte
            </option>
          </select>

          <label>Describe tu solicitud</label>
          <textarea
            value={mensaje}
            onChange={(event) => {
              setMensaje(event.target.value);
              setError(""); // 🔴 VALIDACIÓN: borra el error al corregir.
            }}
            placeholder="Cuéntanos cómo podemos ayudarte..."
            rows="5"
            required
          />

          {/* 🔴 VALIDACIÓN NUEVA: muestra el error cuando existe. */}
          {error && (
            <p role="alert" style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button type="submit">
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}

export default AtencionUsuario;
