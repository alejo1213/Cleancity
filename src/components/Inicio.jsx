// ============================================================
// Inicio.jsx — página de inicio (dashboard) de CleanCity
// ============================================================

import { useState } from "react"; // useState guarda la pestaña activa de la tabla
import "./Inicio.css";            // estilos del componente

// Para la fuente Inter, agrega esta línea en el <head> de tu index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

/* ------------------------------------------------------------
   ÍCONOS
   Cada ícono es solo el "dibujo" (path SVG). El componente
   <Icono nombre="..." /> lo pinta, así no repetimos código.
   ------------------------------------------------------------ */
const ICONOS = {
  inicio: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
  calendario: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></>,
  reciclar: <path d="M7 19H4l3-5M17 19l3-5-3-5M9 5l3-3 3 3M12 2v7M4 14l3 5h10M20 14l-3-5H8" />,
  tarjeta: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  usuario: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>,
  buscar: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
  luna: <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />,
  ajustes: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>,
  campana: <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />,
  basura: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />,
  hoja: <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.4 5.4-7" />,
  calavera: <path d="M12 2a8 8 0 00-5 14v3h10v-3a8 8 0 00-5-14zM9 12h.01M15 12h.01M10 22v-3M14 22v-3" />,
};

function Icono({ nombre }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {ICONOS[nombre]}
    </svg>
  );
}

/* ------------------------------------------------------------
   DATOS DE EJEMPLO
   Más adelante los reemplazas por datos de tu API/base de datos
   (por ejemplo con useEffect + fetch). "estado" puede ser:
   pendiente | recogido | cancelado
   ------------------------------------------------------------ */

// Opciones del menú lateral
const MENU = [
  { texto: "Inicio", icono: "inicio", activo: true },
  { texto: "Programar", icono: "calendario" },
  { texto: "Seguimiento", icono: "pin" },
  { texto: "Reciclaje", icono: "reciclar" },
  { texto: "Pagos", icono: "tarjeta" },
  { texto: "Comunidad", icono: "chat" },
  { texto: "Cuenta", icono: "usuario" },
];

// Tarjetas de resumen: "clase" decide el color (ver Inicio.css)
const RESUMEN = [
  { clase: "reciclable", titulo: "Reciclable", valor: "150 kg", icono: "reciclar", texto: "Aporta a un futuro sostenible con el reciclaje" },
  { clase: "general", titulo: "Residuos generales", valor: "325 kg", icono: "basura", texto: "Gestiona tus residuos generales con responsabilidad" },
  { clase: "organico", titulo: "Orgánico", valor: "210 kg", icono: "hoja", texto: "Mantén nuestro entorno verde y limpio" },
  { clase: "peligroso", titulo: "Peligrosos", valor: "---", icono: "calavera", texto: "Maneja los residuos peligrosos con cuidado" },
];

// Filas de la tabla, separadas por pestaña
const RECOLECCIONES = {
  proximas: [
    { residuo: "Reciclable", estado: "pendiente", lugar: "Calle 8 Edigbe", cantidad: "12 kg", fecha: "01/03/2024" },
    { residuo: "General", estado: "pendiente", lugar: "Calle 8 Edigbe", cantidad: "20 kg", fecha: "05/03/2024" },
  ],
  historial: [
    { residuo: "General", estado: "recogido", lugar: "Calle 8 Edigbe", cantidad: "20 kg", fecha: "12/02/2024" },
    { residuo: "Orgánico", estado: "recogido", lugar: "Calle 8 Edigbe", cantidad: "16 kg", fecha: "24/01/2024" },
    { residuo: "General", estado: "cancelado", lugar: "Calle 8 Edigbe", cantidad: "39 kg", fecha: "15/01/2024" },
  ],
};

// Texto que se muestra en la etiqueta de cada estado
const TEXTO_ESTADO = { pendiente: "Pendiente", recogido: "Recogido", cancelado: "Cancelado" };

// Actividad reciente de la comunidad
const ACTIVIDAD = [
  { iniciales: "SE", color: "#e08a9b", nombre: "Stephen Edigbe", accion: "programó una recolección para mañana.", hace: "hace 2 minutos" },
  { iniciales: "NA", color: "#6a9fb5", nombre: "Natacha Akide", accion: "participó en una jornada de reciclaje.", hace: "hace 5 minutos" },
  { iniciales: "TO", color: "#e5646e", nombre: "Temilade Openiyi", accion: "programó una recolección para mañana.", hace: "hace 10 minutos" },
  { iniciales: "KO", color: "#8c7bd6", nombre: "Kehinde Oyebanjo", accion: "se unió a una limpieza comunitaria.", hace: "hace 10 minutos" },
];

/* ------------------------------------------------------------
   COMPONENTE PRINCIPAL
   ------------------------------------------------------------ */
export default function Inicio() {
  // Estado: qué pestaña de la tabla está activa ("proximas" o "historial")
  const [pestana, setPestana] = useState("proximas");

  return (
    <div className="inicio">
      {/* ==================== BARRA LATERAL ==================== */}
      <aside className="sidebar">
        <div className="logo">Clean<span>City</span></div>

        {/* .map() recorre MENU y crea un <li> por cada opción.
            Si usas react-router, cambia <a> por <NavLink to="/ruta"> */}
        <nav aria-label="Principal">
          <ul className="menu">
            {MENU.map((item) => (
              <li key={item.texto}>
                <a href="#" className={item.activo ? "active" : ""} aria-current={item.activo ? "page" : undefined}>
                  <Icono nombre={item.icono} />
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Usuario conectado */}
        <div className="profile">
          <div className="avatar" style={{ background: "#0b7a99" }}>SR</div>
          <div><strong>Stephen Reign</strong><small>@jaymitchel_</small></div>
        </div>
      </aside>

      {/* ==================== CONTENIDO ==================== */}
      <main className="main">
        {/* Buscador + modo oscuro, ajustes y notificaciones */}
        <header className="topbar">
          <label className="search">
            <Icono nombre="buscar" />
            <input type="search" placeholder="Buscar" aria-label="Buscar" />
          </label>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Modo oscuro"><Icono nombre="luna" /></button>
            <button className="icon-btn" aria-label="Ajustes"><Icono nombre="ajustes" /></button>
            <button className="icon-btn" aria-label="Notificaciones"><Icono nombre="campana" /><span className="dot" /></button>
          </div>
        </header>

        {/* Saludo */}
        <section className="greeting">
          <h1>Hola, Reign</h1>
          <p>Revisa todas tus actividades aquí</p>
        </section>

        {/* Tarjetas de resumen (una por tipo de residuo) */}
        <section className="stats" aria-label="Resumen de residuos">
          {RESUMEN.map((r) => (
            <article key={r.titulo} className={`stat ${r.clase}`}>
              <div className="stat-head">
                <div>
                  <div className="label">{r.titulo}</div>
                  <div className="value">{r.valor}</div>
                </div>
                <div className="stat-icon"><Icono nombre={r.icono} /></div>
              </div>
              <p>{r.texto}</p>
            </article>
          ))}
        </section>

        <div className="panels">
          {/* ---------- Recolecciones ---------- */}
          <section className="panel" aria-labelledby="t-rec">
            <div className="panel-head">
              <h2 id="t-rec">Recolecciones</h2>
              <div className="panel-actions">
                {/* Conecta estos botones a tus rutas o a un formulario */}
                <button className="btn btn-primary">Programar recolección</button>
                <button className="btn btn-outline">Ver todo ›</button>
              </div>
            </div>

            {/* Pestañas: al hacer clic se cambia el estado y React redibuja la tabla */}
            <div className="tabs" role="tablist">
              <button className="tab" role="tab" aria-selected={pestana === "proximas"} onClick={() => setPestana("proximas")}>Próximas</button>
              <button className="tab" role="tab" aria-selected={pestana === "historial"} onClick={() => setPestana("historial")}>Historial</button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Residuo</th><th>Estado</th><th>Ubicación</th><th>Cantidad</th><th>Fecha</th></tr>
                </thead>
                <tbody>
                  {/* Se muestran solo las filas de la pestaña elegida */}
                  {RECOLECCIONES[pestana].map((f, i) => (
                    <tr key={i}>
                      <td>{f.residuo}</td>
                      <td><span className={`badge ${f.estado}`}>{TEXTO_ESTADO[f.estado]}</span></td>
                      <td>{f.lugar}</td>
                      <td>{f.cantidad}</td>
                      <td>{f.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ---------- Comunidad ---------- */}
          <aside className="panel" aria-labelledby="t-com">
            <h2 id="t-com">Comunidad</h2>
            <div className="sub"><span>Actividad reciente</span><a href="#">Explorar ›</a></div>
            <ul className="feed">
              {ACTIVIDAD.map((a) => (
                <li key={a.nombre}>
                  <div className="avatar" style={{ background: a.color }}>{a.iniciales}</div>
                  <div>
                    <strong>{a.nombre}</strong> {a.accion}
                    <time>{a.hace}</time>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}