
function Header({ mostrarInicio, mostrarUsuario, mostrarUbicacion, mostrarAtencionUsuario }) {
  // mostrarInicio es nueva: es la función que App le entrega para cambiar a la vista "inicio"
  return (
    <header className="header">
      <div className="logo">
        🌱 CleanCity
      </div>

      <nav>
        {/* Antes era <a href="#">Inicio</a>. Ahora es un botón que llama a mostrarInicio */}
        <button onClick={mostrarInicio}>
          Inicio
        </button>

        <a href="#">Recoleccion</a>

        <button onClick={mostrarUsuario}>
          Usuario
        </button>

        <button onClick={mostrarUbicacion}>
          Ubicación
        </button>

        <button onClick={mostrarAtencionUsuario}>
          Atencion al Cliente
        </button>
      </nav>
    </header>
  );
}

export default Header;
