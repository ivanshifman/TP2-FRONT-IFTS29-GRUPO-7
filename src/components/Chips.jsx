export default function Chips({ items, align = "flex-start" }) {
  return (
    <div className="tags" style={{ justifyContent: align }}>
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
