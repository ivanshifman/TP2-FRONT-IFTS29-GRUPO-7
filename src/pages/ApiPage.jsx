import { useCallback, useEffect, useState } from "react";
import { MEMBERS, MEMBER_IDS } from "../data/members.js";
import LoadingState from "../components/LoadingState.jsx";
import ErrorState from "../components/ErrorState.jsx";

// Pide a la API pública de GitHub (api.github.com/users/:usuario) el
// perfil real de cada integrante. No requiere API key para uso básico
// y funciona directo desde el navegador (CORS habilitado).
async function fetchGithubUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) {
    throw new Error(
      res.status === 404 ? "Usuario no encontrado en GitHub." : "No se pudo consultar GitHub."
    );
  }
  return res.json();
}

function GithubMemberCard({ id }) {
  const member = MEMBERS[id];
  const [status, setStatus] = useState("loading");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const load = useCallback(() => {
    fetchGithubUser(member.githubUser)
      .then((json) => {
        setData(json);
        setStatus("success");
      })
      .catch((err) => {
        setError(err.message);
        setStatus("error");
      });
  }, [member.githubUser]);

  useEffect(() => {
    load();
  }, [load]);

  const retry = () => {
    setStatus("loading");
    load();
  };

  return (
    <article className="api-card" data-accent={id}>
      <h3>{member.name}</h3>

      {status === "loading" && <LoadingState label={`Consultando GitHub de ${member.name.split(" ")[0]}...`} />}

      {status === "error" && <ErrorState message={error} onRetry={retry} />}

      {status === "success" && data && (
        <div className="api-card-body">
          <img src={data.avatar_url} alt={`Avatar de GitHub de ${member.name}`} />
          <p className="api-username">@{data.login}</p>
          {data.bio && <p className="api-bio">{data.bio}</p>}
          <div className="api-stats">
            <div>
              <strong>{data.public_repos}</strong>
              <span>Repos</span>
            </div>
            <div>
              <strong>{data.followers}</strong>
              <span>Seguidores</span>
            </div>
            <div>
              <strong>{data.following}</strong>
              <span>Siguiendo</span>
            </div>
          </div>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Ver en GitHub
          </a>
        </div>
      )}
    </article>
  );
}

export default function ApiPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">&gt; fetch --api github</p>
      <h1 className="section-title">Perfiles reales de GitHub</h1>
      <p className="section-desc">
        Esta sección consume la <strong>API pública de GitHub</strong> (
        <code>api.github.com/users/:usuario</code>) para traer, en vivo, los
        repositorios públicos, seguidores y bio de cada integrante. No necesita
        clave de API. Cada tarjeta carga en paralelo y tiene su propio estado de
        carga/error con reintentar.
      </p>

      <div className="api-grid">
        {MEMBER_IDS.map((id) => (
          <GithubMemberCard id={id} key={id} />
        ))}
      </div>
    </section>
  );
}
