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

  const getPageTitle = () => {
    if (isGSTPage) return 'GST Services';
    if (isUpdatesPage) return 'Updates & Articles';
    return 'Mutual Fund Services';
  };

  const getPageDescription = () => {
    if (isGSTPage) return 'Professional GST filing and consultation services for businesses of all sizes.';
    if (isUpdatesPage) return 'Latest updates, articles, and insights on financial services, mutual funds, and GST regulations.';
    return 'Expert mutual fund advisory and investment management services for individuals and organizations.';
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
        image={getPageImage()}
      />
      <Header />
      <Navigation />

      {/* Add padding to push content below fixed header + nav */}
      <div className="pt-[320px] flex-grow">
        <main className="container-custom py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;