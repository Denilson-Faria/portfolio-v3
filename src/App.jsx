import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SpotlightBackground from './components/SpotlightBackground';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Formation from './components/Formation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      {/* Spotlight apenas no dark mode */}
      {theme === 'dark' && <SpotlightBackground />}

      {/* Fundo branco no light mode, escuro no dark mode */}
      <div className="fixed inset-0 w-full h-full -z-20 bg-white dark:bg-black transition-colors duration-300"></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Formation />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;