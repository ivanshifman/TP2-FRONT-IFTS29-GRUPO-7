import { useState } from "react";

function TreeNode({ node, depth = 0 }) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = Boolean(node.children?.length);

  return (
    <li className="tree-node">
      <div className="tree-row">
        {hasChildren ? (
          <button
            className="tree-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "−" : "+"}
          </button>
        ) : (
          <span className="tree-toggle tree-toggle-leaf">•</span>
        )}
        <span className="tree-name">{node.name}</span>
        {node.note && <span className="tree-note">{node.note}</span>}
      </div>

      {hasChildren && open && (
        <ul className="tree-children">
          {node.children.map((child) => (
            <TreeNode node={child} depth={depth + 1} key={child.name} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function RenderTree({ tree }) {
  return (
    <ul className="tree-root">
      <TreeNode node={tree} />
    </ul>
  );
}
