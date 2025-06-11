import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import SEO from './SEO';

const Layout: React.FC = () => {
  const location = useLocation();
  const isGSTPage = location.pathname === '/gst';
  const isUpdatesPage = location.pathname === '/updates';
  const isMutualFundPage = location.pathname === '/mutualfund';

  const getPageTitle = () => {
    if (isGSTPage) return 'GST Services in Deesa, Banaskantha';
    if (isUpdatesPage) return 'Financial Updates & Articles';
    return 'Mutual Fund Services in Deesa, Banaskantha';
  };

  const getPageDescription = () => {
    if (isGSTPage) return 'Professional GST filing, registration, and consultation services in Deesa, Banaskantha, Gujarat. Expert GST compliance solutions for businesses with competitive rates and timely service.';
    if (isUpdatesPage) return 'Latest updates, articles, and insights on financial services, mutual funds, GST regulations, and investment strategies from Ankit Kachhawa, financial expert in Deesa, Gujarat.';
    return 'Expert mutual fund advisory, SIP planning, and investment management services in Deesa, Banaskantha, Gujarat. Professional financial guidance for wealth creation and goal-based investing.';
  };

  const getPageKeywords = () => {
    if (isGSTPage) return 'GST services Deesa, GST filing Banaskantha, GST registration Gujarat, GST consultant Deesa, GST return filing Banaskantha, tax compliance Gujarat, GST expert Deesa, business registration Gujarat';
    if (isUpdatesPage) return 'financial news Gujarat, investment updates Deesa, mutual fund news Banaskantha, GST updates Gujarat, financial articles Deesa, investment insights Gujarat';
    return 'Mutual Fund Deesa, SIP investment Banaskantha, mutual fund advisor Gujarat, investment planning Deesa, SIP consultant Banaskantha, wealth management Gujarat, financial planning Deesa';
  };

  const getPageImage = () => {
    if (isGSTPage) return "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg";
    if (isUpdatesPage) return "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg";
    return "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO
        title={getPageTitle()}
        description={getPageDescription()}
        keywords={getPageKeywords()}
        image={getPageImage()}
        path={location.pathname}
      />
      <Header />
      <Navigation />

      {/* Add padding to push content below fixed header + nav */}
      <div className="pt-[200px] flex-grow">
        <main className="container-custom py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;