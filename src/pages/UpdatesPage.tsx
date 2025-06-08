import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const UpdatesPage = () => {
  const [blogList] = useState(blogs);

  return (
    <div style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      minHeight: "100vh",
      padding: "40px 0"
    }}>
      <div style={{
        maxWidth: 600,
        background: "#fff",
        borderRadius: 16,
        margin: "0 auto",
        padding: "36px 32px 32px 32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.08)"
      }}>
        <h2 style={{
          fontWeight: 900,
          fontSize: 36,
          letterSpacing: "-1px",
          marginBottom: 28,
          color: "#1e293b"
        }}>
          <span style={{
            background: "linear-gradient(90deg,#6366f1,#0ea5e9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Blog Updates</span>
        </h2>
        <ul style={{listStyle: "none", padding: 0, margin: 0}}>
          {blogList.length === 0 && (
            <li style={{
              color: "#64748b",
              fontSize: 18,
              fontWeight: 500,
              textAlign: "center",
              margin: "32px 0"
            }}>
              No blogs have been posted yet.
            </li>
          )}
          {blogList.map((blog) => (
            <li key={blog.id} style={{
              marginBottom: 22,
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 14
            }}>
              <Link to={`/blogs/${blog.id}`}
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#0ea5e9",
                  textDecoration: "none",
                  transition: "color 0.18s",
                  display: "block"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#6366f1")}
                onMouseOut={e => (e.currentTarget.style.color = "#0ea5e9")}
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpdatesPage;