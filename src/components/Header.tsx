import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-md"
      style={{ backgroundImage: 'url("/header-bg.jpg")' }}
    >
      <div className="backdrop-brightness-95 backdrop-blur-sm h-16 flex items-center px-6">
        {/* Profile Pic, Name, and Description - all in a row, left-aligned */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
          <Link to="/" className="flex flex-col justify-center">
            <span className="text-base font-bold text-white leading-tight">ANKIT KACHHAWA</span>
            <span className="text-xs text-white/80 leading-tight">Professional Financial Solutions</span>
          </Link>
        </div>
        {/* Future nav/buttons can go here */}
      </div>
    </header>
  );
};

export default Header;