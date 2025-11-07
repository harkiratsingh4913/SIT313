import React from "react";
import TagInput from "./TagInput.jsx";

export default function ArticlePost({
  title,
  setTitle,
  abstractText,
  setAbstractText,
  articleText,
  setArticleText,
  tags,
  setTags,
}) {
  return (
    <div>
      <label className="label">Title</label>
      <input
        className="wire-input"
        placeholder="Enter a descriptive title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="label">Abstract</label>
      <textarea
        className="wire-input"
        rows={3}
        placeholder="Enter a 1-paragraph abstract"
        value={abstractText}
        onChange={(e) => setAbstractText(e.target.value)}
      />

      <label className="label">Article Text</label>
      <textarea
        className="wire-textarea"
        rows={8}
        placeholder="Enter article text"
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
      />

      <label className="label">Tags</label>
      <TagInput
        tags={tags}
        setTags={setTags}
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
      />
    </div>
  );
}
