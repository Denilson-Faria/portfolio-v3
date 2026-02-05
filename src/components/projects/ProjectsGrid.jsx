import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';
import { getAllProjects } from '../../data/projects';

export default function ProjectsGrid() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  const allProjects = getAllProjects(language);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div 
            ref={titleRef}
            className="scroll-fade-up mb-6"
          >
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white text-center">
              {t('projects.sectionTitle')}{' '}
              <span className="relative inline-block">
                {t('projects.sectionTitleHighlight')}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-cyan-400 -z-10 rotate-1"></div>
              </span>
            </h2>
          </div>
          
          <div 
            ref={descRef}
            className="scroll-fade-up delay-200"
          >
            <p className="text-body text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('projects.sectionDescription')}
            </p>
          </div>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Ver Todos Button */}
        {allProjects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-block px-8 py-4 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold uppercase tracking-wider text-sm transition-all duration-200 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              {showAll ? t('projects.showLess') : t('projects.viewAll')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { t } = useTranslation();
  const cardRef = useScrollAnimation({ threshold: 0.1 });
  const delays = ['delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800'];
  const rotations = ['rotate-minus-1', 'rotate-1', 'rotate-minus-2', 'rotate-2', 'rotate-minus-1', 'rotate-1'];
  
  const accentColors = {
    red: {
      bg: 'bg-red-500',
      border: 'border-red-500',
      text: 'text-red-500',
      tagBg: 'bg-red-500'
    },
    purple: {
      bg: 'bg-purple-600',
      border: 'border-purple-600',
      text: 'text-purple-600',
      tagBg: 'bg-purple-600'
    },
    cyan: {
      bg: 'bg-cyan-400',
      border: 'border-cyan-400',
      text: 'text-cyan-400',
      tagBg: 'bg-cyan-400'
    },
    indigo: {
      bg: 'bg-indigo-600',
      border: 'border-indigo-600',
      text: 'text-indigo-600',
      tagBg: 'bg-indigo-600'
    }
  };

  const colors = accentColors[project.accentColor] || accentColors.purple;

  return (
    <Link
      to={`/project/${project.id}`}
      ref={cardRef}
      className={`scroll-fade-up ${delays[index % delays.length]} group block ${rotations[index % rotations.length]} hover:rotate-0 transition-all duration-300`}
    >
      <article className="relative h-full bg-white dark:bg-gray-900 border-4 border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] group-hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-200 overflow-hidden">
        
        {/* Image Container */}
        <div className="relative h-56 md:h-64 overflow-hidden border-b-4 border-black dark:border-white">
          <img 
            src={project.hero.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}></div>
          
          {/* Badge */}
          {project.badge && (
            <div className={`absolute top-4 right-4 px-3 py-1.5 ${colors.tagBg} text-white border-2 border-black dark:border-white font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,1)]`}>
              {project.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-display text-2xl md:text-3xl font-bold text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
            {project.title}
          </h3>
          
          {/* Short Description */}
          <p className="text-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">
            {project.shortDescription}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 text-xs font-mono font-bold uppercase bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase text-black dark:text-white group-hover:text-cyan-400 transition-colors">
            {t('projects.viewDetails')}
            <span className="inline-block transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] ${colors.border} opacity-50`}></div>
      </article>
    </Link>
  );
}