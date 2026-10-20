import { useState } from "react";
import Chips from "./Chips.jsx";

// Interacción propia del perfil de Iván. En TP1 era initFlipCard()
// manipulando clases a mano sobre el DOM; acá el estado "flipped"
// vive en React con useState y la clase se deriva de ese estado.
export default function FlipCard({ accentColor, skills, movies, albums }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div className="flip-scene">
        <div className={`flip-card${flipped ? " is-flipped" : ""}`}>
          <div className="flip-face flip-face-front">
            <h3 style={{ color: accentColor, fontSize: "0.95rem", marginBottom: 12 }}>
              Habilidades
            </h3>
            <Chips items={skills} />
          </div>
          <div className="flip-face flip-face-back">
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
        </div>
      </div>

      <button
        className="btn btn-outline"
        aria-pressed={flipped}
        style={{ marginTop: 20 }}
        onClick={() => setFlipped((v) => !v)}
      >
        {flipped ? "← Volver a los datos" : "Ver películas y discos →"}
      </button>
    </>
  );
}
