import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
        
          const rect = element.getBoundingClientRect();
   
          const currentTransform = document.body.style.transform;
          const currentScroll = currentTransform 
            ? Math.abs(parseFloat(currentTransform.match(/-?([\d.]+)px/)?.[1] || 0))
            : window.scrollY;
          
          const targetPosition = rect.top + currentScroll;

          if (window.smoothScrollTo) {
            window.smoothScrollTo(targetPosition);
          } else {
        
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
    
      if (window.smoothScrollTo) {
        window.smoothScrollTo(0, true); 
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return null;
}