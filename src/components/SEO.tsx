import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  path?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, keywords, path = '' }) => {
  const siteUrl = 'https://ankitkachhawa.in';
  const currentUrl = `${siteUrl}${path}`;
  const defaultImage = 'https://ankitkachhawa.in/meta.jpg';
  const fullTitle = `${title} | Ankit Kachhawa - Deesa, Banaskantha, Gujarat`;
  
  // Default keywords for local SEO
  const defaultKeywords = 'Ankit Kachhawa, GST services Deesa, Mutual Fund Deesa, GST filing Banaskantha, SIP investment Gujarat, Financial advisor Deesa, GST registration Gujarat, Mutual Fund SIP Banaskantha, Tax consultant Deesa, Investment planning Gujarat';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Ankit Kachhawa" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Ankit Kachhawa Financial Services" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content="@iAnkitKachhawa" />
      
      {/* Local SEO */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Deesa, Banaskantha, Gujarat" />
      <meta name="geo.position" content="24.2587;72.1781" />
      <meta name="ICBM" content="24.2587, 72.1781" />
      
      {/* Canonical link */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang for regional targeting */}
      <link rel="alternate" hrefLang="en-IN" href={currentUrl} />
      <link rel="alternate" hrefLang="gu-IN" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;