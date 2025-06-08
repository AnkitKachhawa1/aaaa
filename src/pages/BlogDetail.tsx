import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: 12, marginBottom: 24, maxHeight: 360, objectFit: "cover" }}
      />
      <h2 style={{ fontWeight: 900, fontSize: 36, marginBottom: 24 }}>{blog.title}</h2>
      <div
        style={{ fontSize: 18, color: "#1e293b", lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};
export default BlogDetail;