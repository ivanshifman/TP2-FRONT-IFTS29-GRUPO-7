import { useMemo, useState } from "react";
import { MEMBERS, MEMBER_IDS } from "../data/members.js";
import MemberCard from "../components/MemberCard.jsx";
import SplitFlapText from "../components/SplitFlapText.jsx";
import TextType from "../components/TextType.jsx";

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
        <h1>
          <SplitFlapText
            text="DevSquad"
            fontSize="clamp(1.5rem, 4vw + 1rem, 3.2rem)"
            textColor="var(--text)"
            gap={2}
            padTo={8}
            align="center"
            order="center"
            tileStyle="minimal"
            flipsPerChar={8}
            intro
          />
        </h1>
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
        <TextType
          id="team-title"
          as="h2"
          className="section-title"
          style={{ textAlign: "center" }}
          text="El equipo"
          typingSpeed={65}
          initialDelay={100}
          typeEffect="fade"
          loop={false}
          showCursor={false}
          startOnVisible
        />
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
