
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();
  const badgeRef = useScrollAnimation();
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 grain-effect overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rotate-12 opacity-20 dark:opacity-10 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rotate-minus-2 opacity-20 dark:opacity-10 blur-2xl"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">

        <div 
          ref={badgeRef}
          className="scroll-fade-up flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black dark:bg-white border-3 border-black dark:border-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] rotate-minus-1">
            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-pulse"></div>
            <span className="text-white dark:text-black font-mono text-sm font-bold uppercase tracking-wider">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        <div className="text-center space-y-2 sm:space-y-3">
          <h1 
            ref={titleRef}
            className="scroll-fade-up delay-200 space-y-2 sm:space-y-3"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white text-body">
              {t('hero.greeting')}
            </span>
            <span className="block text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black dark:text-white relative inline-block">
              {t('hero.firstName')}
          
              <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 bg-pink-500 -z-10 rotate-minus-1"></div>
            </span>
            <span className="block text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
              {t('hero.lastName')}
            </span>
          </h1>
        </div>

        <div 
          ref={subtitleRef}
          className="scroll-fade-up delay-400 text-center"
        >
          <p className="text-mono text-xl sm:text-2xl md:text-xl text-black dark:text-white">
            {t('hero.role')}
          </p>
        </div>

        <div 
          ref={descRef}
          className="scroll-fade-up delay-500 max-w-2xl mx-auto"
        >
          <p className="text-body text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-4">
            {t('hero.description')}{' '}
            <span className="font-bold text-black dark:text-white">{t('hero.descriptionHighlight')}</span>
            {t('hero.descriptionContinue')}
          </p>
        </div>

        <div 
          ref={ctaRef}
          className="scroll-fade-up delay-600 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4 pt-4"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-3 border-black dark:border-white font-mono font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[0px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]"
          >
            {t('hero.cta.projects')}
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[0px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[6px] active:translate-y-[6px]"
          >
            {t('hero.cta.contact')}
          </button>
        </div>

        <div className="hidden lg:flex justify-center pt-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
            aria-label="Rolar para baixo"
          >
            <span className="text-mono text-xs uppercase tracking-wider">{t('hero.scroll')}</span>
            <div className="w-[2px] h-12 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute top-0 w-full h-6 bg-black dark:bg-white animate-scroll"></div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}