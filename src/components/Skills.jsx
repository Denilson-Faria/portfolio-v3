import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';

export default function Skills() {
  // Refs para animações
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  
  const reactRef = useScrollAnimation();
  const jsRef = useScrollAnimation();
  const htmlRef = useScrollAnimation();
  const cssRef = useScrollAnimation();
  const tailwindRef = useScrollAnimation();
  const tsRef = useScrollAnimation();
  const nextRef = useScrollAnimation();
  const legendRef = useScrollAnimation();

  return (
    <section id="skills" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="scroll-fade-up text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Minhas <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p 
            ref={descRef}
            className="scroll-fade-up delay-200 text-gray-600 dark:text-gray-400 text-lg"
          >
            Tecnologias que domino
          </p>
        </div>

        {/* Bento Grid - Layout Assimétrico */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          
          {/* React - Grande (2x2) */}
          <div 
            ref={reactRef}
            className="scroll-fade-up delay-300 col-span-2 row-span-2 p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-pink-300 dark:border-pink-500/20 hover:border-pink-400 dark:hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-sm dark:shadow-none hover:shadow-pink-500/30 dark:hover:shadow-pink-500/20 flex flex-col items-center justify-center gap-4 group"
          >
            <SiReact className="text-7xl text-pink-500/70 dark:text-pink-400/60 group-hover:text-pink-500 dark:group-hover:text-pink-400 group-hover:rotate-180 group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-700" />
            <span className="text-lg font-bold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">React</span>
            <span className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 text-center transition-colors duration-300">Principal framework</span>
          </div>

          {/* JavaScript - Médio (2x1) */}
          <div 
            ref={jsRef}
            className="scroll-fade-up delay-400 col-span-2 p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-purple-300 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-sm dark:shadow-none hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 flex flex-col items-center justify-center gap-3 group"
          >
            <SiJavascript className="text-5xl text-purple-500/70 dark:text-purple-400/60 group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:animate-bounce group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">JavaScript</span>
          </div>

          {/* HTML - Pequeno (1x1) */}
          <div 
            ref={htmlRef}
            className="scroll-fade-up delay-500 col-span-1 p-4 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-indigo-300 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg shadow-sm dark:shadow-none hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20 flex flex-col items-center justify-center gap-2 group"
          >
            <SiHtml5 className="text-4xl text-indigo-500/70 dark:text-indigo-400/60 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:animate-pulse group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" />
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">HTML5</span>
          </div>

          {/* CSS - Pequeno (1x1) */}
          <div 
            ref={cssRef}
            className="scroll-fade-up delay-600 col-span-1 p-4 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-indigo-300 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg shadow-sm dark:shadow-none hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20 flex flex-col items-center justify-center gap-2 group"
          >
            <SiCss3 className="text-4xl text-indigo-500/70 dark:text-indigo-400/60 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:animate-pulse group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" />
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">CSS3</span>
          </div>

          {/* Tailwind - Médio (2x1) */}
          <div 
            ref={tailwindRef}
            className="scroll-fade-up delay-700 col-span-2 p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-pink-300 dark:border-pink-500/20 hover:border-pink-400 dark:hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-sm dark:shadow-none hover:shadow-pink-500/30 dark:hover:shadow-pink-500/20 flex flex-col items-center justify-center gap-3 group"
          >
            <SiTailwindcss className="text-5xl text-pink-500/70 dark:text-pink-400/60 group-hover:text-pink-500 dark:group-hover:text-pink-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Tailwind CSS</span>
          </div>

          {/* TypeScript - Pequeno (1x1) */}
          <div 
            ref={tsRef}
            className="scroll-fade-up delay-500 col-span-1 p-4 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-indigo-300 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg shadow-sm dark:shadow-none hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20 flex flex-col items-center justify-center gap-2 group"
          >
            <SiTypescript className="text-4xl text-indigo-500/70 dark:text-indigo-400/60 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:-rotate-12 group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" />
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">TypeScript</span>
          </div>

          {/* Next.js - Grande (3x1) - Em aprendizado */}
          <div 
            ref={nextRef}
            className="scroll-fade-up delay-600 col-span-3 p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-dashed border-purple-300 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl shadow-sm dark:shadow-none hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 flex items-center justify-center gap-4 group"
          >
            <SiNextdotjs className="text-5xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">Next.js</span>
              <span className="text-xs text-purple-600 dark:text-purple-400/80 group-hover:text-purple-700 dark:group-hover:text-purple-400 font-medium flex items-center gap-1 transition-colors duration-300">
                Em aprendizado 
                <span className="inline-block group-hover:animate-bounce">⚡</span>
              </span>
            </div>
          </div>
        </div>

        {/* Legenda */}
        <div 
          ref={legendRef}
          className="scroll-fade-up delay-700 flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2 backdrop-blur-sm bg-white/60 dark:bg-transparent px-4 py-2 rounded-full border border-pink-300 dark:border-pink-500/20">
            <div className="w-3 h-3 rounded-full bg-pink-500 dark:bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
            <span>Expertise</span>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-sm bg-white/60 dark:bg-transparent px-4 py-2 rounded-full border border-purple-300 dark:border-purple-500/20">
            <div className="w-3 h-3 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span>Aprendendo</span>
          </div>
        </div>
      </div>
    </section>
  );
}