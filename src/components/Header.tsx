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
          <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iAnkitKachhawa',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919510074375', // Replace with actual number
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
          <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
      ),
    },
    {
      name: 'Call',
      url: 'tel:+919510074375',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
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
                className="group bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                aria-label={social.name}
              >
                <div className="text-white group-hover:text-white/90 transition-colors duration-300 flex items-center justify-center">
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
