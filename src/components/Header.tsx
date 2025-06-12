import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ankit.kachhawa.7',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/Ankitkachhawa',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 1 1 1.406 1.417 1 1 0 0 1-1.406-1.417ZM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iAnkitKachhawa',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.61.104.897A11.607 11.607 0 0 1 3.149 4.684a4.029 4.029 0 0 0-.554 2.033c0 1.404.719 2.646 1.824 3.374a4.09 4.09 0 0 1-1.855-.512v.052a4.084 4.084 0 0 0 3.276 4.003c-.174.047-.356.072-.545.072-.133 0-.262-.013-.388-.036.263.824 1.022 1.425 1.921 1.44A8.272 8.272 0 0 1 2 19.287a11.616 11.616 0 0 0 6.29 1.845c7.547 0 11.675-6.155 11.675-11.485 0-.175-.004-.349-.012-.521A8.18 8.18 0 0 0 22 5.892Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919510074375',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.019-1.375l-3.37.941a1 1 0 0 1-1.23-1.23l.942-3.37A9.96 9.96 0 0 1 2 12Z" clipRule="evenodd"/>
          <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.032-.002-.05-.002a3.728 3.728 0 0 1-1.852-1.01 3.616 3.616 0 0 1-1.01-1.852c0-.018.001-.037.001-.05 0-.016.025-.04.045-.057.154-.136.669-.577.886-.723a.56.56 0 0 0 .291-.49.973.973 0 0 0-.075-.34c-.094-.259-.812-1.718-.83-1.756a.625.625 0 0 0-.561-.355c-.135 0-.273.013-.41.038-.462.085-.879.345-1.19.742-.388.484-.58 1.076-.54 1.679.042.603.29 1.199.695 1.671 1.009 1.209 2.467 2.044 4.027 2.228.149.017.297.026.441.026.568 0 1.115-.193 1.565-.54.397-.311.657-.728.742-1.19a1.198 1.198 0 0 0 .038-.41.625.625 0 0 0-.355-.561Z"/>
        </svg>
      ),
    },
    {
      name: 'Call',
      url: 'tel:+919510074375',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.45l.613-.613a1.733 1.733 0 0 0 0-2.45L9.232 5.573a1.733 1.733 0 0 0-2.45 0l-.667.668c-1.29 1.29-1.29 3.39 0 4.68l6.964 6.964c1.29 1.29 3.39 1.29 4.68 0l.668-.667a1.733 1.733 0 0 0 0-2.45Z"/>
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

          <div className="flex items-center gap-1.5 sm:gap-2.5 mt-1 sm:mt-2 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                aria-label={social.name}
              >
                <span className="text-white group-hover:text-white/90 transition-colors duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
