import { Link, Navigate, useParams } from "react-router-dom";
import { MEMBERS, MEMBER_IDS } from "../data/members.js";
import DevCard from "../components/DevCard.jsx";

export default function ProfilePage() {
  const { id } = useParams();
  const member = MEMBERS[id];

  if (!member) return <Navigate to="/" replace />;

  const index = MEMBER_IDS.indexOf(id);
  const prevId = MEMBER_IDS[(index - 1 + MEMBER_IDS.length) % MEMBER_IDS.length];
  const nextId = MEMBER_IDS[(index + 1) % MEMBER_IDS.length];

  return (
    <>
      <div className="profile-header">
        <p className="breadcrumb">
          <Link to="/">Inicio</Link> / {member.name}
        </p>
      </div>

      <section className="profile-main">
        <DevCard id={id} member={member} />
      </section>

      <nav className="peer-nav" aria-label="Navegación entre compañeros">
        <Link to={`/perfil/${prevId}`}>← Perfil de {MEMBERS[prevId].name.split(" ")[0]}</Link>
        <Link to="/">Volver al equipo</Link>
        <Link to={`/perfil/${nextId}`}>Perfil de {MEMBERS[nextId].name.split(" ")[0]} →</Link>
      </nav>
    </>
  );
}
