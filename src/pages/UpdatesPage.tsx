import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const tagOptions = ["all", "Mutual Fund", "GST", "Others"];
const sortOptions = [
  { label: "Newest to Oldest", value: "desc" },
  { label: "Oldest to Newest", value: "asc" }
];

// Helper function to parse dd/mm/yyyy format
const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day);
};

// Helper function to format date as dd/mm/yyyy
const formatDate = (dateStr: string) => {
  return dateStr; // Already in dd/mm/yyyy format
};

const UpdatesPage = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredBlogs = blogs
    .filter(blog => selectedTag === "all" ? true : blog.tag === selectedTag)
    .sort((a, b) => {
      const da = parseDate(a.date), db = parseDate(b.date);
      return sortOrder === "desc" ? db.getTime() - da.getTime() : da.getTime() - db.getTime();
    });

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-8 px-2 sm:px-4"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="font-extrabold text-3xl sm:text-4xl mb-2 text-slate-800 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 to-sky-400 bg-clip-text text-transparent">Blog Updates</span>
          </h2>
          <p className="text-slate-500 max-w-xl text-base sm:text-lg">
            Latest insights, news, and articles about Mutual Funds, GST, and more.
          </p>
        </div>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-3 mb-6">
          <select
            className="border border-slate-300 rounded-md px-3 py-2 text-slate-700 focus:ring-2 focus:ring-indigo-300 transition w-full sm:w-auto"
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value)}
          >
            {tagOptions.map(option => (
              <option key={option} value={option}>{option === "all" ? "All Tags" : option}</option>
            ))}
          </select>
          <select
            className="border border-slate-300 rounded-md px-3 py-2 text-slate-700 focus:ring-2 focus:ring-indigo-300 transition w-full sm:w-auto"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        {/* Blog cards */}
        <div className="grid gap-6">
          {filteredBlogs.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-lg font-medium">
              No blogs have been posted yet.
            </div>
          )}
          {filteredBlogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row gap-5 items-start hover:shadow-lg transition"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg mb-3 sm:mb-0"
                  style={{ maxWidth: 128, minWidth: 96, flexShrink: 0 }}
                />
              )}
              <div className="flex-1 w-full">
                <Link
                  to={`/blogs/${blog.id}`}
                  className="block font-bold text-xl sm:text-2xl text-indigo-600 hover:text-sky-500 transition mb-1"
                >
                  {blog.title}
                </Link>
                <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded font-semibold">
                    {blog.tag}
                  </span>
                  <span>
                    {formatDate(blog.date)}
                  </span>
                </div>
                <div
                  className="text-slate-700 text-base line-clamp-2"
                  // Optionally show short preview of content
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof blog.content === "string"
                        ? blog.content.replace(/<[^>]+>/g, "").slice(0, 120) +
                          (blog.content.length > 120 ? "..." : "")
                        : "",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;