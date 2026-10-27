
function Ubicacion({ ubicacion, usuario }) {
  return (
    <div className="ubicacion-card">
      <h3>📍 Información de ubicación</h3>

      <p>
        <strong>ID ubicación:</strong> {ubicacion.idUbicacion}
      </p>

      <p>
        <strong>Dirección:</strong> {ubicacion.direccion}
      </p>

      <p>
        <strong>Latitud:</strong> {ubicacion.latitud}
      </p>

      <p>
        <strong>Longitud:</strong> {ubicacion.longitud}
      </p>

      <p>
        <strong>Usuario asociado:</strong> {usuario.nombre}
      </p>

      <p>
        <strong>ID del usuario:</strong> {usuario.idUsuario}
      </p>
    </div>
  );
}

export default Ubicacion;
