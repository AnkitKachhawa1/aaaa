import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      className="bg-cover bg-center shadow-md"
      style={{ backgroundImage: 'url("/header-bg.jpg")' }}
    >
      <div className="backdrop-brightness-95 backdrop-blur-sm py-10 flex flex-col items-center">
        {/* Profile Image with Shadow */}
        <div className="relative mb-4">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Verified Checkmark */}
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold">✓</span>
          </div>
        </div>

        {/* Name and Tagline */}
        <div className="text-center text-white drop-shadow-sm">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold">ANKIT KACHHAWA</h1>
            <p className="text-sm text-white/80">Professional Financial Solutions</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
