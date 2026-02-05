import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
     const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group h-10 px-4 border-3 border-black dark:border-white bg-white dark:bg-black hover:bg-pink-500 transition-all duration-200 flex items-center gap-3"
      aria-label={`Idioma atual: ${language === 'pt' ? 'Português' : 'English'}`}
    >
      <img 
        src={language === 'pt' 
          ? 'https://flagcdn.com/w40/br.png'
          : 'https://flagcdn.com/w40/gb.png'
        }
        alt={language === 'pt' ? 'Bandeira do Brasil' : 'UK Flag'}
        className="w-8 h-5 object-cover border-2 border-black dark:border-white"
      />
      
      <span className="font-mono text-sm font-bold uppercase text-black dark:text-white group-hover:text-white">
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  );
}
