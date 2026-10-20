import { useState } from "react";
import Chips from "./Chips.jsx";

function AccordionItem({ title, isOpen, onToggle, children }) {
  const [panelRef, setPanelRef] = useState(null);

  return (
    <div className="accordion-item">
      <button
        className="accordion-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {title} <span className="icon">+</span>
      </button>
      <div
        ref={setPanelRef}
        className="accordion-panel"
        style={{ maxHeight: isOpen ? `${panelRef?.scrollHeight ?? 400}px` : "0px" }}
      >
        <div className="accordion-panel-inner">{children}</div>
      </div>
    </div>
  );
}

export default function Accordion({ skills, movies, albums }) {
  const [openId, setOpenId] = useState("habilidades");

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <div className="accordion">
      <AccordionItem
        title="Habilidades"
        isOpen={openId === "habilidades"}
        onToggle={() => toggle("habilidades")}
      >
        <Chips items={skills} />
      </AccordionItem>

      <AccordionItem
        title="Películas favoritas"
        isOpen={openId === "peliculas"}
        onToggle={() => toggle("peliculas")}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {movies.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem
        title="Discos favoritos"
        isOpen={openId === "discos"}
        onToggle={() => toggle("discos")}
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {albums.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
