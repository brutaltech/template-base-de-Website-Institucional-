import type { SiteContent } from "./site";

export const stressTestSiteContent: SiteContent = {
  identity: {
    name: "Ponto de Fuga — Atelier de Arquitetura, Interiores, Consultadoria Técnica e Processos Urbanísticos de Pequena e Média Escala",
    tagline:
      "Projetos residenciais e comerciais com análise técnica, detalhe de execução e acompanhamento próximo desde a primeira dúvida até à obra possível",
    description:
      "Atelier fictício de arquitetura e design de interiores em Matosinhos, criado para stress-testar layouts institucionais com conteúdo extenso.",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    favicon: "/favicon.ico",
  },

  contact: {
    email: "projetos@pontodefuga.example",
    phone: "+351 220 987 654",
    whatsapp: {
      number: "+351 930 000 654",
      defaultMessage:
        "Olá, tenho um imóvel ou espaço comercial para avaliar e gostaria de perceber como podem ajudar.",
    },
    address: {
      street: "Travessa Técnica do Norte, 18, Piso 2, Fração B",
      postalCode: "4450-998",
      city: "Matosinhos",
      country: "Portugal",
      mapEmbedUrl: "https://maps.example.com/embed/ponto-de-fuga",
    },
    hours: [
      { day: "Segunda", hours: "09:00–18:30" },
      { day: "Terça", hours: "09:00–18:30" },
      { day: "Quarta", hours: "09:00–18:30" },
      { day: "Quinta", hours: "09:00–18:30" },
      { day: "Sexta", hours: "09:00–17:00" },
      { day: "Sábado", hours: "10:00–13:00 por marcação" },
      { day: "Domingo", hours: "Encerrado" },
    ],
    social: [
      { platform: "instagram", url: "https://instagram.com/pontodefuga.example" },
      { platform: "facebook", url: "https://facebook.com/pontodefuga.example" },
      { platform: "linkedin", url: "https://linkedin.com/company/pontodefuga-example" },
      { platform: "youtube", url: "https://youtube.com/@pontodefuga-example" },
      { platform: "tiktok", url: "https://tiktok.com/@pontodefuga-example" },
    ],
  },

  nav: {
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre o atelier", href: "/sobre" },
      { label: "Serviços técnicos", href: "/servicos" },
      { label: "Portefólio selecionado", href: "/portfolio" },
      { label: "Contacto e briefing", href: "/contacto" },
    ],
  },
  footer: {
    text: "Ponto de Fuga — Atelier de Arquitetura, Interiores, Consultadoria Técnica e Processos Urbanísticos. Conteúdo fictício para testes de template.",
    links: [
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Termos e condições", href: "/termos" },
      { label: "Livro de reclamações", href: "/legal/livro-de-reclamacoes" },
      { label: "Mapa do site", href: "/mapa" },
    ],
  },
  seoDefaults: {
    title:
      "Ponto de Fuga — Arquitetura, Interiores, Consultadoria Técnica e Licenciamento",
    description:
      "Template institucional com conteúdo longo para testar páginas de arquitetura, interiores, licenciamento, equipa, portefólio e contacto.",
    ogImage: "/images/og/ponto-de-fuga-stress-test.jpg",
  },

  pages: {
    home: {
      seo: {
        title:
          "Ponto de Fuga — Atelier de Arquitetura e Interiores em Matosinhos",
        description:
          "Projetos residenciais, comerciais, consultadoria técnica e licenciamento com conteúdo extenso para stress-test de layout.",
        ogImage: "/images/og/home-stress-test.jpg",
      },
      hero: {
        title:
          "Arquitetura, interiores e licenciamento para espaços pequenos, complexos e cheios de condicionantes reais.",
        subtitle:
          "Trabalhamos com clientes que precisam de transformar um imóvel, uma loja, um escritório ou uma dúvida técnica num processo claro, faseado e documentado, sem perder de vista orçamento, prazos e exigências municipais.",
        ctaLabel: "Preparar briefing técnico",
        ctaHref: "/contacto",
        image: "/images/home/atelier-hero.webp",
        imageAlt:
          "Interior contemporâneo aberto para um pátio junto ao Atlântico",
      },
      servicesIntro: {
        title: "Serviços que cobrem as fases críticas do projeto",
        subtitle:
          "Da primeira avaliação do imóvel à revisão de detalhes de obra, cada serviço tem entregáveis definidos e decisões registadas.",
      },
      stats: [
        { value: "120+", label: "estudos, desenhos e peças técnicas produzidos" },
        { value: "98%", label: "projetos entregues dentro do faseamento acordado" },
        { value: "8", label: "serviços preparados para combinações modulares" },
        { value: "6", label: "perfis de equipa para testar grelhas longas" },
        { value: "7", label: "casos de portefólio com imagens e descrições variáveis" },
      ],
      about: {
        title:
          "Uma estrutura pequena para decisões de projeto que não se perdem pelo caminho.",
        text:
          "O atelier trabalha com um núcleo interno reduzido e consultores externos quando a escala pede especialidades. Esta opção mantém a comunicação direta, reduz camadas de aprovação e permite explicar cada mudança no desenho com base técnica.",
        ctaLabel: "Ver método e equipa",
        ctaHref: "/sobre",
      },
      finalCta: {
        title:
          "Quando o imóvel levanta mais perguntas do que respostas, vale a pena começar pela análise.",
        subtitle:
          "Envie plantas, fotografias, morada aproximada e objetivo. Respondemos com uma proposta de próximos passos, indicando se faz sentido começar por consultadoria, estudo prévio ou processo de licenciamento.",
        ctaLabel: "Enviar informação inicial",
        ctaHref: "/contacto",
      },
    },
    about: {
      seo: {
        title: "Sobre o Ponto de Fuga",
        description:
          "História, missão, valores, equipa e diferenciadores do atelier fictício Ponto de Fuga em Matosinhos.",
      },
      hero: {
        title:
          "Um atelier desenhado para projetos onde escala pequena não significa baixa complexidade.",
        subtitle:
          "Muitos dos nossos casos começam com apartamentos antigos, lojas estreitas, frações com histórico irregular ou espaços de trabalho que precisam de funcionar melhor sem obra excessiva.",
      },
      history:
        "O Ponto de Fuga foi criado em 2018 por profissionais que vinham de gabinetes de arquitetura, interiores e gestão de obra. O objetivo era montar uma prática mais direta para clientes particulares e pequenos negócios, com foco em documentação clara e decisões construtivas. Ao longo dos anos, o atelier consolidou um método em que levantamento, análise regulamentar, desenho e orçamento preliminar avançam de forma coordenada.",
      mission:
        "A missão é produzir projetos viáveis e bem explicados, capazes de resistir ao confronto com orçamento, licenciamento, fornecedores e obra. Não procuramos inflacionar a intervenção: procuramos que cada decisão tenha utilidade, coerência espacial e enquadramento técnico.",
      values: [
        {
          title: "Rigor antes da imagem",
          description:
            "A apresentação visual só interessa quando está apoiada por medidas, regras, materiais e decisões possíveis de executar.",
        },
        {
          title: "Comunicação direta",
          description:
            "Preferimos linguagem concreta, com riscos assumidos e próximos passos claros, em vez de promessas vagas.",
        },
        {
          title: "Responsabilidade de escala",
          description:
            "A solução deve respeitar o investimento, o tempo disponível e a capacidade real de obra.",
        },
        {
          title: "Memória do processo",
          description:
            "Registamos decisões, versões e condicionantes para evitar discussões repetidas e perdas de informação.",
        },
      ],
      team: [
        {
          id: "ines-monteiro",
          name: "Inês Monteiro",
          role: "Arquiteta fundadora e coordenadora de projeto",
          bio: "Coordena estudos prévios, projetos de arquitetura e processos de licenciamento. Tem experiência em reabilitação leve, alterações de uso e compatibilização entre desenho, orçamento e requisitos municipais. No atelier, acompanha especialmente as fases em que uma decisão espacial precisa de ser traduzida em peças técnicas claras.",
          photo: "/images/team/ines-monteiro.jpg",
        },
        {
          id: "rui-valente",
          name: "Rui Valente",
          role: "Designer de interiores e detalhe de mobiliário",
          bio: "Trabalha layouts interiores, sistemas de arrumação, mapas de acabamentos e desenho de peças fixas. O seu foco está em tornar o espaço legível no uso diário, evitando soluções decorativas que criem problemas de manutenção, orçamento ou execução.",
          photo: "/images/team/rui-valente.jpg",
        },
        {
          id: "marta-cunha",
          name: "Marta Cunha",
          role: "Gestora de projeto e comunicação com cliente",
          bio: "Organiza calendário, documentação, pedidos pendentes e comunicação entre cliente, equipa técnica e fornecedores. Garante que as decisões críticas ficam registadas e que cada fase começa com informação suficiente para avançar sem retrabalho desnecessário.",
        },
        {
          id: "tiago-nobre",
          name: "Tiago Nobre",
          role: "Arquiteto júnior",
          bio: "Apoia levantamentos, modelação, desenhos de execução e preparação de peças para consulta. Tem especial atenção à consistência gráfica e à leitura rápida das peças técnicas por quem vai orçamentar ou executar.",
          photo: "/images/team/tiago-nobre.jpg",
        },
        {
          id: "sofia-almeida",
          name: "Sofia Almeida",
          role: "Consultora de materiais e acabamentos",
          bio: "Pesquisa materiais, sistemas de revestimento e soluções de iluminação adequadas a uso intensivo, manutenção simples e orçamento controlado. Ajuda a transformar intenções de ambiente em opções específicas, comparáveis e compráveis.",
          photo: "/images/team/sofia-almeida.jpg",
        },
        {
          id: "joao-serra",
          name: "João Serra",
          role: "Acompanhamento de obra e fornecedores",
          bio: "Faz visitas técnicas, regista pontos críticos em obra e articula pedidos de esclarecimento com empreiteiros e fornecedores. A sua intervenção é especialmente útil quando o projeto entra na fase em que desenhos, materiais e decisões de orçamento precisam de convergir.",
        },
      ],
      differentiators: [
        {
          id: "analise-inicial",
          title: "Análise inicial documentada",
          description:
            "Antes de desenhar em detalhe, identificamos condicionantes legais, técnicas e orçamentais.",
        },
        {
          id: "pecas-claras",
          title: "Peças técnicas preparadas para uso real",
          description:
            "Desenhos, mapas e notas são produzidos para apoiar decisões, orçamentos e obra.",
        },
        {
          id: "reunioes-com-objetivo",
          title: "Reuniões com objetivo definido",
          description:
            "Cada reunião fecha dúvidas concretas e termina com responsáveis, datas e informação em falta.",
        },
        {
          id: "rede-ajustada",
          title: "Rede técnica ajustada à escala",
          description:
            "Chamamos especialidades quando acrescentam segurança ou são exigidas, sem aumentar a equipa por hábito.",
        },
      ],
    },
    services: {
      seo: {
        title: "Serviços técnicos",
        description:
          "Lista extensa de serviços de arquitetura, interiores, consultadoria, licenciamento e obra para stress-test de template.",
      },
      hero: {
        title:
          "Serviços independentes, combináveis e preparados para diferentes fases de decisão.",
        subtitle:
          "Pode entrar com uma casa por comprar, uma loja já arrendada, uma obra parada ou apenas a necessidade de perceber se uma alteração é legalmente viável.",
      },
      items: [
        {
          id: "projeto-arquitetura",
          icon: "DraftingCompass",
          title: "Projeto de arquitetura",
          description:
            "Estudo, anteprojeto e peças técnicas para habitação e comércio.",
          detail:
            "Inclui levantamento, análise de condicionantes, estudo prévio, desenvolvimento de solução, peças desenhadas e apoio na preparação de documentação para consulta, licenciamento ou comunicação prévia.",
        },
        {
          id: "reabilitacao-apartamentos",
          icon: "Hammer",
          title: "Reabilitação de apartamentos",
          description:
            "Reorganização de frações existentes com foco em uso, luz e arrumação.",
          detail:
            "Avaliamos estrutura existente, redes, limitações de condomínio, entradas de luz e prioridades de investimento para propor intervenções proporcionadas à idade e potencial do imóvel.",
        },
        {
          id: "design-interiores",
          icon: "LampDesk",
          title: "Design de interiores",
          description:
            "Layouts, materiais, iluminação, mobiliário fixo e ambiente geral.",
          detail:
            "Desenvolvemos plantas de organização, referências controladas, mapas de materiais, desenhos de carpintaria e compatibilização entre intenção visual, manutenção e execução.",
        },
        {
          id: "consultadoria-pre-compra",
          icon: "SearchCheck",
          title: "Consultadoria pré-compra",
          description:
            "Avaliação rápida de potencial, riscos e custos prováveis antes da decisão.",
          detail:
            "Analisamos plantas, fotografias, documentação disponível e enquadramento urbanístico para ajudar a perceber se o imóvel permite a intervenção pretendida.",
        },
        {
          id: "licenciamento",
          icon: "FileCheck2",
          title: "Licenciamento municipal",
          description:
            "Preparação, organização e acompanhamento de processos camarários.",
          detail:
            "Reunimos peças necessárias, articulamos especialidades quando aplicável e acompanhamos respostas a pedidos de elementos ou esclarecimentos técnicos.",
        },
        {
          id: "levantamentos",
          icon: "Ruler",
          title: "Levantamentos e medições",
          description:
            "Registo métrico e fotográfico para arrancar com dados fiáveis.",
          detail:
            "Fazemos medições no local, identificação de elementos fixos, registo fotográfico e desenhos base para reduzir incerteza nas fases seguintes.",
        },
        {
          id: "acompanhamento-obra",
          icon: "ClipboardCheck",
          title: "Acompanhamento de obra",
          description:
            "Visitas técnicas e apoio à resolução de dúvidas durante execução.",
          detail:
            "Acompanhamos pontos críticos, respondemos a pedidos de esclarecimento e registamos decisões de obra que impactam desenho, custo ou prazo.",
        },
        {
          id: "coordenacao-especialidades",
          icon: "Network",
          title: "Coordenação de especialidades",
          description:
            "Articulação com estabilidade, águas, térmica, acústica e segurança.",
          detail:
            "Quando o projeto exige equipas externas, ajudamos a coordenar entradas, compatibilizar peças e manter uma linha de decisão coerente.",
        },
      ],
    },
    portfolio: {
      seo: {
        title: "Portefólio completo",
        description:
          "Sete projetos fictícios de habitação, comércio e trabalho para testar grelhas e cartões de portefólio.",
      },
      hero: {
        title:
          "Casos fictícios com comprimentos diferentes, categorias variadas e imagens opcionais.",
        subtitle:
          "Este conjunto foi escrito para forçar quebras de título, alturas de cartões, descrições longas e ausência de imagem em componentes futuros.",
      },
      items: [
        {
          id: "apartamento-leca",
          title: "Apartamento em Leça com cozinha aberta e corredor transformado em arrumação técnica",
          category: "Habitação",
          description:
            "Reorganização de apartamento T2 dos anos 80, com demolições controladas, melhoria da relação entre sala e cozinha e desenho de armários para resolver falta de arrumação.",
          image: "/images/portfolio/apartamento-leca.jpg",
        },
        {
          id: "loja-senhora-hora",
          title: "Loja de serviços na Senhora da Hora",
          category: "Comércio",
          description:
            "Interiores para loja de frente estreita, incluindo receção, atendimento rápido, zona técnica oculta e materiais resistentes a uso diário.",
          image: "/images/portfolio/loja-senhora-hora.jpg",
        },
        {
          id: "moradia-lavra",
          title: "Ampliação de moradia em Lavra",
          category: "Habitação",
          description:
            "Estudo prévio para ampliar zona social, melhorar acesso ao jardim e clarificar a separação entre áreas técnicas e zonas de estar.",
        },
        {
          id: "escritorio-matosinhos-sul",
          title: "Escritório compacto em Matosinhos Sul",
          category: "Trabalho",
          description:
            "Conversão de fração em pequeno escritório com oito postos, sala de reunião informal, copa discreta e armazenamento fechado.",
          image: "/images/portfolio/escritorio-matosinhos-sul.jpg",
        },
        {
          id: "clinica-ramalde",
          title: "Clínica de fisioterapia em Ramalde",
          category: "Saúde",
          description:
            "Organização de receção, gabinetes e zona de exercício com atenção a circulação, privacidade visual e limpeza dos percursos.",
          image: "/images/portfolio/clinica-ramalde.jpg",
        },
        {
          id: "estudio-bonfim",
          title: "Estúdio no Bonfim",
          category: "Alojamento",
          description:
            "Revisão de layout para estúdio pequeno, com cozinha linear, banho compacto e mobiliário fixo capaz de separar funções sem fechar o espaço.",
          image: "/images/portfolio/estudio-bonfim.jpg",
        },
        {
          id: "cafe-matosinhos-mercado",
          title: "Café junto ao mercado municipal de Matosinhos",
          category: "Restauração",
          description:
            "Estudo de interiores e percurso de atendimento para espaço com operação curta ao almoço e necessidade de manutenção simples.",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contacto e briefing",
        description:
          "Formulário e perguntas frequentes para contacto com o atelier fictício Ponto de Fuga.",
      },
      hero: {
        title:
          "Quanto melhor for o ponto de partida, mais útil será a primeira resposta.",
        subtitle:
          "Partilhe localização, fotografias, plantas, objetivo, prazo aproximado e dúvidas principais. Não precisa de ter tudo fechado: basta indicar o que já sabe e o que ainda está em aberto.",
      },
      formLabels: {
        name: "Nome completo",
        email: "Email para resposta",
        phone: "Telefone ou WhatsApp",
        message: "Mensagem, contexto do imóvel e objetivo principal",
        submit: "Enviar briefing",
        success:
          "Recebemos a informação. Vamos analisar e responder com próximos passos.",
        error:
          "O envio falhou. Pode tentar novamente ou escrever diretamente para o email indicado.",
      },
      faq: [
        {
          id: "documentos",
          question: "Que documentos devo enviar no primeiro contacto?",
          answer:
            "Se tiver, envie plantas, caderneta predial, fotografias, morada aproximada e uma lista curta do que pretende alterar. Quando não existe documentação, indicamos como começar pelo levantamento.",
        },
        {
          id: "prazos",
          question: "Conseguem dar prazos logo na primeira resposta?",
          answer:
            "Damos uma estimativa de faseamento, mas prazos fiáveis dependem de acesso ao imóvel, documentação existente, necessidade de especialidades e enquadramento municipal.",
        },
        {
          id: "orcamento",
          question: "O atelier faz orçamento de obra?",
          answer:
            "Podemos apoiar a consulta a empreiteiros e comparar propostas, mas a execução e o preço final são responsabilidade das empresas consultadas.",
        },
        {
          id: "licenca",
          question: "Todas as obras precisam de licença?",
          answer:
            "Não. Algumas intervenções podem não exigir licenciamento, mas é preciso avaliar caso a caso conforme o imóvel, a intervenção e o regulamento aplicável.",
        },
      ],
    },
    notFound: {
      title: "Página não encontrada",
      message:
        "O endereço que tentou abrir não corresponde a nenhuma página disponível neste template de teste.",
      ctaLabel: "Regressar à página inicial",
    },
  },
};
