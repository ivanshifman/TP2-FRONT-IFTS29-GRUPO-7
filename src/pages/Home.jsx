import { useMemo, useState } from "react";
import { MEMBERS, MEMBER_IDS } from "../data/members.js";
import MemberCard from "../components/MemberCard.jsx";

export default function Home() {
  const [query, setQuery] = useState("");

  const visibleIds = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MEMBER_IDS;
    return MEMBER_IDS.filter((id) => {
      const member = MEMBERS[id];
      const haystack = `${member.name} ${member.skills.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <>
      <section className="hero">
        <p className="eyebrow">&gt; whoami --team</p>
        <h1>DevSquad</h1>
        <p>
          Somos un equipo de 4 estudiantes de la Tecnicatura Superior en
          Desarrollo de Software (IFTS N°29). Este proyecto es el TP2 de
          Desarrollo de Sistemas Web: la misma identidad de equipo del TP1,
          llevada a una aplicación React con navegación propia, datos
          dinámicos y consumo de una API pública.
        </p>
        <a href="#equipo" className="btn btn-primary">
          Conocer al equipo ↓
        </a>
      </section>

      <section id="equipo" className="team-section" aria-labelledby="team-title">
        <h2 id="team-title" className="section-title" style={{ textAlign: "center" }}>
          El equipo
        </h2>
        <p
          className="section-desc"
          style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          Buscá por nombre o por habilidad para filtrar las tarjetas.
        </p>

        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">
            &gt;
          </span>
          <label htmlFor="member-search" className="visually-hidden">
            Buscar integrante por nombre o habilidad
          </label>
          <input
            id="member-search"
            type="text"
            placeholder="Ej: CSS, JavaScript, Marcelo..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="member-grid">
          {visibleIds.map((id) => (
            <MemberCard id={id} member={MEMBERS[id]} key={id} />
          ))}
        </div>

        {visibleIds.length === 0 && (
          <p className="search-empty visible">
            No encontramos integrantes que coincidan con esa búsqueda.
          </p>
        )}
      </section>
    </>
  );
}
