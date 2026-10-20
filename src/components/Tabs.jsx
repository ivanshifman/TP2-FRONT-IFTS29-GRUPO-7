import { useState } from "react";
import Chips from "./Chips.jsx";

export default function Tabs({ skills, movies, albums }) {
  const [active, setActive] = useState("habilidades");

  const tabs = [
    { id: "habilidades", label: "Habilidades" },
    { id: "peliculas", label: "Películas" },
    { id: "discos", label: "Discos" },
  ];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Información del integrante">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="tab-btn"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`tab-panel${active === "habilidades" ? " is-active" : ""}`} role="tabpanel">
        <Chips items={skills} />
      </div>
      <div className={`tab-panel${active === "peliculas" ? " is-active" : ""}`} role="tabpanel">
        <ul className="extra-list" style={{ color: "var(--text-soft)", display: "flex", flexDirection: "column", gap: 6 }}>
          {movies.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
      <div className={`tab-panel${active === "discos" ? " is-active" : ""}`} role="tabpanel">
        <ul className="extra-list" style={{ color: "var(--text-soft)", display: "flex", flexDirection: "column", gap: 6 }}>
          {albums.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
