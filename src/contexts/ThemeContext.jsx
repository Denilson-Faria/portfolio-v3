import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
  
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
  
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function ThemeDemo() {
  return (
    <ThemeProvider>
      <DemoContent />
    </ThemeProvider>
  );
}

function DemoContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
            Theme Provider
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sistema de tema dark/light funcionando! 🎨
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={toggleTheme}
            className="relative w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            <div className={`w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${
              theme === 'dark' ? 'translate-x-10' : 'translate-x-0'
            }`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </button>
        </div>

        {/* Cards de Demonstração */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card Roxo */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl shadow-xl">
            <h3 className="text-white font-bold text-xl mb-2">Cor Principal</h3>
            <p className="text-purple-100">Roxo vibrante</p>
          </div>

          {/* Card Verde */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-2xl shadow-xl">
            <h3 className="text-white font-bold text-xl mb-2">Cor Secundária</h3>
            <p className="text-green-100">Verde energético</p>
          </div>

          {/* Card Neutro */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition-colors duration-300">
            <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
              Tema Atual
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {theme === 'dark' ? 'Modo Escuro 🌙' : 'Modo Claro ☀️'}
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl transition-colors duration-300">
          <h3 className="text-gray-900 dark:text-white font-bold mb-2">
            ✅ Theme Provider Configurado!
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>• Toggle dark/light funcionando</li>
            <li>• Preferência salva no localStorage</li>
            <li>• Transições suaves entre temas</li>
            <li>• Cores: Roxo (principal) + Verde (secundária)</li>
            <li>• Dark mode como padrão</li>
          </ul>
        </div>
      </div>
    </div>
  );
}