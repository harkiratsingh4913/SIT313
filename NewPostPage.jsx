import React, { useState } from "react";
import PostTypeSelector from "./PostTypeSelector.jsx";
import QuestionPost from "./QuestionPost.jsx";
import ArticlePost from "./ArticlePost.jsx";

export default function NewPostPage() {
  const [postType, setPostType] = useState("question");

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [abstractText, setAbstractText] = useState("");
  const [articleText, setArticleText] = useState("");

  const handleSubmit = () => {
    const errors = [];
    if (!title.trim()) errors.push("Title is required.");
    if (postType === "question" && !description.trim())
      errors.push("Describe your problem.");
    if (postType === "article" && !abstractText.trim())
      errors.push("Abstract is required.");

    if (errors.length) {
      alert("Please fix:\n" + errors.join("\n"));
      return;
    }

    const payload = {
      postType,
      title,
      tags,
      ...(postType === "question"
        ? { description }
        : { abstract: abstractText, articleText }),
    };

    console.log("POST PAYLOAD:", payload);
    alert("Post prepared — check console for payload.\n(No DB in this task)");
  };

  return (
    <div className="page">
      <div className="panel-title">New Post</div>

      <div className="panel section">
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </div>

      <div className="section gap">
        <div className="section-title">What do you want to ask or share</div>
        <p className="hint">
          This section is designed based on the type of the post. It could be
          developed by conditional rendering.
          <span className="hint-red">
            {" "}
            For post a {postType}, the following section would be appeared.
          </span>
        </p>

        {postType === "question" ? (
          <QuestionPost
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            tags={tags}
            setTags={setTags}
          />
        ) : (
          <ArticlePost
            title={title}
            setTitle={setTitle}
            abstractText={abstractText}
            setAbstractText={setAbstractText}
            articleText={articleText}
            setArticleText={setArticleText}
            tags={tags}
            setTags={setTags}
          />
        )}

        <div className="post-row">
          <button className="btn-post" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
