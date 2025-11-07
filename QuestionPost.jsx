import React from "react";
import TagInput from "./TagInput.jsx";

export default function QuestionPost({
  title,
  setTitle,
  description,
  setDescription,
  tags,
  setTags,
}) {
  return (
    <div>
      <label className="label">Title</label>
      <input
        className="wire-input"
        placeholder="Start your question with how, what, why, etc."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="label">Describe your problem</label>
      <textarea
        className="wire-textarea"
        rows={8}
        placeholder="Describe your problem"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label className="label">Tags</label>
      <TagInput
        tags={tags}
        setTags={setTags}
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
      />
    </div>
  );
}
