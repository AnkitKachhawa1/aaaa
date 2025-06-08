import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    // ... other social icons (Twitter, WhatsApp, Snapchat, Call)
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-lg"
      style={{ backgroundImage: 'url("/header-bg.jpg")', height: '180px' }}
    >
      <div className="backdrop-brightness-95 backdrop-blur-sm h-full flex items-center px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-white/20">
            <img
              src="/profile.jpg"
              alt="Ankit Kachhawa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name, Tagline and Social Links */}
        <div className="flex-1 ml-4 sm:ml-8 flex flex-col justify-center min-w-0">
          <Link to="/" className="block mb-2 sm:mb-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <h1 className="text-lg xs:text-xl sm:text-4xl font-bold text-white truncate">
                ANKIT KACHHAWA
              </h1>
              {/* Verified Tick */}
              <img
                src="/verified-badge.png"
                alt="Verified"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="text-xs sm:text-lg text-white/90 font-medium">
              Professional Financial Solutions
            </p>
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={social.name}
              >
                <div className="text-white group-hover:text-blue-200 transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
