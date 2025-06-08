import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LineChart, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-[250px] left-0 w-full bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            <NavLink
              to="/mutualfund"
              className={({ isActive }) =>
                `flex items-center py-4 px-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'tab-active' : 'tab-inactive'
                }`
              }
            >
              <LineChart size={18} className="mr-2" />
              <span>Mutual Fund</span>
            </NavLink>

            <NavLink
              to="/gst"
              className={({ isActive }) =>
                `flex items-center py-4 px-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'tab-active' : 'tab-inactive'
                }`
              }
            >
              <FileText size={18} className="mr-2" />
              <span>GST Services</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
