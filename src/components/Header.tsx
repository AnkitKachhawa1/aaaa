import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-md"
      style={{ backgroundImage: 'url("/header-bg.jpg")', height: '180px' }}
    >
      <div className="backdrop-brightness-95 backdrop-blur-sm h-full flex items-center">
        {/* Profile Image with some left margin (not extreme left) */}
        <div className="ml-4 mr-4 sm:ml-10 sm:mr-8">
          <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Name and Tagline - center/right shifted */}
        <div className="flex-1 flex flex-col items-start justify-center pl-2 sm:pl-8">
          <Link to="/" className="block w-full">
            <h1 className="text-lg xs:text-xl sm:text-4xl font-bold text-white mb-1 sm:mb-2 whitespace-nowrap">
              ANKIT KACHHAWA
            </h1>
            <p className="text-xs sm:text-lg text-white/80 whitespace-nowrap">
              Professional Financial Solutions
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;