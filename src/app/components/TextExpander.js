import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1 inline"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </span>
  );
}

export default TextExpander;
