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
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your-profile',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/your-number',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      )
    },
    {
      name: 'Snapchat',
      url: 'https://snapchat.com/add/your-username',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm92.288 370.88c-1.6 5.44-13.248 5.44-19.776 5.44-3.36 0-6.464-.16-9.408-.384-15.264 25.568-51.488 39.36-62.4 42.88v-10.944c5.44-1.76 33.792-11.456 48.544-35.84-18.464-2.08-36.704-6.528-52.064-13.824-18.336 8.608-40.448 12.832-63.84 13.824 2.592 5.376 7.456 14.496 7.552 20.416 0 1.568-1.536 3.04-4.576 4.416-3.136 1.44-7.52 2.176-13.056 2.176-8.832 0-19.424-2.208-23.2-6.336-1.632-1.728-1.472-3.36-.992-4.544.8-1.984 3.296-2.88 5.248-3.68 2.56-1.088 5.568-2.368 5.568-5.568 0-6.336-17.504-9.408-31.936-20.384-15.744-12.096-20.928-23.52-21.12-28.16-.48-12.8 17.664-13.12 19.68-13.12.608 0 1.216.032 1.824.064 1.984.096 3.936.192 5.728-.576 2.112-.896 3.488-2.656 4.704-4.256 1.376-1.824 2.56-3.52 4.608-4.352 1.664-.672 3.52-.704 5.344-.736 2.208-.032 4.48-.064 6.88-.64 8.992-2.176 12.96-10.816 15.648-17.184l.288-.64c1.472-3.392 2.848-6.592 4.896-8.832 3.52-3.904 8.416-5.824 15.68-5.824 5.024 0 10.304.896 15.648 2.656 7.936 2.624 15.52 4.032 22.528 4.192 13.984.288 28.576-3.168 39.52-9.376 1.184-.672 2.24-1.472 3.232-2.208 1.472-1.056 2.848-2.048 4.096-2.72 2.528-1.344 4.864-1.728 7.52-1.152 3.008.64 5.12 2.368 6.688 4.032 1.632 1.728 3.2 3.2 5.472 3.2.064 0 .128 0 .224-.032 1.184-.032 2.336-.032 3.488-.032 3.2 0 16.8 0 18.336 10.496.576 3.936-2.048 8.832-7.648 14.08-9.696 8.928-26.56 13.792-33.728 15.648 5.504 9.184 9.984 23.808 6.528 36.064z"/>
        </svg>
      )
    },
    {
      name: 'Call',
      url: 'tel:+91-your-number',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    }
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
              <div className="flex-shrink-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 6.709l-11.025 11.025-5.54-5.54 1.414-1.414 4.126 4.126L18.87 5.295z" />
                  </svg>
                </div>
              </div>
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
