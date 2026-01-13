export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Badge/Tag */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pink-500/10 border border-pink-500/30 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm text-gray-700 dark:text-white">Disponível para projetos</span>
        </div>

        {/* Título Principal */}
        <h1 className="mb-4 sm:mb-6">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-up">
            Olá, eu sou
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animated-gradient-text">
            Denilson Faria
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 animate-slide-up-delay-1 px-4">
          Desenvolvedor Front-end
        </p>
        
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-slide-up-delay-2 px-4 leading-relaxed">
          Desenvolvo interfaces modernas e performáticas com React, com foco em experiência do usuário, acessibilidade e código bem estruturado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up-delay-3 px-4">
          <button 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Ver Projetos
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-pink-500/50 backdrop-blur-sm rounded-lg font-semibold text-gray-900 dark:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Entrar em Contato
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Rolar para baixo"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-pink-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-400 rounded-full animate-scroll" />
        </div>
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay-1 {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }

        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.6s both;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animated-gradient-text {
          background: linear-gradient(
            90deg,
            #ec4899,
            #a855f7,
            #3b82f6,
            #ec4899,
            #a855f7,
            #3b82f6
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
}