
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useTranslation } from '../../hooks/useTranslation';
import Toast from '../Toast';

export default function Contact() {
  const { t } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('denilsonvictor2002@gmail.com');
    setShowToast(true);
  };

  const contacts = [
    {
      id: 1,
      name: t('contact.channels.email.name'),
      description: t('contact.channels.email.description'),
      icon: '📧',
      link: '#',
      onClick: handleEmailClick,
      color: 'purple',
      ref: useScrollAnimation()
    },
    {
      id: 2,
      name: t('contact.channels.linkedin.name'),
      description: t('contact.channels.linkedin.description'),
      icon: '💼',
      link: 'https://www.linkedin.com/in/denilsonvbfaria',
      color: 'cyan',
      ref: useScrollAnimation()
    },
    {
      id: 3,
      name: t('contact.channels.github.name'),
      description: t('contact.channels.github.description'),
      icon: '💻',
      link: 'https://github.com/Denilson-Faria',
      color: 'pink',
      ref: useScrollAnimation()
    },
    {
      id: 4,
      name: t('contact.channels.whatsapp.name'),
      description: t('contact.channels.whatsapp.description'),
      icon: '💬',
      link: 'https://wa.me/5531993509726',
      color: 'yellow',
      ref: useScrollAnimation()
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      <Toast 
        message={t('contact.emailCopied')}
        icon="📧"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <div ref={titleRef} className="scroll-fade-up mb-6">
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white text-center">
              {t('contact.title')}{' '}
              <span className="relative inline-block">
                {t('contact.titleHighlight')}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-pink-500 -z-10 rotate-1"></div>
              </span>
            </h2>
          </div>
          <div ref={descRef} className="scroll-fade-up delay-200">
            <p className="text-body text-center text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mono text-xs uppercase text-gray-500 dark:text-gray-500">
            {t('contact.availability')}
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ contact, index }) {
  const delays = ['delay-300', 'delay-400', 'delay-500', 'delay-600'];
  const rotations = ['rotate-minus-1', 'rotate-1', 'rotate-minus-2', 'rotate-2'];

  return (
    <a
      ref={contact.ref}
      href={contact.link}
      target={contact.id === 1 ? undefined : "_blank"}
      rel={contact.id === 1 ? undefined : "noopener noreferrer"}
      onClick={contact.onClick}
      className={`scroll-fade-up ${delays[index]} group block ${rotations[index]} hover:rotate-0 transition-all duration-300`}
    >
      <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-white p-6 md:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)] group-hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{contact.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-black dark:text-white mb-1">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {contact.description}
            </p>
          </div>
          <div className="text-2xl group-hover:translate-x-2 transition-transform">
            →
          </div>
        </div>
      </div>
    </a>
  );
}