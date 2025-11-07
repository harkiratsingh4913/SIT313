import React, { useState } from "react";

export default function TagInput({ tags, setTags, placeholder }) {
  const [input, setInput] = useState("");

  const addTag = (raw) => {
    const t = raw.trim();
    if (!t) return;
    if (tags.includes(t)) {
      setInput("");
      return;
    }
    if (tags.length >= 3) {
      alert("Only up to 3 tags allowed.");
      return;
    }
    setTags([...tags, t]);
    setInput("");
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && !input && tags.length) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div>
      <div className="tag-row">
        {tags.map((t) => (
          <div className="tag-chip" key={t}>
            {t}
            <button
              className="tag-remove"
              onClick={() => removeTag(t)}
              aria-label={`Remove ${t}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <input
        className="wire-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
        Press Enter or comma to add a tag. Max 3 tags.
      </div>
    </div>
  );
}
