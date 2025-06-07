import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;
  const defaultImage = 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title} | Financial Services</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | Financial Services`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={`${title} | Financial Services`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Canonical link */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;