import { Link } from "react-router-dom";

export default function MemberCard({ id, member }) {
  return (
    <article className="member-preview" data-accent={id}>
      <img
        src={`/img/${member.avatarFile}`}
        alt={`Avatar de ${member.name}`}
        loading="lazy"
      />
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <div className="tags">
        {member.skills.slice(0, 2).map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <Link to={`/perfil/${id}`} className="btn btn-outline">
        Ver perfil
      </Link>
    </article>
  );
}
