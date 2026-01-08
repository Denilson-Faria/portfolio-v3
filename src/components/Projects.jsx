import { useState } from 'react';
import './Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "API Real • 1000+ Filmes • Infinite Scroll",
    fullDescription: "Clone completo da Netflix com React e TMDB API. Interface premium com carrosséis infinitos, modal de detalhes com trailers do YouTube, sistema de favoritos, busca funcional e loading skeletons. Demonstra domínio de hooks avançados, Context API, integração com APIs REST e responsividade total.",
     image: "/img/netflix.jpg",
    accentColor: "red",
    technologies: ["React", "Tailwind CSS", "TMDB API", "React Router"],
    demoLink: "https://netflix-clone-df.vercel.app/",
    githubLink: "https://github.com/Denilson-Faria/netflix-clone",
    badge: "🔥 Destaque"
  },
  {
    id: 2,
    title: "iPhone17",
    description: "Animações • Scroll Reveal • Interativo",
    fullDescription: "Landing page premium desenvolvida com React e Tailwind CSS. Interface moderna que equilibra minimalismo e sofisticação, com animações scroll reveal, seletor de cores interativo com troca de imagens, responsividade avançada e experiência totalmente fluida em qualquer dispositivo.",
    image: "/img/iphone.png",
    accentColor: "cyan",
    technologies: ["React", "Tailwind", "JavaScript", "Scroll Reveal"],
    demoLink: "https://iphone17landing.vercel.app/",
    githubLink: "https://github.com/Denilson-Faria/iPhone17Landing",
    badge: "✨ Premium"
  },
  {
    id: 3,
    title: "ContabilEasy",
    description: "Dashboard • Gráficos • CRUD Completo",
    fullDescription: "Dashboard financeiro completo com visualização de dados em tempo real. Sistema CRUD completo, gráficos interativos, gestão de receitas e despesas, categorização inteligente e interface intuitiva. Solução que transforma números em insights visuais através de uma UX limpa e profissional.",
    image: "/img/contabileasy.png",
    accentColor: "purple",
    technologies: ["HTML5", "CSS3", "JavaScript", "Charts.js"],
    demoLink: "https://contabileasy.vercel.app/",
    githubLink: "https://github.com/Denilson-Faria/contabileasy"
  },
  {
    id: 4,
    title: "DevMaster",
    description: "Landing • Conversão • Responsivo",
    fullDescription: "Landing page institucional otimizada para conversão. Hierarquia visual estratégica que guia o usuário pela proposta de valor, com animações sutis que reforçam a mensagem sem comprometer a performance. Design moderno focado em geração de leads.",
    image: "/img/devmaster.png",
    accentColor: "indigo",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    demoLink: "https://devmasterr.vercel.app/",
    githubLink: "https://github.com/Denilson-Faria/devmaster"
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Refs para animações
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  const getAccentClasses = (color) => {
    const colors = {
      red: {
        border: "border-red-300 dark:border-red-500/30",
        hoverBorder: "hover:border-red-400 dark:hover:border-red-400/60",
        shadow: "hover:shadow-red-500/30 dark:hover:shadow-red-500/20",
        iconBorder: "border-red-300 dark:border-red-500/30",
        badge: "bg-red-500/10 border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400"
      },
      purple: {
        border: "border-purple-300 dark:border-purple-500/30",
        hoverBorder: "hover:border-purple-400 dark:hover:border-purple-400/60",
        shadow: "hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20",
        iconBorder: "border-purple-300 dark:border-purple-500/30",
        badge: "bg-purple-500/10 border-purple-300 dark:border-purple-500/30 text-purple-600 dark:text-purple-400"
      },
      cyan: {
        border: "border-cyan-300 dark:border-cyan-500/30",
        hoverBorder: "hover:border-cyan-400 dark:hover:border-cyan-400/60",
        shadow: "hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/20",
        iconBorder: "border-cyan-300 dark:border-cyan-500/30",
        badge: "bg-cyan-500/10 border-cyan-300 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400"
      },
      indigo: {
        border: "border-indigo-300 dark:border-indigo-500/30",
        hoverBorder: "hover:border-indigo-400 dark:hover:border-indigo-400/60",
        shadow: "hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20",
        iconBorder: "border-indigo-300 dark:border-indigo-500/30",
        badge: "bg-indigo-500/10 border-indigo-300 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400"
      }
    };
    return colors[color];
  };

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header com animações */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="scroll-fade-up text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Meus <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p 
            ref={descRef}
            className="scroll-fade-up delay-200 text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Seleção de projetos onde aplico boas práticas de front-end, foco em experiência do usuário e atenção aos detalhes
          </p>
        </div>

        {/* Projects Grid com animações individuais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => {
            const accent = getAccentClasses(project.accentColor);
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                accent={accent}
                index={index}
              />
            );
          })}
        </div>

        {/* Botão Ver Todos com animação */}
        {projectsData.length > 3 && (
          <div className="text-center">
            <button
              ref={buttonRef}
              onClick={toggleShowAll}
              className="scroll-fade-up delay-500 px-8 py-4 backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-xl font-semibold text-gray-900 dark:text-white hover:from-purple-500/30 hover:to-cyan-500/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
            >
              {showAll ? 'Mostrar menos' : 'Ver todos os projetos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Componente separado para cada card com sua própria animação
function ProjectCard({ project, accent, index }) {
  const cardRef = useScrollAnimation({ threshold: 0.1 });
  
  // Calcula delay baseado no índice (100ms * índice)
  const delayClass = `delay-${(index + 3) * 100}`;

  return (
    <div 
      ref={cardRef}
      className={`flip-card h-[480px] scroll-fade-up ${delayClass}`}
    >
      <div className="flip-card-inner">
        {/* Frente do Card */}
        <div className={`flip-card-front backdrop-blur-xl bg-white/80 dark:bg-transparent border ${accent.border} ${accent.hoverBorder} ${accent.shadow} hover:shadow-2xl shadow-sm dark:shadow-none rounded-2xl overflow-hidden transition-all duration-300`}>
          {/* Imagem */}
          <div className="relative h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Badge */}
            {project.badge && (
              <span className={`absolute top-4 right-4 px-3 py-1 ${accent.badge} backdrop-blur-md border text-xs rounded-full font-semibold`}>
                {project.badge}
              </span>
            )}
          </div>

          {/* Conteúdo */}
          <div className="p-6 flex flex-col justify-between" style={{ minHeight: 'calc(100% - 14rem)' }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm mt-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Hover para detalhes</span>
            </div>
          </div>
        </div>

        {/* Verso do Card */}
        <div className={`flip-card-back backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border ${accent.border} p-6 flex flex-col justify-between rounded-2xl shadow-lg`}>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Sobre o Projeto
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-500 mb-2 uppercase tracking-wide">
                Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 backdrop-blur-sm bg-white/50 dark:bg-transparent border ${accent.iconBorder} text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:border-opacity-50 transition-all duration-300`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-gray-900 dark:text-white rounded-lg font-semibold text-sm hover:from-purple-500/30 hover:to-cyan-500/30 hover:border-purple-400/50 hover:scale-[1.02] transition-all duration-300 text-center"
            >
              Ver Demo
            </a>
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 backdrop-blur-sm border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}