
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';

export default function Formation() {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  const formations = [
    {
      id: 1,
      type: t('formation.technical'),
      title: t('formation.courses.systemsDevelopment.title'),
      institution: t('formation.courses.systemsDevelopment.institution'),
      year: '2025',
      status: t('formation.current'),
      icon: '📚',
      description: t('formation.courses.systemsDevelopment.description'),
      color: 'pink',
      ref: card1Ref
    },
    {
      id: 2,
      type: t('formation.graduation'),
      title: t('formation.courses.systemsAnalysis.title'),
      institution: t('formation.courses.systemsAnalysis.institution'),
      year: '2025',
      status: t('formation.current'),
      icon: '🎓',
      description: t('formation.courses.systemsAnalysis.description'),
      color: 'cyan',
      ref: card2Ref
    }
  ];

  return (
    <section id="formation" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <div ref={titleRef} className="scroll-fade-up mb-6">
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white text-center">
              {t('formation.title')}{' '}
              <span className="relative inline-block">
                {t('formation.titleHighlight')}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-cyan-400 -z-10 rotate-1"></div>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {formations.map((formation, index) => (
            <FormationCard key={formation.id} formation={formation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FormationCard({ formation, index }) {
  const rotations = ['rotate-minus-1', 'rotate-1'];
  const delays = ['delay-300', 'delay-500'];

  return (
    <div
      ref={formation.ref}
      className={`scroll-fade-up ${delays[index]} group ${rotations[index]} hover:rotate-0 transition-all duration-300`}
    >
      <article className="h-full bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,1)] group-hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] group-hover:translate-x-[4px] group:translate-y-[4px] transition-all duration-200">
        
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 ${formation.color === 'pink' ? 'bg-pink-500' : 'bg-cyan-400'} border-3 border-black dark:border-white flex items-center justify-center text-3xl shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]`}>
              {formation.icon}
            </div>
            <div>
              <span className={`text-mono text-xs uppercase font-bold tracking-wider block mb-1`} style={{ color: formation.color === 'pink' ? '#FF006E' : '#00F5FF' }}>
                {formation.type}
              </span>
              <span className="text-mono text-xs text-gray-500 dark:text-gray-500">
                📅 {formation.year}
              </span>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white font-mono text-xs font-bold uppercase">
            {formation.status}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 leading-tight">
          {formation.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🏛️</span>
          <p className="font-semibold text-gray-700 dark:text-gray-300">
            {formation.institution}
          </p>
        </div>

        <p className="text-body text-gray-600 dark:text-gray-400 leading-relaxed">
          {formation.description}
        </p>
      </article>
    </div>
  );
}