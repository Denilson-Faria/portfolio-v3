import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FormacaoSection() {
  // Refs para animações
  const headerRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();

  const formacoes = [
    {
      id: 1,
      tipo: 'TÉCNICO',
      titulo: 'Desenvolvimento de Sistemas',
      instituicao: 'Proz Educação',
      ano: '2025',
      status: 'ATUAL',
      icone: BookOpen,
      descricao: 'Formação técnica focada em desenvolvimento de software, lógica de programação e construção de aplicações.',
      cor: 'from-pink-500 to-purple-500',
      ref: card1Ref
    },
    {
      id: 2,
      tipo: 'GRADUAÇÃO',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'Fasul Educacional',
      ano: '2025',
      status: 'ATUAL',
      icone: GraduationCap,
      descricao: 'Graduação tecnológica com foco em análise, desenvolvimento e arquitetura de sistemas modernos.',
      cor: 'from-cyan-500 to-blue-500',
      ref: card2Ref
    }
  ];

  return (
    <section id="formation" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className="scroll-fade-up text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Formações <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">acadêmicas</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            Minha base acadêmica e aprendizado contínuo
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {formacoes.map((formacao, index) => {
            const IconeComponent = formacao.icone;
            const delayClass = `delay-${(index + 2) * 100}`;
            
            return (
              <div
                key={formacao.id}
                ref={formacao.ref}
                className={`scroll-fade-up ${delayClass} group relative backdrop-blur-sm bg-white/80 dark:bg-transparent rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-purple-500/20 hover:border-gray-300 dark:hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-sm dark:shadow-none`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${formacao.cor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Ícone e Ano */}
                  <div className="flex items-start justify-between mb-6 gap-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${formacao.cor} flex-shrink-0`}>
                      <IconeComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2 justify-end">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{formacao.ano}</span>
                      </div>
                      <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        {formacao.status}
                      </span>
                    </div>
                  </div>

                  {/* Tipo */}
                  <div className="mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${formacao.cor} bg-clip-text text-transparent`}>
                      {formacao.tipo}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {formacao.titulo}
                  </h3>

                  {/* Instituição */}
                  <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{formacao.instituicao}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                    {formacao.descricao}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${formacao.cor} opacity-5 rounded-2xl blur-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}