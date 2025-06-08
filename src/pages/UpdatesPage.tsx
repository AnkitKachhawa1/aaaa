import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const UpdatesPage = () => {
  const [blogList] = useState(blogs);

  return (
    <div>
      <h2>Blog Updates</h2>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatesPage;
