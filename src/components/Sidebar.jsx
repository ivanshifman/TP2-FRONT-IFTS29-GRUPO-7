import { NavLink } from "react-router-dom";
import { MEMBERS, MEMBER_IDS } from "../data/members.js";

const NAV_ITEMS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/recursos", label: "Recursos" },
  { to: "/api", label: "API" },
  { to: "/arbol", label: "Árbol de renderizado" },
  { to: "/bitacora", label: "Bitácora" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}

      <aside className={`sidebar${open ? " is-open" : ""}`}>
        <NavLink to="/" className="logo" onClick={onClose}>
          &lt;<span>DevSquad</span>/&gt;
        </NavLink>
        <p className="sidebar-tagline">
          Desarrollo de Sistemas Web (Front End) · IFTS N°29
        </p>

        <nav className="sidebar-nav" aria-label="Navegación principal">
          <p className="sidebar-nav-title">Equipo</p>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={onClose}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className="sidebar-nav-title">Perfiles</p>
          <ul>
            {MEMBER_IDS.map((id) => (
              <li key={id}>
                <NavLink to={`/perfil/${id}`} onClick={onClose}>
                  <span className="sidebar-dot" data-accent={id} />
                  {MEMBERS[id].name.split(" ")[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="sidebar-github"
          href="https://github.com/ivanshifman/TP2-FRONT-IFTS29-GRUPO-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://skillicons.dev/icons?i=github" alt="" aria-hidden="true" />
          Repositorio
        </a>
      </aside>
    </>
  );
}
