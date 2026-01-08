import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  // Refs para animações
  const brandRef = useScrollAnimation();
  const navRef = useScrollAnimation();
  const socialRef = useScrollAnimation();
  const copyrightRef = useScrollAnimation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { name: 'Sobre', id: 'about' },
    { name: 'Formação', id: 'formation' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Contato', id: 'contact' }
  ];

  const socials = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:denilsonvictor2002@gmail.com',
      color: 'hover:text-purple-600 dark:hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/denilsonvbfaria',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Denilson-Faria',
      color: 'hover:text-indigo-600 dark:hover:text-indigo-400'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/5531993509726',
      color: 'hover:text-cyan-600 dark:hover:text-cyan-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo/Brand - Esquerda */}
          <div 
            ref={brandRef}
            className="scroll-fade-up flex flex-col items-center md:items-start"
          >
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Denilson.
            </button>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Desenvolvedor Front-end
            </p>
          </div>

          {/* Navigation Links - Centro */}
          <div 
            ref={navRef}
            className="scroll-fade-up delay-200 flex flex-col items-center"
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Navegação</h3>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links - Direita */}
          <div 
            ref={socialRef}
            className="scroll-fade-up delay-400 flex flex-col items-center md:items-end"
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-400 ${social.color} hover:border-gray-400 dark:hover:border-white/30 transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-white/10 mb-6"></div>

        {/* Copyright - Bottom */}
        <div 
          ref={copyrightRef}
          className="scroll-fade-up delay-600 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Denilson Faria. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 dark:text-gray-600 text-xs mt-2">
            Desenvolvido com React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}