import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.318 0-1.574.626-1.574 1.545v2.027h3.149l-.41 3.622h-2.739V24h5.373c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.8 1.69 4.9 4.9.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.9 4.92-1.26.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-3.24-.15-4.78-1.69-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.15-3.21 1.7-4.75 4.92-4.9C8.41 2.21 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3.01 7 .07 2.5.21.21 2.49.07 7 .01 8.3 0 8.7 0 12c0 3.3.01 3.7.07 5 .14 4.51 2.42 6.8 6.93 6.93 1.3.06 1.7.07 5 .07s3.7-.01 5-.07c4.51-.14 6.8-2.42 6.93-6.93.06-1.3.07-1.7.07-5s-.01-3.7-.07-5c-.14-4.51-2.42-6.8-6.93-6.93C15.7.01 15.3 0 12 0z"/>
          <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.17 6.17 0 0 0 12 5.84zm0 10.17a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.204-4.92 4.917 0 .39.042.765.12 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.085.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.548 2.209 9.142 0 14.307-7.721 13.995-14.646.962-.689 1.797-1.56 2.457-2.549z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919999999999', // Replace with actual number
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.001 2.667C8.636 2.667 2.667 8.637 2.667 16c0 2.804.803 5.417 2.177 7.655L2 30l6.512-2.8a13.3 13.3 0 0 0 7.489 2.266c7.365 0 13.334-5.97 13.334-13.333S23.366 2.667 16.001 2.667zM16 28.667c-2.361 0-4.634-.635-6.605-1.843l-.471-.284-3.867 1.662 1.028-4.017-.263-.413A11.31 11.31 0 0 1 4.001 16c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12zm6.418-8.646c-.322-.161-1.904-.937-2.199-1.045-.294-.107-.509-.161-.723.162s-.829 1.045-1.017 1.261c-.187.215-.374.242-.696.08-.322-.161-1.36-.501-2.592-1.6-.959-.857-1.607-1.915-1.797-2.237-.187-.322-.02-.497.141-.656.145-.144.322-.374.484-.561a2.19 2.19 0 0 0 .322-.539c.107-.215.054-.403-.027-.561-.08-.161-.723-1.746-.991-2.397-.26-.626-.524-.542-.723-.551l-.612-.01c-.215 0-.561.08-.855.403-.294.322-1.121 1.095-1.121 2.674s1.147 3.104 1.307 3.322c.161.215 2.258 3.441 5.468 4.69.764.33 1.36.526 1.827.673.767.243 1.465.209 2.015.127.616-.092 1.904-.779 2.174-1.531.269-.751.269-1.396.188-1.531-.08-.134-.294-.215-.616-.374z"/>
        </svg>
      ),
    },
    {
      name: 'Call',
      url: 'tel:+919999999999',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.55.57 1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.55 1 1 0 0 1-.21 1.11z"/>
        </svg>
      ),
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cover bg-center shadow-lg" style={{ backgroundImage: 'url("/header-bg.jpg")', height: '180px' }}>
      <div className="backdrop-brightness-95 backdrop-blur-sm h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-white/20">
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

          <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all">
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
