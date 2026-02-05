
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();
  const headerRef = useScrollAnimation();
  const photoRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const cards = [
    {
      icon: "💡",
      title: t('about.cards.challenges.title'),
      description: t('about.cards.challenges.description'),
      color: "pink",
      ref: card1Ref
    },
    {
      icon: "⚡",
      title: t('about.cards.knowledge.title'),
      description: t('about.cards.knowledge.description'),
      color: "purple",
      ref: card2Ref
    },
    {
      icon: "🎯",
      title: t('about.cards.focus.title'),
      description: t('about.cards.focus.description'),
      color: "cyan",
      ref: card3Ref
    }
  ];

  const colorClasses = {
    pink: {
      bg: 'bg-pink-500',
      border: 'border-pink-500',
      shadow: 'shadow-[6px_6px_0px_rgba(255,0,110,1)]'
    },
    purple: {
      bg: 'bg-purple-600',
      border: 'border-purple-600',
      shadow: 'shadow-[6px_6px_0px_rgba(131,56,236,1)]'
    },
    cyan: {
      bg: 'bg-cyan-400',
      border: 'border-cyan-400',
      shadow: 'shadow-[6px_6px_0px_rgba(0,245,255,1)]'
    }
  };

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className="scroll-fade-up text-center mb-16 md:mb-24"
        >
          <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white mb-4">
            {t('about.title')}{' '}
            <span className="relative inline-block">
              {t('about.titleHighlight')}
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-purple-600 -z-10 rotate-1"></div>
            </span>
          </h2>
          <p className="text-body text-lg md:text-xl text-gray-700 dark:text-gray-300">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content - Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Photo Card - Destaque */}
          <div 
            ref={photoRef}
            className="scroll-scale lg:col-span-1"
          >
            <div className="relative bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-6 shadow-[12px_12px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_rgba(255,255,255,1)] rotate-minus-2 hover:rotate-0 transition-all duration-300">
              {/* Photo */}
              <div className="relative border-3 border-black dark:border-white overflow-hidden mb-4">
                <img
                  src="/img/foto1.png"
                  alt="Denilson Faria"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Name Tag */}
              <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-mono text-sm font-bold uppercase">
                Denilson Faria
              </div>
              
              {/* Accent corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-pink-500 rotate-12 -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div 
            ref={textRef}
            className="scroll-fade-up delay-200 lg:col-span-2 space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]">
              <p className="text-body text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t('about.intro')}{' '}
                <span className="font-bold text-black dark:text-white bg-pink-500/20 px-1">
                  {t('about.introHighlight')}
                </span>
                {t('about.introContinue')}
              </p>

              <p className="text-body text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.secondParagraph')}
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => {
            const colors = colorClasses[card.color];
            const delays = ['delay-300', 'delay-400', 'delay-500'];
            const rotations = ['rotate-1', 'rotate-minus-1', 'rotate-2'];
            
            return (
              <div
                key={index}
                ref={card.ref}
                className={`scroll-fade-up ${delays[index]} ${rotations[index]} hover:rotate-0 transition-all duration-300`}
              >
                <div className={`bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 h-full`}>
                  {/* Icon */}
                  <div className="text-5xl mb-4">{card.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body text-gray-700 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] ${colors.border} opacity-50`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className="scroll-fade-up delay-600 text-center"
        >
          <a 
            href="/curriculo.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-3 border-black dark:border-white font-mono font-bold uppercase text-sm shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
          >
            {t('about.cta')} →
          </a>
        </div>
      </div>
    </section>
  );
}