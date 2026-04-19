export const projectsData = {
  pt: [
    {
      id: 'contabileasy',
      title: "ContabilEasy",
      tagline: "Controle financeiro pessoal completo com React e Firebase",
      shortDescription: "React • Firebase • PWA • Exportação PDF",

      hero: {
        image: "/img/dashboard.png",
        video: null,
        gradient: "from-emerald-500 to-teal-600"
      },

      overview: {
        problem: "Aplicativos financeiros existentes ou são pagos, exigem cadastro em servidores externos ou não oferecem recursos avançados como metas, exportação de relatórios e acesso mobile nativo — frustrando quem quer controle real sem complexidade desnecessária.",
        solution: "Plataforma full-stack com React no front-end e Firebase como backend (Firestore para banco de dados, Authentication para login). Autenticação JWT com login via Google e link mágico enviado por e-mail. PWA instalável com suporte offline. Exportação de dados em PDF personalizado e importação com conversão automática de CSV/XLSX. Sistema de metas financeiras, modo claro/escuro e dashboard interativo com gráficos em tempo real.",
        result: "Aplicação production-ready com autenticação segura, dados sincronizados na nuvem, instalável como app no celular via PWA e com relatórios profissionais exportáveis em PDF — tudo em uma única plataforma gratuita."
      },

      features: [
        {
          title: "Autenticação Inteligente",
          description: "Login via Google OAuth e link mágico enviado por e-mail — sem necessidade de senha. JWT gerenciado pelo Firebase Authentication com sessões persistentes e seguras.",
          icon: "🔐"
        },
        {
          title: "PWA — App no Celular",
          description: "Instalável diretamente do navegador como aplicativo nativo no Android e iOS. Funciona offline com Service Worker e sincroniza ao reconectar.",
          icon: "📱"
        },
        {
          title: "Exportação PDF Personalizado",
          description: "Geração de relatórios financeiros em PDF com layout profissional, filtros por período e categoria, gráficos e resumo de saldo.",
          icon: "📄"
        },
        {
          title: "Importação com Conversão Automática",
          description: "Importe transações de outros apps ou planilhas em CSV e XLSX. O sistema detecta e converte automaticamente os campos para o padrão da plataforma.",
          icon: "📥"
        },
        {
          title: "Metas Financeiras",
          description: "Crie e acompanhe metas de economia com progresso visual, prazo e valor-alvo. O dashboard mostra quanto falta para atingir cada objetivo.",
          icon: "🎯"
        },
        {
          title: "Dashboard em Tempo Real",
          description: "Gráficos interativos de evolução de gastos, receitas por categoria e comparativos mensais — todos atualizados em tempo real via Firestore.",
          icon: "📊"
        },
        {
          title: "Modo Claro e Escuro",
          description: "Alternância entre modo claro e escuro com preferência salva automaticamente. Interface adaptada para conforto visual em qualquer ambiente.",
          icon: "🌙"
        },
        {
          title: "Firebase Firestore",
          description: "Dados sincronizados em tempo real na nuvem com Firestore. Cada usuário tem seus dados isolados com regras de segurança por UID.",
          icon: "☁️"
        }
      ],

      technologies: [
        { name: "React", category: "Frontend" },
        { name: "Firebase", category: "Backend" },
        { name: "Firestore", category: "Database" },
        { name: "Firebase Auth", category: "Auth" },
        { name: "JWT", category: "Segurança" },
        { name: "PWA", category: "Mobile" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Charts.js", category: "Visualização" },
        { name: "jsPDF", category: "Exportação" }
      ],

      challenges: [
        {
          title: "Login via Link no E-mail",
          description: "Implementar autenticação sem senha usando link mágico com expiração e uso único.",
          solution: "Firebase Authentication com signInWithEmailLink — o link é gerado com actionCodeSettings customizado e validado no retorno pelo domínio autorizado."
        },
        {
          title: "PWA com Suporte Offline",
          description: "Garantir que o app funcione sem conexão e sincronize ao reconectar sem conflitos de dados.",
          solution: "Service Worker com estratégia Cache First para assets estáticos e Network First para dados do Firestore. Fila de operações offline com sync automático."
        },
        {
          title: "Importação e Conversão de CSV",
          description: "Arquivos de diferentes bancos e apps têm colunas e formatos variados, dificultando a importação direta.",
          solution: "Parser customizado que detecta separador (vírgula ou ponto-e-vírgula), mapeia colunas por similaridade de nome e converte valores monetários com regex."
        },
        {
          title: "Segurança por Usuário no Firestore",
          description: "Garantir isolamento total de dados entre usuários sem expor informações de outros.",
          solution: "Regras de segurança do Firestore baseadas em UID: cada documento só é acessível pelo usuário autenticado dono daquele recurso."
        }
      ],

      gallery: [
        { image: "/img/Extrato.png", caption: "Lançamento de transaçoes com categorias personalizaveis" },
        { image: "/img/Analise.png", caption: "Análise detalhada com gráficos" }
      ],

      metrics: {
        linesOfCode: "4500+",
        components: "18",
        loadTime: "<1.2s",
        lighthouse: "94/100",
        performance: "96/100"
      },

      links: {
        demo: "https://contabileasyv2.vercel.app/",
        github: "https://github.com/Denilson-Faria/contabileasy"
      },

      year: "2025",
      category: "Full-Stack Application",
      badge: "💰 Finance App",
      accentColor: "cyan"
    },

    {
      id: 'konnex-chat',
      title: "Konnex Chat",
      tagline: "Aplicação de chat em tempo real com WebSockets",
      shortDescription: "WebSockets • Tempo Real • Auth Completa",

      hero: {
        image: "/img/konnex-login.png",
        video: null,
        gradient: "from-blue-500 via-purple-500 to-pink-500"
      },

      overview: {
        problem: "Comunicação fragmentada entre plataformas força usuários a gerenciar múltiplos apps. Aplicações de chat existentes ou são complexas demais, lentas, ou carecem de recursos essenciais como indicadores de presença e histórico persistente.",
        solution: "Sistema full-stack completo usando React no front-end, Node.js + Express no back-end, Socket.io para comunicação em tempo real e MongoDB para persistência de dados. Implementei autenticação JWT, status online/offline, histórico de mensagens e interface responsiva com feedback visual instantâneo.",
        result: "Aplicação de chat profissional com latência <100ms, mensagens instantâneas, autenticação segura, indicadores de presença em tempo real e suporte para 100+ usuários simultâneos."
      },

      features: [
        {
          title: "Real-time Messaging",
          description: "Mensagens instantâneas usando Socket.io com confirmação de entrega e feedback visual imediato",
          icon: "💬"
        },
        {
          title: "Autenticação JWT",
          description: "Sistema completo de autenticação com JWT, bcrypt para senhas e proteção de rotas",
          icon: "🔐"
        },
        {
          title: "Status Online/Offline",
          description: "Indicadores de presença em tempo real mostrando quais usuários estão ativos",
          icon: "🟢"
        },
        {
          title: "Histórico de Mensagens",
          description: "Persistência de conversas no MongoDB com carregamento paginado e busca",
          icon: "📜"
        },
        {
          title: "UI/UX Moderna",
          description: "Interface responsiva e intuitiva com animações suaves e design limpo",
          icon: "✨"
        },
        {
          title: "Typing Indicators",
          description: "Indicadores visuais quando outros usuários estão digitando mensagens",
          icon: "✍️"
        }
      ],

      technologies: [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Express", category: "Framework" },
        { name: "Socket.io", category: "WebSocket" },
        { name: "MongoDB", category: "Database" },
        { name: "JWT", category: "Auth" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Bcrypt", category: "Security" }
      ],

      challenges: [
        {
          title: "Sincronização em Tempo Real",
          description: "Manter múltiplos clientes sincronizados sem conflitos de estado.",
          solution: "Implementei rooms do Socket.io e event emitters customizados para broadcast inteligente de eventos."
        },
        {
          title: "Gerenciamento de Conexões",
          description: "Lidar com desconexões inesperadas e reconexões automáticas.",
          solution: "Sistema de heartbeat e reconnection automática com queue de mensagens pendentes."
        },
        {
          title: "Segurança WebSocket",
          description: "Proteger conexões WebSocket contra acesso não autorizado.",
          solution: "Validação de JWT em cada conexão Socket.io e middleware de autenticação customizado."
        },
        {
          title: "Performance com Volume Alto",
          description: "Manter UI responsiva com centenas de mensagens em conversas longas.",
          solution: "Virtualização de mensagens + paginação infinita + lazy loading de imagens e mídia. Apenas mensagens visíveis são renderizadas no DOM."
        }
      ],

      gallery: [
        { image: "/img/konnex-chat.png", caption: "Interface principal do chat" },
        { image: "/img/konnex-SE.png", caption: "Modais de emojis e Stickers reais de memes BR" },
        { image: "/img/konnex-login.png", caption: "Tela de autenticação" },
      ],

      metrics: {
        linesOfCode: "3500+",
        components: "20",
        latency: "<100ms",
        concurrentUsers: "100+",
        performance: "93/100"
      },

      links: {
        github: "https://github.com/Denilson-Faria/chat-app-frontend.git",
        githubBackend: "https://github.com/Denilson-Faria/chat-app-backend.git",
      },

      year: "2025",
      category: "Full-Stack Application",
      badge: "💬 Real-time",
      accentColor: "purple"
    },

    {
      id: 'dietron-ai',
      title: "Dietron AI",
      tagline: "Gerador inteligente de planos de dieta personalizados",
      shortDescription: "OpenAI • TypeScript • Next.js • Personalização",

      hero: {
        image: "/img/dietron-forms.png",
        video: null,
        gradient: "from-green-500 to-emerald-600"
      },

      overview: {
        problem: "Nutricionistas levam 2-3 horas para criar um plano semanal personalizado. Apps existentes usam templates genéricos que ignoram contexto cultural, disponibilidade de ingredientes locais e particularidades brasileiras como horários de refeições e alimentos regionais.",
        solution: "Aplicação full-stack usando Next.js e TypeScript no front-end, Node.js no back-end e integração com OpenAI GPT-4 para geração inteligente de dietas. Sistema de prompts em camadas otimizados que consideram dados antropométricos, TDEE calculado, intolerâncias, preferências e cultura alimentar brasileira.",
        result: "Plataforma profissional que gera dietas semanais completas em menos de 10 segundos, com ingredientes locais acessíveis, macros balanceados e 4.8/5 de satisfação dos usuários."
      },

      features: [
        {
          title: "IA Generativa",
          description: "Integração com OpenAI GPT-4 para criar planos de dieta contextualizados e personalizados",
          icon: "🤖"
        },
        {
          title: "Personalização Completa",
          description: "Sistema que considera idade, peso, altura, sexo, objetivo, nível de atividade e restrições",
          icon: "👤"
        },
        {
          title: "Cálculo Calórico Inteligente",
          description: "IA calcula TDEE (Total Daily Energy Expenditure) e ajusta macros automaticamente baseado em objetivos: deficit para perda de peso, superavit para ganho de massa",
          icon: "🔢"
        },
        {
          title: "Dietas Semanais",
          description: "Planos completos de 7 dias com 4 refeições diárias (café, almoço, lanche, jantar)",
          icon: "📅"
        },
        {
          title: "Ingredientes Brasileiros",
          description: "IA treinada para sugerir alimentos comuns e acessíveis no Brasil",
          icon: "🇧🇷"
        },
        {
          title: "Markdown Formatado",
          description: "Resultados apresentados em formato limpo e legível com hierarquia visual clara",
          icon: "📝"
        },
        {
          title: "TypeScript Safety",
          description: "Código 100% tipado garantindo robustez e prevenção de bugs",
          icon: "🛡️"
        }
      ],

      technologies: [
        { name: "Next.js", category: "Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "OpenAI API", category: "AI" },
        { name: "Node.js", category: "Backend" },
        { name: "Shadcn/ui", category: "Components" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "React", category: "Library" }
      ],

      challenges: [
        {
          title: "Prompts Otimizados",
          description: "Criar prompts que gerassem dietas realistas e adequadas ao contexto brasileiro.",
          solution: "Desenvolvi sistema de prompts em camadas (system, user, docs) com regras específicas e exemplos."
        },
        {
          title: "Controle de Custos",
          description: "Gerenciar custos da API da OpenAI mantendo qualidade das respostas.",
          solution: "Otimização de tokens, cache de respostas similares e uso estratégico de temperatura."
        },
        {
          title: "Type Safety com IA",
          description: "Garantir tipagem forte mesmo com respostas imprevisíveis da IA.",
          solution: "Interfaces TypeScript rigorosas e validação de schema com Zod nos retornos."
        }
      ],

      gallery: [
        { image: "/img/dietron-forms.png", caption: "Formulário de entrada de dados" },
        { image: "/img/dietron-generate.png", caption: "Plano de dieta gerado" },
        { image: "/img/dietron-responsive.webp", caption: "Interface responsiva" }
      ],

      metrics: {
        linesOfCode: "2800+",
        components: "12",
        generationTime: "<10s",
        userSatisfaction: "4.8/5",
        performance: "94/100"
      },

      links: {
        demo: "https://dietron.netlify.app/",
        github: "https://github.com/Denilson-Faria/diet-ai-frontend",
        githubBackend: "https://github.com/Denilson-Faria/diet-ai-backend"
      },

      year: "2025",
      category: "Full-Stack AI Application",
      badge: "🤖 IA",
      accentColor: "cyan"
    },

    {
      id: 'iphone17',
      title: "iPhone17 Landing",
      tagline: "Landing page premium com animações scroll reveal",
      shortDescription: "Animações • Scroll Reveal • Interativo",

      hero: {
        image: "/img/iphone.png",
        video: null,
        gradient: "from-cyan-500 to-blue-500"
      },

      overview: {
        problem: "Landing pages de produtos premium precisam equilibrar wow-factor visual com carregamento instantâneo (<2s). Animações pesadas causam alta taxa de rejeição. Apple define padrão de design minimalista impossível de replicar sem sacrificar performance ou interatividade.",
        solution: "Landing page desenvolvida com React e Tailwind CSS, focando em animações scroll reveal sutis usando Intersection Observer API e GPU-accelerated transforms. Seletor de cores interativo com transições suaves, lazy loading de assets e critical CSS inline para First Contentful Paint otimizado.",
        result: "Experiência totalmente fluida mantendo 60fps constante, tempo de carregamento <1.5s, Lighthouse 98/100/100/100 e responsividade perfeita de 320px a 4K."
      },

      features: [
        {
          title: "Scroll Reveal Animations",
          description: "Animações acionadas pelo scroll que revelam conteúdo de forma elegante e progressiva",
          icon: "📜"
        },
        {
          title: "Interactive Color Selector",
          description: "Seletor de cores com preview em tempo real e transições suaves entre variantes",
          icon: "🎨"
        },
        {
          title: "Optimized Asset Loading",
          description: "Lazy loading de imagens, formato WebP com fallback PNG/JPG, critical CSS inline e preload de recursos essenciais para carregamento instantâneo",
          icon: "⚡"
        },
        {
          title: "Responsive Design",
          description: "Layout adaptativo que funciona perfeitamente de smartphones a monitores 4K",
          icon: "📱"
        },
        {
          title: "Smooth Transitions",
          description: "Todas as interações possuem transições fluidas e timing perfeito",
          icon: "✨"
        }
      ],

      technologies: [
        { name: "React", category: "Framework" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "JavaScript", category: "Language" },
        { name: "Intersection Observer", category: "API" },
        { name: "CSS Animations", category: "Animation" }
      ],

      challenges: [
        {
          title: "Performance das Animações",
          description: "Múltiplas animações simultâneas podiam causar jank.",
          solution: "Usei CSS transforms e opacity (GPU accelerated) + Intersection Observer para trigger eficiente."
        },
        {
          title: "Minimalismo com Impacto",
          description: "Balancear simplicidade visual com elementos que chamam atenção.",
          solution: "Hierarquia visual clara com whitespace generoso e accent colors estratégicos."
        }
      ],

      gallery: [
        { image: "/img/hero-product.png", caption: "Hero section com produto" },
        { image: "/img/iphone-seletor.png", caption: "Seletor de cores interativo" },
        { image: "/img/iphone-comparison.png", caption: "Comparação de modelos Apple" },
        { image: "/img/iphone-desempenho.png", caption: "Comparação de modelos Apple" },
      ],

      metrics: {
        linesOfCode: "1200+",
        components: "8",
        loadTime: "<1.5s",
        lighthouse: "98/100/100/100",
        performance: "98/100"
      },

      links: {
        demo: "https://iphone17landing.vercel.app/",
        github: "https://github.com/Denilson-Faria/iPhone17Landing"
      },

      year: "2025",
      category: "Landing Page",
      accentColor: "cyan"
    },

    {
      id: 'netflix-clone',
      title: "Netflix Clone",
      tagline: "Clone completo da Netflix com API real e 1000+ filmes",
      shortDescription: "API Real • 1000+ Filmes • Infinite Scroll",

      hero: {
        image: "/img/netflix.jpg",
        video: null,
        gradient: "from-red-600 to-pink-600"
      },

      overview: {
        problem: "Criar uma experiência de streaming que replique a interface premium da Netflix, com navegação fluida entre milhares de títulos, carregamento otimizado de imagens de alta resolução e busca instantânea sem comprometer performance.",
        solution: "Desenvolvido usando React com arquitetura componentizada (15+ componentes reutilizáveis) e integração com TMDB API para dados reais de 1000+ filmes/séries. Implementei carrosséis infinitos com virtualização, sistema de favoritos persistente com localStorage, modal de detalhes com trailers do YouTube e custom hooks para lógica compartilhada.",
        result: "Interface responsiva completa com 70% de cache hit rate, loading skeletons para perceived performance, busca funcional com debounce e experiência premium em qualquer dispositivo."
      },

      features: [
        {
          title: "API Integration",
          description: "Integração com TMDB API para dados reais de mais de 1000 filmes e séries, com atualização automática",
          icon: "🔌"
        },
        {
          title: "Infinite Scroll",
          description: "Carrosséis infinitos com lazy loading para performance otimizada mesmo com grande volume de conteúdo",
          icon: "♾️"
        },
        {
          title: "Modal System",
          description: "Sistema de modal com detalhes completos, trailers do YouTube e informações de elenco",
          icon: "🎬"
        },
        {
          title: "Favorites System",
          description: "Sistema de favoritos persistente usando localStorage, permitindo salvar conteúdo entre sessões",
          icon: "⭐"
        },
        {
          title: "Advanced Search",
          description: "Busca com debounce (300ms) para otimização de requests, filtros por gênero/ano/rating, resultados paginados e highlight de termos buscados em tempo real",
          icon: "🔍"
        },
        {
          title: "Loading States",
          description: "Loading skeletons para feedback visual durante carregamento, melhorando perceived performance",
          icon: "⚡"
        }
      ],

      technologies: [
        { name: "React", category: "Framework" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "TMDB API", category: "API" },
        { name: "React Router", category: "Routing" },
        { name: "Context API", category: "State" },
        { name: "Axios", category: "HTTP" },
        { name: "LocalStorage", category: "Storage" }
      ],

      challenges: [
        {
          title: "Performance com Grande Volume",
          description: "Com milhares de itens, o desafio era manter a interface fluida.",
          solution: "Implementei virtualização de listas e lazy loading inteligente para carregar apenas o visível."
        },
        {
          title: "Estado Complexo",
          description: "Gerenciar favoritos, filtros e estados de loading simultaneamente.",
          solution: "Usei Context API com reducers customizados para centralizar e organizar o estado global."
        },
        {
          title: "Cache Strategy",
          description: "Evitar chamadas API repetidas para mesmos dados, economizando requests e melhorando velocidade.",
          solution: "Cache em memória com TTL de 30 minutos + localStorage para favoritos persistentes. 70% de cache hit rate reduziu drasticamente as chamadas à API."
        },
        {
          title: "Responsividade Perfeita",
          description: "Interface precisa funcionar perfeitamente em todos os tamanhos de tela.",
          solution: "Mobile-first approach com Tailwind, testando em múltiplos dispositivos reais."
        }
      ],

      gallery: [
        { image: "/img/netflix.jpg", caption: "Página principal com carrosséis" },
        { image: "/img/modal-netflix.png", caption: "Modal de detalhes com trailer" },
        { image: "/img/busca-netflix.png", caption: "Sistema de busca" }
      ],

      metrics: {
        linesOfCode: "2500+",
        components: "15",
        totalMovies: "1000+",
        cacheHitRate: "70%",
        performance: "95/100"
      },

      links: {
        demo: "https://netflix-clone-df.vercel.app/",
        github: "https://github.com/Denilson-Faria/netflix-clone"
      },

      year: "2025",
      category: "Web Application",
      accentColor: "red"
    }
  ],

  en: [
    {
      id: 'contabileasy',
      title: "ContabilEasy",
      tagline: "Complete personal finance app built with React and Firebase",
      shortDescription: "React • Firebase • PWA • PDF Export",

      hero: {
        image: "/img/contabileasy.png",
        video: null,
        gradient: "from-emerald-500 to-teal-600"
      },

      overview: {
        problem: "Existing finance apps are either paid, require registration on external servers, or lack advanced features like financial goals, report exports, and native mobile access — frustrating users who want real control without unnecessary complexity.",
        solution: "Full-stack platform with React on the frontend and Firebase as backend (Firestore for database, Authentication for login). JWT authentication with Google login and magic link sent via email. Installable PWA with offline support. Export data as custom PDF and import with automatic CSV/XLSX conversion. Financial goals system, dark/light mode, and interactive dashboard with real-time charts.",
        result: "Production-ready application with secure authentication, cloud-synced data, installable as a mobile app via PWA, and professional PDF reports — all in one free platform."
      },

      features: [
        {
          title: "Smart Authentication",
          description: "Login via Google OAuth and magic link sent by email — no password needed. JWT managed by Firebase Authentication with persistent and secure sessions.",
          icon: "🔐"
        },
        {
          title: "PWA — Mobile App",
          description: "Installable directly from the browser as a native app on Android and iOS. Works offline with Service Worker and syncs on reconnect.",
          icon: "📱"
        },
        {
          title: "Custom PDF Export",
          description: "Generate financial reports in PDF with professional layout, filters by period and category, charts, and balance summary.",
          icon: "📄"
        },
        {
          title: "Import with Auto-conversion",
          description: "Import transactions from other apps or spreadsheets in CSV and XLSX. The system automatically detects and converts fields to the platform standard.",
          icon: "📥"
        },
        {
          title: "Financial Goals",
          description: "Create and track savings goals with visual progress, deadline, and target value. The dashboard shows how much is left to reach each goal.",
          icon: "🎯"
        },
        {
          title: "Real-time Dashboard",
          description: "Interactive charts of spending evolution, income by category, and monthly comparisons — all updated in real time via Firestore.",
          icon: "📊"
        },
        {
          title: "Dark and Light Mode",
          description: "Toggle between light and dark mode with preference saved automatically. Interface adapted for visual comfort in any environment.",
          icon: "🌙"
        },
        {
          title: "Firebase Firestore",
          description: "Data synced in real time to the cloud with Firestore. Each user's data is isolated with UID-based security rules.",
          icon: "☁️"
        }
      ],

      technologies: [
        { name: "React", category: "Frontend" },
        { name: "Firebase", category: "Backend" },
        { name: "Firestore", category: "Database" },
        { name: "Firebase Auth", category: "Auth" },
        { name: "JWT", category: "Security" },
        { name: "PWA", category: "Mobile" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Charts.js", category: "Visualization" },
        { name: "jsPDF", category: "Export" }
      ],

      challenges: [
        {
          title: "Magic Link Login",
          description: "Implement passwordless authentication using a magic link with expiration and single use.",
          solution: "Firebase Authentication with signInWithEmailLink — the link is generated with custom actionCodeSettings and validated on return by the authorized domain."
        },
        {
          title: "PWA with Offline Support",
          description: "Ensure the app works without connection and syncs on reconnect without data conflicts.",
          solution: "Service Worker with Cache First strategy for static assets and Network First for Firestore data. Offline operations queue with automatic sync."
        },
        {
          title: "CSV Import and Conversion",
          description: "Files from different banks and apps have varied columns and formats, making direct import difficult.",
          solution: "Custom parser that detects separator (comma or semicolon), maps columns by name similarity, and converts monetary values with regex."
        },
        {
          title: "Per-user Firestore Security",
          description: "Ensure complete data isolation between users without exposing others' information.",
          solution: "Firestore security rules based on UID: each document is only accessible by the authenticated user who owns that resource."
        }
      ],

      gallery: [
        { image: "/img/contabileasy.png", caption: "Main dashboard with overview" },
        { image: "/img/relatorios-contabileasy.png", caption: "Detailed analysis with charts" }
      ],

      metrics: {
        linesOfCode: "4500+",
        components: "18",
        loadTime: "<1.2s",
        lighthouse: "94/100",
        performance: "96/100"
      },

      links: {
        demo: "https://contabileasyv2.vercel.app/",
        github: "https://github.com/Denilson-Faria/contabileasy"
      },

      year: "2025",
      category: "Full-Stack Application",
      badge: "💰 Finance App",
      accentColor: "cyan"
    },

    {
      id: 'konnex-chat',
      title: "Konnex Chat",
      tagline: "Real-time chat application with WebSockets",
      shortDescription: "WebSockets • Real-time • Full Auth",

      hero: {
        image: "/img/konnex-login.png",
        video: null,
        gradient: "from-blue-500 via-purple-500 to-pink-500"
      },

      overview: {
        problem: "Fragmented communication across platforms forces users to manage multiple apps. Existing chat applications are either too complex, slow, or lack essential features like presence indicators and persistent history.",
        solution: "Complete full-stack system using React on the frontend, Node.js + Express on the backend, Socket.io for real-time communication, and MongoDB for data persistence. I implemented JWT authentication, online/offline status, message history, and a responsive interface with instant visual feedback.",
        result: "Professional chat application with <100ms latency, instant messaging, secure authentication, real-time presence indicators, and support for 100+ simultaneous users."
      },

      features: [
        {
          title: "Real-time Messaging",
          description: "Instant messages using Socket.io with delivery confirmation and immediate visual feedback",
          icon: "💬"
        },
        {
          title: "JWT Authentication",
          description: "Complete authentication system with JWT, bcrypt for passwords, and route protection",
          icon: "🔐"
        },
        {
          title: "Online/Offline Status",
          description: "Real-time presence indicators showing which users are active",
          icon: "🟢"
        },
        {
          title: "Message History",
          description: "Conversation persistence in MongoDB with paginated loading and search",
          icon: "📜"
        },
        {
          title: "Modern UI/UX",
          description: "Responsive and intuitive interface with smooth animations and clean design",
          icon: "✨"
        },
        {
          title: "Typing Indicators",
          description: "Visual indicators when other users are typing messages",
          icon: "✍️"
        }
      ],

      technologies: [
        { name: "React", category: "Frontend" },
        { name: "Node.js", category: "Backend" },
        { name: "Express", category: "Framework" },
        { name: "Socket.io", category: "WebSocket" },
        { name: "MongoDB", category: "Database" },
        { name: "JWT", category: "Auth" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Bcrypt", category: "Security" }
      ],

      challenges: [
        {
          title: "Real-time Synchronization",
          description: "Keeping multiple clients synchronized without state conflicts.",
          solution: "Implemented Socket.io rooms and custom event emitters for intelligent event broadcasting."
        },
        {
          title: "Connection Management",
          description: "Handling unexpected disconnections and automatic reconnections.",
          solution: "Heartbeat system and automatic reconnection with pending message queue."
        },
        {
          title: "WebSocket Security",
          description: "Protecting WebSocket connections against unauthorized access.",
          solution: "JWT validation on each Socket.io connection and custom authentication middleware."
        },
        {
          title: "High Volume Performance",
          description: "Keeping UI responsive with hundreds of messages in long conversations.",
          solution: "Message virtualization + infinite pagination + lazy loading of images and media. Only visible messages are rendered in the DOM."
        }
      ],

      gallery: [
        { image: "/img/konnex-chat.png", caption: "Main chat interface" },
        { image: "/img/konnex-SE.png", caption: "Emoji and real Brazilian meme stickers modals" },
        { image: "/img/konnex-login.png", caption: "Authentication screen" },
      ],

      metrics: {
        linesOfCode: "3500+",
        components: "20",
        latency: "<100ms",
        concurrentUsers: "100+",
        performance: "93/100"
      },

      links: {
        github: "https://github.com/Denilson-Faria/chat-app-frontend.git",
        githubBackend: "https://github.com/Denilson-Faria/chat-app-backend.git",
      },

      year: "2025",
      category: "Full-Stack Application",
      badge: "💬 Real-time",
      accentColor: "purple"
    },

    {
      id: 'dietron-ai',
      title: "Dietron AI",
      tagline: "Intelligent generator of personalized diet plans",
      shortDescription: "OpenAI • TypeScript • Next.js • Personalization",

      hero: {
        image: "/img/dietron-forms.png",
        video: null,
        gradient: "from-green-500 to-emerald-600"
      },

      overview: {
        problem: "Nutritionists take 2-3 hours to create a personalized weekly plan. Existing apps use generic templates that ignore cultural context, local ingredient availability, and Brazilian particularities like meal times and regional foods.",
        solution: "Full-stack application using Next.js and TypeScript on the frontend, Node.js on the backend, and OpenAI GPT-4 integration for intelligent diet generation. Optimized layered prompt system that considers anthropometric data, calculated TDEE, intolerances, preferences, and Brazilian food culture.",
        result: "Professional platform that generates complete weekly diets in less than 10 seconds, with accessible local ingredients, balanced macros, and 4.8/5 user satisfaction."
      },

      features: [
        {
          title: "Generative AI",
          description: "OpenAI GPT-4 integration to create contextualized and personalized diet plans",
          icon: "🤖"
        },
        {
          title: "Complete Personalization",
          description: "System that considers age, weight, height, gender, goal, activity level, and restrictions",
          icon: "👤"
        },
        {
          title: "Intelligent Caloric Calculation",
          description: "AI calculates TDEE (Total Daily Energy Expenditure) and automatically adjusts macros based on goals: deficit for weight loss, surplus for mass gain",
          icon: "🔢"
        },
        {
          title: "Weekly Diets",
          description: "Complete 7-day plans with 4 daily meals (breakfast, lunch, snack, dinner)",
          icon: "📅"
        },
        {
          title: "Brazilian Ingredients",
          description: "AI trained to suggest common and accessible foods in Brazil",
          icon: "🇧🇷"
        },
        {
          title: "Formatted Markdown",
          description: "Results presented in clean and readable format with clear visual hierarchy",
          icon: "📝"
        },
        {
          title: "TypeScript Safety",
          description: "100% typed code ensuring robustness and bug prevention",
          icon: "🛡️"
        }
      ],

      technologies: [
        { name: "Next.js", category: "Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "OpenAI API", category: "AI" },
        { name: "Node.js", category: "Backend" },
        { name: "Shadcn/ui", category: "Components" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "React", category: "Library" }
      ],

      challenges: [
        {
          title: "Optimized Prompts",
          description: "Creating prompts that generate realistic diets appropriate to the Brazilian context.",
          solution: "Developed layered prompt system (system, user, docs) with specific rules and examples."
        },
        {
          title: "Cost Control",
          description: "Managing OpenAI API costs while maintaining response quality.",
          solution: "Token optimization, similar response caching, and strategic temperature usage."
        },
        {
          title: "Type Safety with AI",
          description: "Ensuring strong typing even with unpredictable AI responses.",
          solution: "Rigorous TypeScript interfaces and Zod schema validation on returns."
        }
      ],

      gallery: [
        { image: "/img/dietron-forms.png", caption: "Data input form" },
        { image: "/img/dietron-generate.png", caption: "Generated diet plan" },
        { image: "/img/dietron-responsive.webp", caption: "Responsive interface" }
      ],

      metrics: {
        linesOfCode: "2800+",
        components: "12",
        generationTime: "<10s",
        userSatisfaction: "4.8/5",
        performance: "94/100"
      },

      links: {
        demo: "https://dietron.netlify.app/",
        github: "https://github.com/Denilson-Faria/diet-ai-frontend",
        githubBackend: "https://github.com/Denilson-Faria/diet-ai-backend"
      },

      year: "2025",
      category: "Full-Stack AI Application",
      badge: "🤖 AI",
      accentColor: "cyan"
    },

    {
      id: 'iphone17',
      title: "iPhone17 Landing",
      tagline: "Premium landing page with scroll reveal animations",
      shortDescription: "Animations • Scroll Reveal • Interactive",

      hero: {
        image: "/img/iphone.png",
        video: null,
        gradient: "from-cyan-500 to-blue-500"
      },

      overview: {
        problem: "Premium product landing pages need to balance visual wow-factor with instant loading (<2s). Heavy animations cause high bounce rates. Apple sets a minimalist design standard impossible to replicate without sacrificing performance or interactivity.",
        solution: "Landing page developed with React and Tailwind CSS, focusing on subtle scroll reveal animations using Intersection Observer API and GPU-accelerated transforms. Interactive color selector with smooth transitions, lazy loading of assets, and inline critical CSS for optimized First Contentful Paint.",
        result: "Completely fluid experience maintaining constant 60fps, <1.5s load time, Lighthouse 98/100/100/100, and perfect responsiveness from 320px to 4K."
      },

      features: [
        {
          title: "Scroll Reveal Animations",
          description: "Scroll-triggered animations that elegantly and progressively reveal content",
          icon: "📜"
        },
        {
          title: "Interactive Color Selector",
          description: "Color selector with real-time preview and smooth transitions between variants",
          icon: "🎨"
        },
        {
          title: "Optimized Asset Loading",
          description: "Lazy loading of images, WebP format with PNG/JPG fallback, inline critical CSS, and essential resource preload for instant loading",
          icon: "⚡"
        },
        {
          title: "Responsive Design",
          description: "Adaptive layout that works perfectly from smartphones to 4K monitors",
          icon: "📱"
        },
        {
          title: "Smooth Transitions",
          description: "All interactions have fluid transitions and perfect timing",
          icon: "✨"
        }
      ],

      technologies: [
        { name: "React", category: "Framework" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "JavaScript", category: "Language" },
        { name: "Intersection Observer", category: "API" },
        { name: "CSS Animations", category: "Animation" }
      ],

      challenges: [
        {
          title: "Animation Performance",
          description: "Multiple simultaneous animations could cause jank.",
          solution: "Used CSS transforms and opacity (GPU accelerated) + Intersection Observer for efficient triggering."
        },
        {
          title: "Minimalism with Impact",
          description: "Balancing visual simplicity with attention-grabbing elements.",
          solution: "Clear visual hierarchy with generous whitespace and strategic accent colors."
        }
      ],

      gallery: [
        { image: "/img/hero-product.png", caption: "Hero section with product" },
        { image: "/img/iphone-seletor.png", caption: "Interactive color selector" },
        { image: "/img/iphone-comparison.png", caption: "Apple model comparison" },
        { image: "/img/iphone-desempenho.png", caption: "Apple model comparison" },
      ],

      metrics: {
        linesOfCode: "1200+",
        components: "8",
        loadTime: "<1.5s",
        lighthouse: "98/100/100/100",
        performance: "98/100"
      },

      links: {
        demo: "https://iphone17landing.vercel.app/",
        github: "https://github.com/Denilson-Faria/iPhone17Landing"
      },

      year: "2025",
      category: "Landing Page",
      accentColor: "cyan"
    },

    {
      id: 'netflix-clone',
      title: "Netflix Clone",
      tagline: "Complete Netflix clone with real API and 1000+ movies",
      shortDescription: "Real API • 1000+ Movies • Infinite Scroll",

      hero: {
        image: "/img/netflix.jpg",
        video: null,
        gradient: "from-red-600 to-pink-600"
      },

      overview: {
        problem: "Creating a streaming experience that replicates Netflix's premium interface, with fluid navigation among thousands of titles, optimized loading of high-resolution images, and instant search without compromising performance.",
        solution: "Developed using React with componentized architecture (15+ reusable components) and TMDB API integration for real data from 1000+ movies/series. Implemented infinite carousels with virtualization, persistent favorites system with localStorage, details modal with YouTube trailers, and custom hooks for shared logic.",
        result: "Complete responsive interface with 70% cache hit rate, loading skeletons for perceived performance, functional search with debounce, and premium experience on any device."
      },

      features: [
        {
          title: "API Integration",
          description: "TMDB API integration for real data from over 1000 movies and series, with automatic updates",
          icon: "🔌"
        },
        {
          title: "Infinite Scroll",
          description: "Infinite carousels with lazy loading for optimized performance even with large content volume",
          icon: "♾️"
        },
        {
          title: "Modal System",
          description: "Modal system with complete details, YouTube trailers, and cast information",
          icon: "🎬"
        },
        {
          title: "Favorites System",
          description: "Persistent favorites system using localStorage, allowing content to be saved between sessions",
          icon: "⭐"
        },
        {
          title: "Advanced Search",
          description: "Search with debounce (300ms) for request optimization, filters by genre/year/rating, paginated results, and real-time search term highlighting",
          icon: "🔍"
        },
        {
          title: "Loading States",
          description: "Loading skeletons for visual feedback during loading, improving perceived performance",
          icon: "⚡"
        }
      ],

      technologies: [
        { name: "React", category: "Framework" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "TMDB API", category: "API" },
        { name: "React Router", category: "Routing" },
        { name: "Context API", category: "State" },
        { name: "Axios", category: "HTTP" },
        { name: "LocalStorage", category: "Storage" }
      ],

      challenges: [
        {
          title: "Large Volume Performance",
          description: "With thousands of items, the challenge was keeping the interface fluid.",
          solution: "Implemented list virtualization and intelligent lazy loading to load only what's visible."
        },
        {
          title: "Complex State",
          description: "Managing favorites, filters, and loading states simultaneously.",
          solution: "Used Context API with custom reducers to centralize and organize global state."
        },
        {
          title: "Cache Strategy",
          description: "Avoiding repeated API calls for the same data, saving requests and improving speed.",
          solution: "In-memory cache with 30-minute TTL + localStorage for persistent favorites. 70% cache hit rate drastically reduced API calls."
        },
        {
          title: "Perfect Responsiveness",
          description: "Interface needs to work perfectly on all screen sizes.",
          solution: "Mobile-first approach with Tailwind, testing on multiple real devices."
        }
      ],

      gallery: [
        { image: "/img/netflix.jpg", caption: "Main page with carousels" },
        { image: "/img/modal-netflix.png", caption: "Details modal with trailer" },
        { image: "/img/busca-netflix.png", caption: "Search system" }
      ],

      metrics: {
        linesOfCode: "2500+",
        components: "15",
        totalMovies: "1000+",
        cacheHitRate: "70%",
        performance: "95/100"
      },

      links: {
        demo: "https://netflix-clone-df.vercel.app/",
        github: "https://github.com/Denilson-Faria/netflix-clone"
      },

      year: "2025",
      category: "Web Application",
      accentColor: "red"
    }
  ]
};

export const getProjectById = (id, language = 'pt') => {
  return projectsData[language].find(project => project.id === id);
};

export const getRelatedProjects = (currentId, language = 'pt', limit = 2) => {
  return projectsData[language]
    .filter(project => project.id !== currentId)
    .slice(0, limit);
};

export const getAllProjects = (language = 'pt') => {
  return projectsData[language];
};

export default projectsData;