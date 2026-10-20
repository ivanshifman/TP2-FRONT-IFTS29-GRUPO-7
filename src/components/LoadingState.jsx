export default function LoadingState({ label = "Cargando..." }) {
  return (
    <div className="state-box state-loading">
      <span className="spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}
