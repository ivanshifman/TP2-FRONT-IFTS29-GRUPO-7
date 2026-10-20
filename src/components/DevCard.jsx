import FlipCard from "./FlipCard.jsx";
import Tabs from "./Tabs.jsx";
import Accordion from "./Accordion.jsx";
import SkillBars from "./SkillBars.jsx";

const ACCENTS = {
  ivan: "var(--accent-ivan)",
  angel: "var(--accent-angel)",
  flavio: "var(--accent-flavio)",
  marcelo: "var(--accent-marcelo)",
};

function Interaction({ id, member }) {
  switch (member.interaction) {
    case "flip":
      return (
        <FlipCard
          accentColor={ACCENTS[id]}
          skills={member.skills}
          movies={member.movies}
          albums={member.albums}
        />
      );
    case "tabs":
      return <Tabs skills={member.skills} movies={member.movies} albums={member.albums} />;
    case "accordion":
      return (
        <Accordion skills={member.skills} movies={member.movies} albums={member.albums} />
      );
    case "bars":
      return (
        <SkillBars
          skillBars={member.skillBars}
          movies={member.movies}
          albums={member.albums}
        />
      );
    default:
      return null;
  }
}

export default function DevCard({ id, member }) {
  return (
    <div className="dev-card" data-accent={id}>
      <img
        className={`dev-avatar${id === "ivan" ? " photo-avatar" : ""}`}
        src={`/img/${member.avatarFile}`}
        alt={`Avatar de ${member.name}`}
      />
      <h1>{member.name}</h1>
      <div className="dev-meta">
        <span>📍 {member.city}</span>
        <span>🎂 {member.age}</span>
      </div>
      <a
        href={`https://github.com/${member.githubUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="chip"
        style={{ marginBottom: 20, display: "inline-block" }}
      >
        github.com/{member.githubUser}
      </a>

      <Interaction id={id} member={member} />
    </div>
  );
}
