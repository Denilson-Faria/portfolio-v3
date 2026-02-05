
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navItems = [
    { id: 'about', label: t('footer.sections.about') },
    { id: 'formation', label: t('footer.sections.formation') },
    { id: 'skills', label: t('footer.sections.skills') },
    { id: 'projects', label: t('footer.sections.projects') },
    { id: 'contact', label: t('footer.sections.contact') }
  ];

  return (
    <footer className="relative py-12 px-4 border-t-4 border-black dark:border-white bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo e Role */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop} 
              className="text-display text-3xl font-black text-black dark:text-white hover:text-pink-500 transition-colors"
            >
              Denilson.
            </button>
            <p className="text-mono text-xs uppercase text-gray-500 dark:text-gray-500 mt-2">
              {t('footer.role')}
            </p>
          </div>

          {/* Navegação */}
          <div className="text-center">
            <h3 className="text-mono text-xs uppercase font-bold text-black dark:text-white mb-4">
              {t('footer.navigation')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-mono text-xs uppercase font-bold text-black dark:text-white mb-4">
              {t('footer.social')}
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://www.linkedin.com/in/denilsonvbfaria" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://github.com/Denilson-Faria" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="GitHub"
              >
                💻
              </a>
              <a 
                href="mailto:denilsonvictor2002@gmail.com" 
                className="w-10 h-10 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-black dark:border-white pt-6 text-center">
          <p className="text-mono text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Denilson Faria. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}