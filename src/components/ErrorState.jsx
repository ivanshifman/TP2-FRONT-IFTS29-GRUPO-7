export default function ErrorState({ message = "Ocurrió un error.", onRetry }) {
  return (
    <div className="state-box state-error">
      <p>⚠️ {message}</p>
      {onRetry && (
        <button className="btn btn-outline" onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  );
}
