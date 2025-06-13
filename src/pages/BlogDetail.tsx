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

  // Get the current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://ankitkachhawa.in/blogs/${id}`;
  
  // Extract plain text from HTML content for description
  const getPlainTextDescription = (htmlContent: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    return plainText.slice(0, 160) + (plainText.length > 160 ? '...' : '');
  };

  // Helper to check for Cloudinary URL
  const isCloudinary = blog.image && blog.image.includes("res.cloudinary.com");

  // Ensure image URL is absolute
  const getAbsoluteImageUrl = (imageUrl: string) => {
    if (!imageUrl) return "https://ankitkachhawa.in/meta.jpg";
    if (imageUrl.startsWith('http')) return imageUrl;
    return `https://ankitkachhawa.in${imageUrl}`;
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
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta name="theme-color" content="#3498db" />
        
        {/* WhatsApp specific optimizations */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      
      <div style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
        {/* Optimized image with proper alt text */}
        {blog.image && (
          <div style={{ marginBottom: 24 }}>
            {isCloudinary ? (
              <img
                src={blog.image}
                srcSet={`
                  ${blog.image.replace('/upload/', '/upload/f_auto,q_auto,w_400/')} 400w,
                  ${blog.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/')} 800w,
                  ${blog.image.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')} 1200w
                `}
                sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
                alt={blog.title}
                width="800"
                height="533"
                style={{ width: "100%", borderRadius: 12, maxHeight: 400, objectFit: "cover" }}
                loading="eager"
              />
            ) : (
              <img
                src={blog.image}
                alt={blog.title}
                width="800"
                height="533"
                style={{ width: "100%", borderRadius: 12, maxHeight: 400, objectFit: "cover" }}
                loading="eager"
              />
            )}
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
                <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"/>
                <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
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
                <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
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
                <path d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.607 11.607 0 0 1 3.149 4.684a4.029 4.029 0 0 0-.554 2.033c0 1.404.719 2.646 1.824 3.374a4.09 4.09 0 0 1-1.855-.512v.052a4.084 4.084 0 0 0 3.276 4.003c-.174.047-.356.072-.545.072-.133 0-.262-.013-.388-.036.263.824 1.022 1.425 1.921 1.44A8.272 8.272 0 0 1 2 19.287a11.616 11.616 0 0 0 6.29 1.845c7.547 0 11.675-6.155 11.675-11.485 0-.175-.004-.349-.012-.521A8.18 8.18 0 0 0 22 5.892Z"/>
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