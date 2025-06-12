import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SwipeNavigationOptions {
  threshold?: number;
  preventDefaultTouchmoveEvent?: boolean;
}

export const useSwipeNavigation = (options: SwipeNavigationOptions = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { threshold = 50, preventDefaultTouchmoveEvent = false } = options;

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const routes = ['/mutualfund', '/gst', '/updates'];
    const currentIndex = routes.indexOf(location.pathname);

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (preventDefaultTouchmoveEvent) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          // Swipe right - go to previous section
          if (currentIndex > 0) {
            navigate(routes[currentIndex - 1]);
          }
        } else {
          // Swipe left - go to next section
          if (currentIndex < routes.length - 1) {
            navigate(routes[currentIndex + 1]);
          }
        }
      }
    };

    // Add event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: !preventDefaultTouchmoveEvent });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname, navigate, threshold, preventDefaultTouchmoveEvent]);
};