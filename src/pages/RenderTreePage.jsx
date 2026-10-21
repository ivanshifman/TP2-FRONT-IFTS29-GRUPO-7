import { COMPONENT_TREE } from "../data/componentTree.js";
import RenderTree from "../components/RenderTree.jsx";
import TextType from "../components/TextType.jsx";

export default function RenderTreePage() {
  return (
    <section className="page-section">
      <p className="eyebrow">&gt; tree --components</p>
      <TextType
        as="h1"
        className="section-title"
        text="Árbol de renderizado"
        typingSpeed={65}
        initialDelay={100}
        typeEffect="fade"
        loop={false}
        showCursor={false}
        startOnVisible
      />
      <p className="section-desc">
        Jerarquía real de componentes de esta aplicación: desde{" "}
        <code>App</code> hasta los componentes de hoja de cada sección.
        Hacé click en <strong>−</strong>/<strong>+</strong> para
        expandir o contraer una rama.
      </p>

      <div className="tree-wrapper">
        <RenderTree tree={COMPONENT_TREE} />
      </div>
    </section>
  );
}
