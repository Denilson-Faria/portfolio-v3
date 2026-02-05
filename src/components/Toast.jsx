import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Toast({ message, icon = '✅', isVisible, onClose, duration = 3000 }) {
  const { theme } = useTheme();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className={`toast ${isVisible ? 'toast-visible' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="toast-content">
        <span className="toast-icon">{icon}</span>
        <span className="toast-message">{message}</span>
      </div>
      <button 
        onClick={onClose} 
        className="toast-close"
        aria-label="Fechar notificação"
      >
        ✕
      </button>
    </div>
  );
}