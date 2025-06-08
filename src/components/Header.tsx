import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.8 1.69 4.9 4.9.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.9 4.92-1.26.06-1.65.07-4.85.07s-3.59-.01-4.85-.07c-3.24-.15-4.78-1.69-4.93-4.92C2.21 15.6 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.91 3.97 2.37 7.2 2.22 8.46 2.16 8.85 2.15 12 2.15M12 0C8.7 0 8.28.01 7 .07 2.56.28.27 2.57.07 7 .01 8.29 0 8.71 0 12s.01 3.71.07 5c.2 4.42 2.49 6.72 6.93 6.93 1.28.06 1.71.07 5 .07s3.71-.01 5-.07c4.44-.21 6.73-2.5 6.93-6.93.06-1.29.07-1.71.07-5s-.01-3.71-.07-5c-.2-4.43-2.5-6.72-6.93-6.93C15.71.01 15.29 0 12 0z"/>
          <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.17 6.17 0 0 0 12 5.84zm0 10.17a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.204-4.92 4.917 0 .39.045.765.127 1.124C7.69 8.095 4.066 6.13 1.64 3.161c-.427.729-.666 1.577-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067C2.905 21.28 6.355 22 9.947 22c11.875 0 18.375-9.847 18.375-18.385 0-.28-.007-.561-.02-.84 1.26-.908 2.355-2.042 3.221-3.337z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919999999999', // Replace with actual number
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16.001 2.667C8.636 2.667 2.667 8.637 2.667 16c0 2.804.803 5.417 2.177 7.655L2 30l6.512-2.8a13.3 13.3 0 0 0 7.489 2.266c7.365 0 13.334-5.97 13.334-13.333S23.366 2.667 16.001 2.667zM16 26.667a10.6 10.6 0 0 1-5.74-1.665l-.417-.25-3.864 1.66.817-3.962-.271-.408a10.638 10.638 0 0 1-1.668-5.709c0-5.891 4.776-10.667 10.667-10.667S26.667 10.11 26.667 16 21.891 26.667 16 26.667zm5.248-8.386c-.295-.148-1.749-.862-2.02-.96-.271-.099-.47-.148-.668.147-.196.295-.767.96-.941 1.157-.173.197-.346.222-.64.074-.295-.148-1.246-.459-2.374-1.462-.878-.783-1.47-1.75-1.642-2.045-.173-.296-.019-.455.13-.602.134-.133.295-.346.442-.52.148-.174.197-.296.295-.493.099-.197.049-.37-.025-.519-.074-.148-.668-1.612-.916-2.214-.242-.58-.49-.5-.668-.51a2.25 2.25 0 0 0-.57-.007c-.197 0-.519.074-.79.37s-1.04 1.015-1.04 2.478 1.064 2.875 1.212 3.074c.148.197 2.096 3.202 5.08 4.49.71.306 1.262.488 1.694.624.712.227 1.36.195 1.87.118.571-.086 1.749-.714 1.996-1.402.247-.688.247-1.277.173-1.401-.074-.124-.271-.197-.566-.345z"/>
        </svg>
      ),
    },
    {
      name: 'Snapchat',
      url: 'https://snapchat.com/add/yourusername',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zM417.6 359.6c-7.5 4.3-24.7 13.3-39.8 13.3-7.6 0-14.1-1.8-19.8-3.4-6.2-1.8-11.4-3.2-16.2-3.2-3.5 0-6.3.7-8.6 2.3-4.4 3-6.5 8.2-8.4 12.6-2.8 6.7-5.4 13-15.3 13s-12.5-6.3-15.3-13c-1.9-4.4-4-9.6-8.4-12.6-2.3-1.6-5.1-2.3-8.6-2.3-4.8 0-10 1.4-16.2 3.2-5.7 1.6-12.2 3.4-19.8 3.4-15.1 0-32.3-9-39.8-13.3 3.5-2.4 5.8-6.5 5.8-11.1 0-7.4-6-13.4-13.4-13.4-4.5 0-8.5 2.2-11 5.6-14.5-19.7-23-43.8-23-69.7C94.6 162.1 168.5 88 256 88s161.4 74.1 161.4 167.4c0 25.9-8.5 50-23 69.7-2.5-3.4-6.5-5.6-11-5.6-7.4 0-13.4 6-13.4 13.4.1 4.6 2.4 8.7 5.9 11.1z"/>
        </svg>
      ),
    },
    {
      name: 'Call',
      url: 'tel:+919999999999',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.55.57 1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.55 1 1 0 0 1-.21 1.09l-2.34 2.15z"/>
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
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label={social.name}>
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
