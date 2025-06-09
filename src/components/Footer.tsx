import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { generateVCard } from '../utils/vcard';

const Footer: React.FC = () => {
  const handleDownloadContact = () => {
    generateVCard();
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="fade-in">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              We provide professional financial services including mutual fund advisory and GST filing services. 
              Our expert team ensures you get the best financial guidance and compliance support.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ankit.kachhawa.7" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/iAnkitKachhawa?t=w5B3bg89g852h7IBq7N7-g&s=09" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/Ankitkachhawa" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kachhawa-9964421a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="fade-in">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">ankitkachchhawa@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+91 95100 74375</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">1st Floor,Pitrukrupa Shopping Centre,Deesa,Gujarat-385535</span>
              </li>
              <li className="mt-4">
                <button 
                  onClick={handleDownloadContact}
                  className="flex items-center text-sm bg-primary/20 text-primary hover:bg-primary/30 rounded-full py-2 px-4 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  <span>Download Contact Card</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ANKIT KACHHAWA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
