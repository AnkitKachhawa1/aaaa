import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    blogs.push({
      id: blogs.length + 1,
      title,
      content,
    });
    navigate("/updates");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write a New Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">Publish</button>
    </form>
  );
};

export default NewBlog;
