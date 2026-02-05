import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales';

export const useTranslation = () => {
  const { language } = useLanguage();

  /**
   * Função para buscar tradução
   * @param {string} key 
   * @returns {string} -
   */
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return value || key;
  };

  return { t, language };
};