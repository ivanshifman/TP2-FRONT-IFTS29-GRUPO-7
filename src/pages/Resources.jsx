import { useMemo, useState } from "react";
import resources from "../data/resources.json";
import { MEMBERS } from "../data/members.js";
import TextType from "../components/TextType.jsx";

const CATEGORIES = ["Todas", ...new Set(resources.map((r) => r.category))];

export default function Resources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      const matchesCategory = category === "Todas" || r.category === category;
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const resetFilters = () => {
    setQuery("");
    setCategory("Todas");
  };

  return (
    <section className="page-section">
      <p className="eyebrow">&gt; recursos --list</p>
      <TextType
        as="h1"
        className="section-title"
        text="Recursos del equipo"
        typingSpeed={65}
        initialDelay={100}
        typeEffect="fade"
        loop={false}
        showCursor={false}
        startOnVisible
      />
      <p className="section-desc">
        Stack y herramientas que usamos en los proyectos de DevSquad ({resources.length}{" "}
        registros). Buscá por nombre o descripción, o filtrá por categoría.
      </p>

      <div className="filters-bar">
        <div className="search-bar search-bar--inline">
          <span className="search-icon" aria-hidden="true">
            &gt;
          </span>
          <label htmlFor="resource-search" className="visually-hidden">
            Buscar recurso
          </label>
          <input
            id="resource-search"
            type="text"
            placeholder="Ej: React, base de datos, testing..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filtrar por categoría"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {(query || category !== "Todas") && (
          <button className="btn btn-outline" onClick={resetFilters}>
            Limpiar filtros
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="search-empty visible">
          No encontramos recursos que coincidan con esa búsqueda.
        </p>
      ) : (
        <div className="resource-grid">
          {filtered.map((resource) => (
            <article className="resource-card" key={resource.id}>
              <div className="resource-card-top">
                <h3>{resource.name}</h3>
                <span className="chip">{resource.category}</span>
              </div>
              <p>{resource.description}</p>
              {resource.usadoPor.length > 0 && (
                <div className="resource-used-by">
                  {resource.usadoPor.map((id) => (
                    <span className="sidebar-dot" data-accent={id} key={id} title={MEMBERS[id].name} />
                  ))}
                </div>
              )}
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Ver sitio oficial
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
