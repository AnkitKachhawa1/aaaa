import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

// Helper function to format current date as dd/mm/yyyy
const getCurrentDateFormatted = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

// Helper function to convert yyyy-mm-dd to dd/mm/yyyy
const convertDateFormat = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

// Helper function to convert dd/mm/yyyy to yyyy-mm-dd for input field
const convertToInputFormat = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("Mutual Fund");
  const [date, setDate] = useState(getCurrentDateFormatted());
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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputDate = e.target.value; // yyyy-mm-dd format
    const formattedDate = convertDateFormat(inputDate); // convert to dd/mm/yyyy
    setDate(formattedDate);
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
            <option value="Mutual Fund">Mutual Fund</option>
            <option value="GST">GST</option>
            <option value="Others">Others</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>
          Date:&nbsp;
          <input
            type="date"
            value={convertToInputFormat(date)}
            onChange={handleDateChange}
            required
          />
        </label>
      </div>
      <button type="submit">Publish</button>
    </form>
  );
};

export default NewBlog;