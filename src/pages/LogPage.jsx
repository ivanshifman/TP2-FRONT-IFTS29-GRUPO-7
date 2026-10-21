import { LOG_ENTRIES } from "../data/logEntries.js";
import TextType from "../components/TextType.jsx";

export default function LogPage() {
  return (
    <section className="page-section log-section-react">
      <p className="eyebrow">&gt; log --history</p>
      <TextType
        as="h1"
        className="section-title"
        text="Bitácora"
        typingSpeed={65}
        initialDelay={100}
        typeEffect="fade"
        loop={false}
        showCursor={false}
        startOnVisible
      />
      <p className="section-desc">
        Registro de las decisiones, avances y dificultades del equipo a lo
        largo de TP1 y TP2. Se actualiza a medida que avanzamos.
      </p>

      <div className="log-list">
        {LOG_ENTRIES.map((entry, index) => (
          <details className="log-entry-details" key={`${entry.date}-${entry.title}`} open={index >= LOG_ENTRIES.length - 2}>
            <summary>
              <span className="log-date">{entry.date}</span>
              <span className="log-entry-title">{entry.title}</span>
            </summary>
            <p dangerouslySetInnerHTML={{ __html: entry.text }} />
          </details>
        ))}
      </div>
    </section>
  );
}
