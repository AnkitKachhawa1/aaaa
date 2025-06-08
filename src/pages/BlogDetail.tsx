import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
