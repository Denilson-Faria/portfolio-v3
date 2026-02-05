import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
 
    const hasShownLoading = sessionStorage.getItem('hasShownLoading');
    
    if (hasShownLoading) {
      setIsLoading(false);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
    
        return prev + Math.random() * 15;
      });
    }, 150);

    const checkProgress = setInterval(() => {
      if (progress >= 100) {
        clearInterval(checkProgress);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('hasShownLoading', 'true');
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkProgress);
    };
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="loading-content">
    
        <div className="loading-logo">
          <h1 className="loading-title">
            Denilson<span className="loading-dot">.</span>
          </h1>
          <div className="loading-subtitle">
            <span className="loading-bracket">[</span>
            <span className="loading-role">desenvolvedor</span>
            <span className="loading-bracket">]</span>
          </div>
        </div>

        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="loading-percentage">
            {Math.floor(Math.min(progress, 100))}%
          </div>
        </div>

        <div className="loading-messages">
          {progress < 30 && <p>☕ Preparando café...</p>}
          {progress >= 30 && progress < 60 && <p>💻 Compilando código...</p>}
          {progress >= 60 && progress < 90 && <p>🎨 Aplicando neobrutalism...</p>}
          {progress >= 90 && <p>✨ Quase lá...</p>}
        </div>
      </div>

      <div className="loading-decoration loading-square-1"></div>
      <div className="loading-decoration loading-square-2"></div>
      <div className="loading-decoration loading-square-3"></div>
    </div>
  );
}