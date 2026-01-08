import React, { useState } from 'react';
import { Mail, Linkedin, Github, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  // Refs para animações
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const card4Ref = useScrollAnimation();
  const footerRef = useScrollAnimation();

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('denilsonvictor2002@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contacts = [
    {
      id: 1,
      name: 'Email',
      description: emailCopied ? 'Email copiado! ✓' : 'denilsonvictor2002@gmail.com',
      icon: emailCopied ? Check : Mail,
      link: '#',
      onClick: handleEmailClick,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      ref: card1Ref
    },
    {
      id: 2,
      name: 'LinkedIn',
      description: 'Vamos conectar',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/denilsonvbfaria',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      ref: card2Ref
    },
    {
      id: 3,
      name: 'GitHub',
      description: 'Confira meus repositórios',
      icon: Github,
      link: 'https://github.com/Denilson-Faria',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
      ref: card3Ref
    },
    {
      id: 4,
      name: 'WhatsApp',
      description: 'Mande uma mensagem',
      icon: WhatsAppIcon,
      link: 'https://wa.me/5531993509726',
      color: 'cyan',
      gradient: 'from-cyan-500 to-teal-500',
      ref: card4Ref
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        border: 'border-purple-300 dark:border-purple-500/30',
        hoverBorder: 'group-hover:border-purple-400 dark:group-hover:border-purple-400/60',
        shadow: 'group-hover:shadow-purple-500/30',
        iconBg: 'bg-purple-500/10 dark:bg-purple-500/10',
        text: 'text-purple-600 dark:text-purple-400'
      },
      blue: {
        border: 'border-blue-300 dark:border-blue-500/30',
        hoverBorder: 'group-hover:border-blue-400 dark:group-hover:border-blue-400/60',
        shadow: 'group-hover:shadow-blue-500/30',
        iconBg: 'bg-blue-500/10 dark:bg-blue-500/10',
        text: 'text-blue-600 dark:text-blue-400'
      },
      indigo: {
        border: 'border-indigo-300 dark:border-indigo-500/30',
        hoverBorder: 'group-hover:border-indigo-400 dark:group-hover:border-indigo-400/60',
        shadow: 'group-hover:shadow-indigo-500/30',
        iconBg: 'bg-indigo-500/10 dark:bg-indigo-500/10',
        text: 'text-indigo-600 dark:text-indigo-400'
      },
      cyan: {
        border: 'border-cyan-300 dark:border-cyan-500/30',
        hoverBorder: 'group-hover:border-cyan-400 dark:group-hover:border-cyan-400/60',
        shadow: 'group-hover:shadow-cyan-500/30',
        iconBg: 'bg-cyan-500/10 dark:bg-cyan-500/10',
        text: 'text-cyan-600 dark:text-cyan-400'
      }
    };
    return colors[color];
  };

  const delayClasses = ['delay-300', 'delay-400', 'delay-500', 'delay-600'];

  return (
    <section id="contact" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="scroll-fade-up text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Vamos <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">conversar?</span>
          </h2>
          <p 
            ref={descRef}
            className="scroll-fade-up delay-200 text-gray-600 dark:text-gray-400 text-lg"
          >
            Escolha o melhor canal para entrar em contato
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            const colors = getColorClasses(contact.color);
            
            return (
              <a
                key={contact.id}
                ref={contact.ref}
                href={contact.link}
                target={contact.id === 1 ? undefined : "_blank"}
                rel={contact.id === 1 ? undefined : "noopener noreferrer"}
                onClick={contact.onClick}
                className={`scroll-fade-up ${delayClasses[index]} group relative p-8 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent border ${colors.border} ${colors.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-sm dark:shadow-none ${colors.shadow} flex items-center gap-6 ${contact.id === 1 ? 'cursor-pointer' : ''}`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 p-4 rounded-xl ${colors.iconBg} border ${colors.border} group-hover:scale-110 transition-all duration-300`}>
                  <IconComponent className={`w-8 h-8 ${colors.text} group-hover:drop-shadow-[0_0_20px_currentColor]`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {contact.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {contact.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="relative z-10 text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer text */}
        <div 
          ref={footerRef}
          className="scroll-fade-up delay-700 text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Disponível para projetos freelance e oportunidades full-time
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}