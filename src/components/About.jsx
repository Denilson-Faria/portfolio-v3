import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
    // Refs para animações
    const headerRef = useScrollAnimation();
    const mainCardRef = useScrollAnimation();
    const card1Ref = useScrollAnimation();
    const card2Ref = useScrollAnimation();
    const card3Ref = useScrollAnimation();
    const ctaRef = useScrollAnimation();

    const cards = [
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            title: "Movido por desafios",
            description:
                "Adoro transformar problemas complexos em soluções elegantes que realmente funcionam",
            color: "purple",
            ref: card1Ref
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                </svg>
            ),
            title: "O que já sei",
            description:
                "React, TypeScript, JavaScript e todo dia aprendendo algo novo no universo dev",
            color: "pink",
            ref: card2Ref
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                </svg>
            ),
            title: "Foco no que importa",
            description:
                "Código limpo, experiência intuitiva e projetos com propósito real",
            color: "indigo",
            ref: card3Ref
        },
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: {
                bg: "bg-purple-500/10 dark:bg-purple-500/10",
                text: "text-purple-600 dark:text-purple-400",
                border: "border-purple-500/30 dark:border-purple-500/20",
                hoverBorder: "group-hover:border-purple-500/50 dark:group-hover:border-purple-400/50",
                hoverShadow: "group-hover:shadow-purple-500/30 dark:group-hover:shadow-purple-500/20"
            },
            pink: {
                bg: "bg-pink-500/10 dark:bg-pink-500/10",
                text: "text-pink-600 dark:text-pink-400",
                border: "border-pink-500/30 dark:border-pink-500/20",
                hoverBorder: "group-hover:border-pink-500/50 dark:group-hover:border-pink-400/50",
                hoverShadow: "group-hover:shadow-pink-500/30 dark:group-hover:shadow-pink-500/20"
            },
            indigo: {
                bg: "bg-indigo-500/10 dark:bg-indigo-500/10",
                text: "text-indigo-600 dark:text-indigo-400",
                border: "border-indigo-500/30 dark:border-indigo-500/20",
                hoverBorder: "group-hover:border-indigo-500/50 dark:group-hover:border-indigo-400/50",
                hoverShadow: "group-hover:shadow-indigo-500/30 dark:group-hover:shadow-indigo-500/20"
            }
        };
        return colors[color];
    };

    return (
        <section
            id="about"
            className="relative isolate py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
            <div className="relative z-10 max-w-5xl mx-auto w-full space-y-12 sm:space-y-16 md:space-y-20">

                {/* HEADER */}
                <div 
                    ref={headerRef}
                    className="scroll-fade-up text-center"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Quem sou{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            eu
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
                        Desenvolvedor, criador de soluções e entusiasta de café ☕
                    </p>
                </div>

                <div 
                    ref={mainCardRef}
                    className="scroll-fade-up delay-200 p-6 sm:p-8 rounded-3xl backdrop-blur-xl bg-white/80 dark:bg-transparent border border-gray-200 dark:border-purple-500/20 hover:border-gray-300 dark:hover:border-purple-400/40 transition-all duration-500 hover:shadow-xl shadow-sm dark:shadow-none dark:hover:shadow-purple-500/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center">

                        {/* FOTO */}
                        <div className="flex justify-center md:justify-start">
                            <div
                                className="relative z-20 group p-2 sm:p-3 rounded-3xl
                backdrop-blur-sm
                border border-purple-500/30
                hover:border-purple-400/50
                transition-all duration-500"
                            >
                                {/* Glow */}
                                <div
                                    className="absolute -inset-1
                  bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-indigo-500/30
                  rounded-3xl blur-xl opacity-50
                  group-hover:opacity-75 transition-opacity duration-500
                  z-[-1]"
                                />

                                {/* Imagem */}
                                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-1 ring-purple-500/30">
                                    <img
                                        src="/img/foto1.png"
                                        alt="Denilson Faria"
                                        loading="lazy"
                                        className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* TEXTO */}
                        <div className="md:col-span-2 space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 text-center md:text-left">
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                Sou desenvolvedor porque acredito que{" "}
                                <strong className="text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text font-semibold">
                                    tecnologia bem feita muda vidas
                                </strong>
                                . Estudante de Análise e Desenvolvimento de Sistemas, hoje mergulho de cabeça no mundo
                                front-end, criando experiências que fazem sentido.
                            </p>

                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                Quando não estou codando, você vai me encontrar com um café na mão,
                                pensando em como tornar interfaces mais intuitivas ou explorando
                                novas tecnologias.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {cards.map((card, index) => {
                        const colors = getColorClasses(card.color);
                        const delayClass = `delay-${(index + 3) * 100}`;
                        return (
                            <div
                                key={index}
                                ref={card.ref}
                                className={`scroll-fade-up ${delayClass} group p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-transparent
                  border ${colors.border} ${colors.hoverBorder}
                  transition-all duration-500
                  hover:scale-[1.02] hover:shadow-xl shadow-sm dark:shadow-none ${colors.hoverShadow}`}
                            >
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 border ${colors.border}`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-base sm:text-lg mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div 
                    ref={ctaRef}
                    className="scroll-fade-up delay-600 text-center"
                >
                    <a 
                        href="/curriculo.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl font-semibold text-sm sm:text-base text-gray-900 dark:text-white hover:from-pink-500/30 hover:via-purple-600/30 hover:to-indigo-600/30 hover:border-purple-400/50 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                    >
                        Ver currículo completo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}