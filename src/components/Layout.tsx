import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import SEO from './SEO';

const Layout: React.FC = () => {
  const location = useLocation();
  const isGSTPage = location.pathname === '/gst';

  const pageTitle = isGSTPage ? 'GST Services' : 'Mutual Fund Services';
  const pageDescription = isGSTPage 
    ? 'Professional GST filing and consultation services for businesses of all sizes.'
    : 'Expert mutual fund advisory and investment management services for individuals and organizations.';
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        image={isGSTPage 
          ? "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg"
          : "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
        }
      />
      <Header />
      <Navigation />
      <main className="flex-grow container-custom py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;