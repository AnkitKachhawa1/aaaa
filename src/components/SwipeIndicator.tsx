import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwipeIndicator: React.FC = () => {
  const location = useLocation();
  
  const routes = [
    { path: '/mutualfund', name: 'Mutual Fund' },
    { path: '/gst', name: 'GST' },
    { path: '/updates', name: 'Updates' }
  ];
  
  const currentIndex = routes.findIndex(route => route.path === location.pathname);
  const canSwipeLeft = currentIndex > 0;
  const canSwipeRight = currentIndex < routes.length - 1;

  if (currentIndex === -1) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 md:hidden">
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 text-sm">
          {canSwipeLeft && (
            <div className="flex items-center gap-1 text-gray-500">
              <ChevronLeft size={16} />
              <span className="text-xs">{routes[currentIndex - 1].name}</span>
            </div>
          )}
          
          <div className="flex gap-1">
            {routes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {canSwipeRight && (
            <div className="flex items-center gap-1 text-gray-500">
              <span className="text-xs">{routes[currentIndex + 1].name}</span>
              <ChevronRight size={16} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwipeIndicator;