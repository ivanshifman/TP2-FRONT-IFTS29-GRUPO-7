import { useState } from "react";

export default function SkillBars({ skillBars, movies, albums }) {
  const [played, setPlayed] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!played) setPlayed(true);
    setOpen((v) => !v);
  };

  return (
    <>
      <div className="skill-bars">
        {skillBars.map((bar) => (
          <div key={bar.label}>
            <div className="skill-bar-label">
              <span>{bar.label}</span>
              <span>—</span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: played ? `${bar.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={handleClick}>
        {open ? "Ocultar películas y discos" : "Mostrar películas y discos"}
      </button>

      <div className={`reveal-extra${open ? " is-open" : ""}`}>
        <div className="extra-list">
          <h3>Películas favoritas</h3>
          <ul>
            {movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <h3>Discos favoritos</h3>
          <ul>
            {albums.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
