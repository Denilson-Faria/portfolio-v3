
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';
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
  const { t } = useTranslation();
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  const skills = [
    {
      name: t('skills.categories.react.name'),
      icon: SiReact,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.react.description'),
      color: 'pink',
      size: 'large',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.javascript.name'),
      icon: SiJavascript,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.javascript.description'),
      color: 'purple',
      size: 'medium',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.html5.name'),
      icon: SiHtml5,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.html5.description'),
      color: 'cyan',
      size: 'small',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.css3.name'),
      icon: SiCss3,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.css3.description'),
      color: 'cyan',
      size: 'small',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.tailwind.name'),
      icon: SiTailwindcss,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.tailwind.description'),
      color: 'pink',
      size: 'medium',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.typescript.name'),
      icon: SiTypescript,
      level: t('skills.levels.expertise'),
      description: t('skills.categories.typescript.description'),
      color: 'indigo',
      size: 'small',
      ref: useScrollAnimation()
    },
    {
      name: t('skills.categories.nextjs.name'),
      icon: SiNextdotjs,
      level: t('skills.levels.learning'),
      description: t('skills.categories.nextjs.description'),
      color: 'yellow',
      size: 'large',
      ref: useScrollAnimation()
    }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <div ref={titleRef} className="scroll-fade-up mb-6">
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white text-center">
              {t('skills.title')}{' '}
              <span className="relative inline-block">
                {t('skills.titleHighlight')}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-purple-600 -z-10 rotate-minus-1"></div>
              </span>
            </h2>
          </div>
          <div ref={descRef} className="scroll-fade-up delay-200">
            <p className="text-body text-center text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {t('skills.subtitle')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mb-12">
          {skills.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const IconComponent = skill.icon;
  const delays = ['delay-300', 'delay-400', 'delay-500', 'delay-600'];
  const sizes = { 
    large: 'col-span-2 row-span-2', 
    medium: 'col-span-2', 
    small: 'col-span-1' 
  };

  const colors = {
    pink: '#FF006E',
    purple: '#8338EC',
    cyan: '#00F5FF',
    yellow: '#FFD60A',
    indigo: '#6366f1'
  };

  return (
    <div 
      ref={skill.ref} 
      className={`scroll-fade-up ${delays[index % delays.length]} ${sizes[skill.size]} group`}
    >
      <div className="h-full bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-6 flex flex-col items-center justify-center gap-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
        <IconComponent 
          className={`${skill.size === 'large' ? 'text-6xl' : 'text-4xl'} group-hover:scale-110 transition-transform`}
          style={{ color: colors[skill.color] }}
        />
        <h3 className="font-bold text-black dark:text-white text-center">
          {skill.name}
        </h3>
      </div>
    </div>
  );
}