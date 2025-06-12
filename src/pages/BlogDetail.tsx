import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/blogs";

// Helper function to format date as dd/mm/yyyy
const formatDate = (dateStr: string) => {
  return dateStr; // Already in dd/mm/yyyy format
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  // Get the current URL for sharing
  const currentUrl = window.location.href;
  
  // Extract plain text from HTML content for description
  const getPlainTextDescription = (htmlContent: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    return plainText.slice(0, 160) + (plainText.length > 160 ? '...' : '');
  };

  // Helper to check for Cloudinary URL
  const isCloudinary = blog.image && blog.image.includes("res.cloudinary.com");

  return (
    <>
      <Helmet>
        {/* Basic meta tags */}
        <title>{blog.title} | Financial Services</title>
        <meta name="description" content={getPlainTextDescription(blog.content)} />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={getPlainTextDescription(blog.content)} />
        <meta property="og:image" content={blog.image || "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Services" />
        
        {/* Article specific tags */}
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:author" content="Ankit Kachhawa" />
        <meta property="article:section" content={blog.tag} />
        <meta property="article:tag" content={blog.tag} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={getPlainTextDescription(blog.content)} />
        <meta name="twitter:image" content={blog.image || "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"} />
        <meta name="twitter:creator" content="@iAnkitKachhawa" />
        
        {/* WhatsApp specific (uses Open Graph) */}
        <meta property="og:locale" content="en_US" />
        
        {/* Canonical link */}
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      
      <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
        {/* Optimized Cloudinary image or fallback */}
        {isCloudinary ? (
          <img
            src={blog.image}
            srcSet={`
              ${blog.image.replace('/upload/', '/upload/f_auto,q_auto,w_400/')} 400w,
              ${blog.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/')} 800w
            `}
            sizes="(max-width: 600px) 400px, 800px"
            alt={blog.title}
            width="800"
            height="533"
            style={{ width: "100%", borderRadius: 12, marginBottom: 24, maxHeight: 360, objectFit: "cover" }}
            loading="lazy"
          />
        ) : (
          <img
            src={blog.image}
            alt={blog.title}
            width="800"
            height="533"
            style={{ width: "100%", borderRadius: 12, marginBottom: 24, maxHeight: 360, objectFit: "cover" }}
            loading="lazy"
          />
        )}

        <h2 style={{ fontWeight: 900, fontSize: 36, marginBottom: 24 }}>{blog.title}</h2>
        
        {/* Blog metadata */}
        <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", fontSize: 14, color: "#6b7280" }}>
            <span style={{ backgroundColor: "#dbeafe", color: "#1d4ed8", padding: "4px 8px", borderRadius: 6, fontWeight: 600 }}>
              {blog.tag}
            </span>
            <span>Published: {formatDate(blog.date)}</span>
            <span>By: Ankit Kachhawa</span>
          </div>
        </div>
        
        <div
          style={{ fontSize: 18, color: "#1e293b", lineHeight: 1.7 }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Share buttons */}
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: "#374151" }}>Share this article</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' - ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#25d366",
                color: "white",
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              {/* WhatsApp SVG */}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.9..."/>
                <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-...."/>
              </svg>
              WhatsApp
            </a>
            
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              {/* Facebook SVG */}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
              </svg>
              Facebook
            </a>
            
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1da1f2",
                color: "white",
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              {/* Twitter SVG */}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11..."/>
              </svg>
              Twitter
            </a>
            
            <button
              onClick={() => navigator.clipboard.writeText(currentUrl)}
              style={{
                backgroundColor: "#6b7280",
                color: "white",
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              {/* Copy Link SVG */}
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 ..."/>
              </svg>
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
