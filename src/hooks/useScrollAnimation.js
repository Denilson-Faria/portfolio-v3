// hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      console.log('❌ Elemento não encontrado');
      return;
    }

    console.log('✅ Observando elemento:', element);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('👀 Elemento visível?', entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            console.log('✨ Classe animate-in adicionada');
          } else if (options.repeat) {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return elementRef;
}