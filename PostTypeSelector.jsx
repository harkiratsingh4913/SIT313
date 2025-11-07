import React from "react";
import { Form } from "semantic-ui-react";

export default function PostTypeSelector({ postType, setPostType }) {
  return (
    <div>
      <div className="section-title small">Select Post Type:</div>
      <Form>
        <Form.Group inline>
          <Form.Radio
            label="Question"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />
          <Form.Radio
            label="Article"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
