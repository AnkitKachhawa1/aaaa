import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-6 flex flex-col items-center">
        <div className="relative mb-3">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border-4 border-white shadow-lg">
            <Wallet size={60} className="text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-success text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold">✓</span>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Financial Services</h1>
            <p className="text-sm text-gray-500">Professional Financial Solutions</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;