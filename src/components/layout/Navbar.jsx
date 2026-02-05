import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'formation', label: t('nav.formation') },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToElement(id);
      }, 100);
      return;
    }

    scrollToElement(id);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const currentTransform = document.body.style.transform;
    const currentScroll = currentTransform
      ? Math.abs(parseFloat(currentTransform.match(/-?([\d.]+)px/)?.[1] || 0))
      : window.scrollY;

    const targetPosition = rect.top + currentScroll;

    if (window.smoothScrollTo) {
      window.smoothScrollTo(targetPosition);
    } else {

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();

      if (window.smoothScrollTo) {
        window.smoothScrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white dark:bg-black border-4 border-black dark:border-white shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="text-display text-2xl font-black text-black dark:text-white hover:text-pink-500 transition-colors"
          >
            Denilson.
          </Link>

          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-mono text-xs uppercase font-bold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Controls - Theme + Language + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />


            <button
              onClick={toggleTheme}
              className="w-10 h-10 border-3 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center hover:bg-pink-500 transition-all"
              aria-label="Alternar tema"
            >
              <span className="text-xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border-3 border-black dark:border-white bg-white dark:bg-black font-bold text-xl"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-4 border-black dark:border-white p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full px-4 py-3 text-mono text-xs uppercase font-bold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}