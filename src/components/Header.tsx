import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.84h2.78L16.9 15.9h-2.14v7C18.34 21.13 22 17 22 12z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.8 1.69 4.9 4.9.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.9 4.92-1.26.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-3.24-.15-4.78-1.69-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.15-3.21 1.7-4.75 4.92-4.9C8.41 2.21 8.8 2.2 12 2.2zm0 3.64a6.16 6.16 0 1 0 6.16 6.16A6.17 6.17 0 0 0 12 5.84zm6.41-1.52a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27-4 23-17z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919999999999',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.207-.242-.58-.487-.501-.669-.511h-.57c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.094 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" />
          <path d="M20.52 3.48A11.906 11.906 0 0 0 12.005 0C5.375 0 0 5.375 0 12c0 2.116.553 4.193 1.601 6.025L0 24l6.17-1.575A11.915 11.915 0 0 0 12.004 24c6.626 0 12-5.374 12-12a11.906 11.906 0 0 0-3.48-8.52zM12.004 22c-1.913 0-3.79-.508-5.42-1.469l-.387-.23-3.654.934.975-3.483-.248-.4C2.65 15.296 2 13.666 2 12 2 6.486 6.49 2 12.004 2c3.181 0 6.174 1.237 8.433 3.487A11.867 11.867 0 0 1 22.005 12c0 5.514-4.49 10-10.001 10z" />
        </svg>
      ),
    },
    {
      name: 'Call',
      url: 'tel:+919999999999',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.87 19.87 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63 19.87 19.87 0 0 1 6 3.05 2 2 0 0 1 8 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L12 10a16 16 0 0 0 6 6l1.36-1.25a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-lg" style={{ backgroundImage: 'url("/header-bg.jpg")', height: '180px' }}>
      <div className="backdrop-brightness-95 backdrop-blur-sm h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-white/20">
            <img src="/profile.jpg" alt="Ankit Kachhawa" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 ml-4 sm:ml-8 flex flex-col justify-center min-w-0">
          <Link to="/" className="block mb-2 sm:mb-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <h1 className="text-lg xs:text-xl sm:text-4xl font-bold text-white truncate">ANKIT KACHHAWA</h1>
              <img src="/verified-badge.png" alt="Verified" className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-300 hover:scale-110" />
            </div>
            <p className="text-xs sm:text-lg text-white/90 font-medium">Professional Financial Solutions</p>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all"
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
