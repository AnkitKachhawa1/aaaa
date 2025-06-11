import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleAnalytics: React.FC = () => {
  // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // You need to get this from Google Analytics

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;