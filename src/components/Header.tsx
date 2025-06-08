import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-md"
      style={{ backgroundImage: 'url(\"/header-bg.jpg\")' }}
    >
      <div className="backdrop-brightness-95 backdrop-blur-sm py-2 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-1">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Verified Checkmark */}
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold">✓</span>
          </div>
        </div>
        {/* Name and Tagline */}
        <div className="text-center text-white drop-shadow-sm mb-0">
          <Link to="/" className="inline-block">
            <h1 className="text-lg font-bold leading-tight">ANKIT KACHHAWA</h1>
            <p className="text-xs text-white/80 leading-tight">Professional Financial Solutions</p>
          </Link>
        </div>
        {/* Navigation - right below name, minimal margin */}
        <nav className="flex gap-3 mt-1">
          <Link to="/mutualfund" className="text-white text-sm font-semibold hover:underline">Mutual Fund</Link>
          <Link to="/gst" className="text-white text-sm font-semibold hover:underline">GST</Link>
          <Link to="/updates" className="text-white text-sm font-semibold hover:underline">Updates</Link>
          <Link to="/blogs/new" className="text-white text-sm font-semibold hover:underline">New Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;