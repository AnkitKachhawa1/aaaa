import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LineChart, FileText, Newspaper } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Add your effect logic here if needed
  }, [location]);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            <NavLink
              to="/mutualfund"
              className={({ isActive }) =>
                `flex items-center py-4 px-2 text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
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
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <FileText size={18} className="mr-2" />
              <span>GST Services</span>
            </NavLink>
            <NavLink
              to="/updates"
              className={({ isActive }) =>
                `flex items-center py-4 px-2 text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Newspaper size={18} className="mr-2" />
              <span>Updates</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
