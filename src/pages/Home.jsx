
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Formation from '../components/home/Formation';
import Skills from '../components/home/Skills';
import ProjectsGrid from '../components/projects/ProjectsGrid';  
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Formation />
      <Skills />
      <ProjectsGrid /> 
      <Contact />
    </main>
  );
}