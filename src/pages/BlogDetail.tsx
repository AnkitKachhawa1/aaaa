import React, { useEffect } from "react";
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

  // Get the current URL for sharing - ensure it's absolute
  const baseUrl = 'https://ankitkachhawa.in';
  const currentUrl = `${baseUrl}/blogs/${id}`;
  
  // Extract plain text from HTML content for description
  const getPlainTextDescription = (htmlContent: string) => {
    if (typeof window === 'undefined') return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    return plainText.slice(0, 160) + (plainText.length > 160 ? '...' : '');
  };

  // Ensure image URL is absolute
  const getAbsoluteImageUrl = (imageUrl: string) => {
    if (!imageUrl) return `${baseUrl}/meta.jpg`;
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${baseUrl}${imageUrl}`;
  };

  const absoluteImageUrl = getAbsoluteImageUrl(blog.image);
  const description = getPlainTextDescription(blog.content);

  // Update page title when component mounts
  useEffect(() => {
    document.title = `${blog.title} | Ankit Kachhawa - Financial Services`;
  }, [blog.title]);

  return (
    <>
      <Helmet>
        {/* Basic meta tags */}
        <title>{blog.title} | Ankit Kachhawa - Financial Services</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${blog.tag}, Ankit Kachhawa, Deesa, Banaskantha, Gujarat, Financial Services`} />
        <meta name="author" content="Ankit Kachhawa" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={blog.title} />
        <meta property="og:site_name" content="Ankit Kachhawa - Financial Services" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Article specific tags */}
        <meta property="article:published_time" content={new Date().toISOString()} />
        <meta property="article:author" content="Ankit Kachhawa" />
        <meta property="article:section" content={blog.tag} />
        <meta property="article:tag" content={blog.tag} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iAnkitKachhawa" />
        <meta name="twitter:creator" content="@iAnkitKachhawa" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content={blog.title} />
        
        {/* Additional meta tags for better social sharing */}
        <meta name="theme-color" content="#3498db" />
        
        {/* WhatsApp specific optimizations */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      
      <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
        {/* Optimized image with proper alt text */}
        {blog.image && (
          <div style={{ marginBottom: 24 }}>
            <img
              src={blog.image}
              alt={blog.title}
              width="800"
              height="533"
              style={{ width: "100%", borderRadius: 12, maxHeight: 400, objectFit: "cover" }}
              loading="eager"
            />
          </div>
        )}

        <h1 style={{ fontWeight: 900, fontSize: 36, marginBottom: 24, lineHeight: 1.2 }}>{blog.title}</h1>
        
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
              href={`https://wa.me/?text=${encodeURIComponent(`${blog.title}\n\n${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button"
              style={{
                backgroundColor: "#25d366",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button"
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}&via=iAnkitKachhawa`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button"
              style={{
                backgroundColor: "#1da1f2",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: blog.title,
                    text: description,
                    url: currentUrl,
                  });
                } else {
                  navigator.clipboard.writeText(currentUrl);
                  alert('Link copied to clipboard!');
                }
              }}
              style={{
                backgroundColor: "#6b7280",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.3s ease"
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .share-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
};

export default BlogDetail;