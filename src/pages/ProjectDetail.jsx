import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectById, getRelatedProjects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage(); 
  const project = getProjectById(id, language); 
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const relatedProjects = getRelatedProjects(id, language); 
  return (
    <div className="min-h-screen pt-24 grain-effect">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectTechStack project={project} />
      <ProjectChallenges project={project} />
      {project.gallery && <ProjectGallery project={project} />}
      <ProjectMetrics project={project} />
      <RelatedProjects projects={relatedProjects} />
    </div>
  );
}

function ProjectHero({ project }) {
  const { t } = useTranslation();
  const heroRef = useScrollAnimation();
  const titleRef = useScrollAnimation();
  const tagsRef = useScrollAnimation();
  const linksRef = useScrollAnimation();

  const accentColors = {
    red: 'from-red-600 to-pink-600',
    purple: 'from-purple-600 to-indigo-600',
    cyan: 'from-cyan-500 to-blue-500',
    indigo: 'from-indigo-600 to-purple-600'
  };

  const gradient = accentColors[project.accentColor] || accentColors.purple;

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <Link 
          to="/#projects"
          className="inline-flex items-center gap-2 mb-8 text-sm font-mono font-bold uppercase text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          {t('projects.backToProjects')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div>
            <div 
              ref={titleRef}
              className="scroll-fade-up mb-6"
            >
              {project.badge && (
                <div className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-mono text-xs font-bold uppercase mb-4">
                  {project.badge}
                </div>
              )}
              
              <h1 className="text-display text-5xl sm:text-6xl md:text-7xl font-black text-black dark:text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                {project.tagline}
              </p>
            </div>

            <div 
              ref={tagsRef}
              className="scroll-fade-up delay-200 flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-mono text-xs uppercase text-gray-500 dark:text-gray-500">{t('projects.year')}:</span>
                <span className="font-bold text-black dark:text-white">{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-mono text-xs uppercase text-gray-500 dark:text-gray-500">{t('projects.type')}:</span>
                <span className="font-bold text-black dark:text-white">{project.category}</span>
              </div>
            </div>

            <div 
              ref={linksRef}
              className="scroll-fade-up delay-300 flex flex-wrap gap-4"
            >
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black border-3 border-black dark:border-white font-mono font-bold uppercase text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                  {t('projects.liveDemo')} ↗
                </a>
              )}
              
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold uppercase text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                  {project.links.githubBackend ? t('projects.frontend') + ' →' : t('projects.sourceCode') + ' →'}
                </a>
              )}

              {project.links.githubBackend && (
                <a
                  href={project.links.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold uppercase text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                  {t('projects.backend')} →
                </a>
              )}
            </div>
          </div>

          <div 
            ref={heroRef}
            className="scroll-scale"
          >
            <div className="relative rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="border-4 border-black dark:border-white shadow-[12px_12px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_rgba(255,255,255,1)] overflow-hidden">
                <img 
                  src={project.hero.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${gradient} rotate-12 -z-10`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectOverview({ project }) {
  const { t } = useTranslation();
  const overviewRef = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div 
        ref={overviewRef}
        className="scroll-fade-up max-w-5xl mx-auto"
      >
        <h2 className="text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
          {t('projects.overview')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 border-3 border-black dark:border-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]">
            <h3 className="text-mono text-sm uppercase tracking-wider text-pink-500 mb-3">
              {t('projects.problem')}
            </h3>
            <p className="text-body text-gray-700 dark:text-gray-300">
              {project.overview.problem}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border-3 border-black dark:border-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]">
            <h3 className="text-mono text-sm uppercase tracking-wider text-purple-600 mb-3">
              {t('projects.solution')}
            </h3>
            <p className="text-body text-gray-700 dark:text-gray-300">
              {project.overview.solution}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border-3 border-black dark:border-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]">
            <h3 className="text-mono text-sm uppercase tracking-wider text-cyan-400 mb-3">
              {t('projects.result')}
            </h3>
            <p className="text-body text-gray-700 dark:text-gray-300">
              {project.overview.result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFeatures({ project }) {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="scroll-fade-up text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center"
        >
          {t('projects.features')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const cardRef = useScrollAnimation();
  const delays = ['delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700'];

  return (
    <div 
      ref={cardRef}
      className={`scroll-fade-up ${delays[index % delays.length]} bg-white dark:bg-gray-900 border-3 border-black dark:border-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200`}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-body text-gray-700 dark:text-gray-300 text-sm">
        {feature.description}
      </p>
    </div>
  );
}

function ProjectTechStack({ project }) {
  const { t } = useTranslation();
  const stackRef = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div 
        ref={stackRef}
        className="scroll-fade-up max-w-5xl mx-auto"
      >
        <h2 className="text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
          {t('projects.techStack')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 border-2 border-black dark:border-white p-4 text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]"
            >
              <p className="font-mono text-xs uppercase text-gray-500 dark:text-gray-500 mb-1">
                {tech.category}
              </p>
              <p className="font-bold text-black dark:text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectChallenges({ project }) {
  const { t } = useTranslation();
  const challengesRef = useScrollAnimation();

  if (!project.challenges || project.challenges.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={challengesRef}
          className="scroll-fade-up text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center"
        >
          {t('projects.challengesAndSolutions')}
        </h2>
        
        <div className="space-y-8">
          {project.challenges.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeCard({ challenge, index }) {
  const { t } = useTranslation();
  const cardRef = useScrollAnimation();
  const delays = ['delay-200', 'delay-400', 'delay-600'];

  return (
    <div 
      ref={cardRef}
      className={`scroll-slide-${index % 2 === 0 ? 'left' : 'right'} ${delays[index % delays.length]} bg-white dark:bg-gray-900 border-3 border-black dark:border-white p-6 md:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)]`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white font-mono font-bold text-xl flex items-center justify-center border-2 border-black dark:border-white">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">
            {challenge.title}
          </h3>
          <p className="text-body text-gray-700 dark:text-gray-300 mb-4">
            {challenge.description}
          </p>
          <div className="pl-4 border-l-4 border-cyan-400">
            <p className="text-mono text-xs uppercase tracking-wider text-cyan-400 mb-1">
              {t('projects.solutionLabel')}
            </p>
            <p className="text-body text-gray-700 dark:text-gray-300">
              {challenge.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project }) {
  const { t } = useTranslation();
  const galleryRef = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  return (
    <>
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div 
          ref={galleryRef}
          className="scroll-fade-up max-w-6xl mx-auto"
        >
          <h2 className="text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center">
            {t('projects.gallery')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group border-4 border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden cursor-pointer"
              >
                <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                  <img 
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">🔍</span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 border-t-4 border-black dark:border-white text-left">
                  <p className="text-body text-sm text-gray-700 dark:text-gray-300">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold text-2xl shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 z-10"
            aria-label={t('projects.close')}
          >
            ✕
          </button>

          {project.gallery.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 w-12 h-12 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold text-2xl shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 z-10"
                aria-label={t('projects.previous')}
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 w-12 h-12 bg-white dark:bg-black text-black dark:text-white border-3 border-black dark:border-white font-mono font-bold text-2xl shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 z-10"
                aria-label={t('projects.next')}
              >
                →
              </button>
            </>
          )}

          <div 
            className="max-w-7xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-4 border-white dark:border-black shadow-[12px_12px_0px_rgba(255,255,255,1)] dark:shadow-[12px_12px_0px_rgba(0,0,0,1)] bg-white dark:bg-black">
              <img 
                src={project.gallery[currentImage].image}
                alt={project.gallery[currentImage].caption}
                className="max-w-full max-h-[80vh] w-auto h-auto mx-auto"
              />
              <div className="p-6 border-t-4 border-black dark:border-white bg-white dark:bg-black">
                <p className="text-body text-center text-black dark:text-white">
                  {project.gallery[currentImage].caption}
                </p>
                <p className="text-mono text-xs text-center text-gray-500 dark:text-gray-500 mt-2">
                  {currentImage + 1} / {project.gallery.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectMetrics({ project }) {
  const { t } = useTranslation();
  const metricsRef = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div 
        ref={metricsRef}
        className="scroll-scale max-w-4xl mx-auto"
      >
        <div className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white p-8 md:p-12 shadow-[12px_12px_0px_rgba(0,0,0,0.3)] dark:shadow-[12px_12px_0px_rgba(255,255,255,0.3)]">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-8 text-center">
            {t('projects.metrics')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.metrics).map(([key, value], index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-black mb-2">
                  {value}
                </p>
                <p className="text-mono text-xs uppercase tracking-wider opacity-80">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedProjects({ projects }) {
  const { t } = useTranslation();
  const relatedRef = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={relatedRef}
          className="scroll-fade-up text-display text-3xl md:text-4xl font-bold text-black dark:text-white mb-12 text-center"
        >
          {t('projects.relatedProjects')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block bg-white dark:bg-gray-900 border-3 border-black dark:border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden"
            >
              <div className="h-48 overflow-hidden border-b-3 border-black dark:border-white">
                <img 
                  src={project.hero.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-body text-gray-700 dark:text-gray-300 mb-4">
                  {project.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase text-black dark:text-white group-hover:text-cyan-400 transition-colors">
                  {t('projects.viewProject')}
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}