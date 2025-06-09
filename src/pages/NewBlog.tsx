import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("mutual fund");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    blogs.push({
      id: "blog-" + (blogs.length + 1),
      title,
      content,
      tag,
      date,
    });
    navigate("/updates");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Write a New Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 12 }}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={6}
        style={{ width: "100%", marginBottom: 12 }}
      />
      <div style={{ marginBottom: 12 }}>
        <label>
          Tag:&nbsp;
          <select value={tag} onChange={e => setTag(e.target.value)}>
            <option value="mutual fund">Mutual Fund</option>
            <option value="gst">GST</option>
            <option value="others">Others</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>
          Date:&nbsp;
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Publish</button>
    </form>
  );
};

export default NewBlog;
