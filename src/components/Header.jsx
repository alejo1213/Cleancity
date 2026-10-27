
function Header({ mostrarUsuario, mostrarUbicacion, mostrarAtencionUsuario}) {
  return (
    <header className="header">
      <div className="logo">
        🌱 CleanCity
      </div>

      <nav>
        <a href="#">Inicio</a>
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
