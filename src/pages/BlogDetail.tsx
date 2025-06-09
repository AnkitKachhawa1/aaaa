import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/blogs";

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
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", borderRadius: 12, marginBottom: 24, maxHeight: 360, objectFit: "cover" }}
        />
        <h2 style={{ fontWeight: 900, fontSize: 36, marginBottom: 24 }}>{blog.title}</h2>
        
        {/* Blog metadata */}
        <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", fontSize: 14, color: "#6b7280" }}>
            <span style={{ backgroundColor: "#dbeafe", color: "#1d4ed8", padding: "4px 8px", borderRadius: 6, fontWeight: 600 }}>
              {blog.tag}
            </span>
            <span>Published: {new Date(blog.date).toLocaleDateString()}</span>
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
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"/>
                <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
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
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"/>
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
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
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