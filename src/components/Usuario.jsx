import Ubicacion from "./Ubicacion"; 
function Usuario({ usuario, ubicacion }) {
  return (
    <section className="perfil">

      <div className="avatar">
        👤
      </div>

      <h2>Alejandro</h2>

      <p className="rol">
        Usuario de CleanCity
      </p>

      <div className="datos">

        <div className="dato">
          <span>🪪</span>
          <div>
            <strong>Cédula</strong>
            <p>123456789</p>
          </div>
        </div>

        <div className="dato">
          <span>📧</span>
          <div>
            <strong>Correo</strong>
            <p>alejandro@gmail.com</p>
          </div>
        </div>

        <div className="dato">
          <span>📱</span>
          <div>
            <strong>Teléfono</strong>
            <p>3001234567</p>
          </div>
        </div>

      </div>

    </section>
  );
  <Ubicacion
  ubicacion={ubicacion}
  usuario={usuario}
/>

}

export default Usuario;