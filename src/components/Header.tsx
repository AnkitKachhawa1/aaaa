import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 shadow-md">
      <div className="container-custom py-10 flex flex-col items-center text-white">
        <div className="relative mb-4">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold">✓</span>
          </div>
        </div>

        <div className="text-center">
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
