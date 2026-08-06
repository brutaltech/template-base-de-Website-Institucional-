// content/site.ts

// Nota: os textos de prosa mencionam o nome da empresa. Ao personalizar,
// reescreva esses textos; um Ctrl+F pelo nome antigo ajuda a apanhar tudo.

// ── Tipos auxiliares ──────────────────────────────────────────────

export interface SeoMeta {
  /** Título apresentado no browser; pode usar o marcador `{companyName}`. */
  title: string;
  /** Resumo curto usado por motores de pesquisa e redes sociais. */
  description: string;
  /** Imagem social opcional; quando omitida usa `seoDefaults.ogImage`. */
  ogImage?: string;
}

export interface NavLink {
  /** Texto visível do link. */
  label: string;
  /** Rota interna iniciada por `/` ou URL externa completa. */
  href: string;
}

export interface Stat {
  /** Valor em texto para aceitar formatos como "120+" ou "98%". */
  value: string;
  /** Contexto curto apresentado por baixo do valor. */
  label: string;
}

export interface Service {
  /** Identificador único e estável, sem espaços. */
  id: string;
  /** Nome de um ícone suportado em `components/service-icon.tsx`. */
  icon: string;
  /** Nome público do serviço. */
  title: string;
  /** Resumo curto usado na Home e na lista. */
  description: string;
  /** Explicação longa usada na página de Serviços. */
  detail: string;
}

export interface TeamMember {
  /** Identificador único e estável, sem espaços. */
  id: string;
  /** Nome público da pessoa. */
  name: string;
  /** Função ou cargo apresentado junto ao nome. */
  role: string;
  /** Biografia curta; pode ser omitida. */
  bio?: string;
  /** Foto quadrada em `public/`; se faltar, o layout mostra iniciais. */
  photo?: string;
}

export interface Differentiator {
  /** Identificador único e estável, sem espaços. */
  id: string;
  /** Nome curto do diferenciador. */
  title: string;
  /** Explicação do benefício para o cliente. */
  description: string;
}

export interface PortfolioItem {
  /** Identificador único e estável, sem espaços. */
  id: string;
  /** Nome público do projeto. */
  title: string;
  /** Categoria usada na etiqueta do cartão. */
  category: string;
  /** Resumo do âmbito ou resultado do projeto. */
  description: string;
  /** Imagem 4:3 em `public/`; se faltar, o layout mostra um fallback. */
  image?: string;
}

export interface FaqItem {
  /** Identificador único e estável, sem espaços. */
  id: string;
  /** Pergunta apresentada ao visitante. */
  question: string;
  /** Resposta curta e objetiva. */
  answer: string;
}

export interface SocialLink {
  /** Rede social; determina também o ícone apresentado. */
  platform: 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'tiktok';
  /** URL completa do perfil do cliente. */
  url: string;
}

export interface BusinessHours {
  /** Dia ou intervalo, por exemplo "Segunda a sexta". */
  day: string;
  /** Horário em texto, por exemplo "09:00–18:00" ou "Encerrado". */
  hours: string;
}

export interface PageHeroContent {
  /** Título principal da abertura da página. */
  title: string;
  /** Texto introdutório apresentado sob o título. */
  subtitle: string;
}

export interface TitleDescription {
  /** Nome curto do bloco. */
  title: string;
  /** Explicação que acompanha o título. */
  description: string;
}

export interface FormLabels {
  /** Etiqueta do campo nome. */
  name: string;
  /** Etiqueta do campo email. */
  email: string;
  /** Etiqueta do campo telefone opcional. */
  phone: string;
  /** Etiqueta do campo mensagem. */
  message: string;
  /** Texto do botão de envio. */
  submit: string;
  /** Mensagem apresentada depois de um envio válido. */
  success: string;
  /** Mensagem genérica apresentada quando o envio falha. */
  error: string;
}

export interface ContactEmailTemplate {
  /** Assunto; mantém os marcadores `{companyName}` e `{senderName}`. */
  subject: string;
  /** Título principal apresentado no email HTML. */
  heading: string;
  /** Etiqueta do nome do remetente. */
  nameLabel: string;
  /** Etiqueta do email do remetente. */
  emailLabel: string;
  /** Etiqueta do telefone opcional. */
  phoneLabel: string;
  /** Etiqueta do corpo da mensagem. */
  messageLabel: string;
  /** Texto usado quando um campo opcional não foi preenchido. */
  notProvided: string;
}

export interface ContactValidationMessages {
  /** Erro apresentado quando o nome é demasiado curto. */
  nameMin: string;
  /** Erro apresentado quando o nome excede o limite. */
  nameMax: string;
  /** Erro apresentado quando o email não é válido. */
  emailInvalid: string;
  /** Erro apresentado quando o email excede o limite. */
  emailMax: string;
  /** Erro apresentado quando o telefone excede o limite. */
  phoneMax: string;
  /** Erro apresentado quando o telefone tem caracteres inválidos. */
  phoneInvalid: string;
  /** Erro apresentado quando a mensagem é demasiado curta. */
  messageMin: string;
  /** Erro apresentado quando a mensagem excede o limite. */
  messageMax: string;
}

/** Substitui marcadores `{chave}` sem alterar marcadores não fornecidos. */
export function interpolateContentTemplate(
  template: string,
  values: Readonly<Record<string, string>>,
) {
  return template.replace(/\{([a-zA-Z][\w]*)\}/g, (match, marker: string) =>
    values[marker] ?? match,
  );
}

// ── Conteúdo principal ────────────────────────────────────────────

export interface SiteContent {
  /** Identidade global usada no cabeçalho, rodapé, SEO e dados estruturados. */
  identity: {
    /** Nome principal da marca, sem descritores acrescentados apenas no SEO. */
    name: string;
    /** Frase curta de posicionamento. */
    tagline: string;
    /** Descrição institucional usada por omissão e no JSON-LD. */
    description: string;
    /** Logótipo para fundos escuros, guardado em `public/`. */
    logoLight: string;
    /** Logótipo para fundos claros, guardado em `public/`. */
    logoDark: string;
    /** Favicon servido a partir de `public/`. */
    favicon: string;
  };

  /** Contactos, localização, horários e presença social. */
  contact: {
    /** Email que recebe o formulário e aparece no site. */
    email: string;
    /** Telefone em formato legível, idealmente com indicativo. */
    phone: string;
    /** Número e mensagem que alimentam o botão flutuante de WhatsApp. */
    whatsapp: {
      /** Número com indicativo internacional. */
      number: string;
      /** Mensagem pré-preenchida na conversa. */
      defaultMessage: string;
    };
    /** Morada usada no site e nos dados estruturados. */
    address: {
      /** Rua, número e complemento. */
      street: string;
      /** Código postal. */
      postalCode: string;
      /** Localidade. */
      city: string;
      /** País por extenso. */
      country: string;
      /** URL de incorporação acoplado à morada; ao alterá-la, gere um novo embed seguindo o README e cole-o aqui. */
      mapEmbedUrl?: string;
    };
    /** Linhas de horário apresentadas no contacto. */
    hours: BusinessHours[];
    /** Perfis sociais; remover entradas não usadas. */
    social: SocialLink[];
  };

  /** Links da navegação principal. */
  nav: {
    /** Links apresentados no menu pela ordem definida. */
    links: NavLink[];
  };
  /** Texto institucional e links secundários do rodapé. */
  footer: {
    /** Frase de contexto; pode usar o marcador `{companyName}`. */
    text: string;
    /** Links legais ou secundários do rodapé. */
    links: NavLink[];
  };
  /** Metadados usados quando uma página não define os seus. */
  seoDefaults: SeoMeta;

  /** Conteúdo editável de todas as páginas do site. */
  pages: {
    /** Conteúdo da Home. */
    home: {
      /** Metadados exclusivos da Home. */
      seo: SeoMeta;
      /** Conteúdo, imagem e ação principal do hero. */
      hero: {
        /** Título principal H1. */
        title: string;
        /** Texto de apoio sob o título. */
        subtitle: string;
        /** Texto do botão principal. */
        ctaLabel: string;
        /** Destino do botão principal. */
        ctaHref: string;
        /** Imagem 16:9 do hero, guardada em `public/`. */
        image: string;
        /** Descrição acessível do conteúdo visual da imagem. */
        imageAlt: string;
      };
      /** Introdução à grelha de serviços. */
      servicesIntro: PageHeroContent;
      /** Indicadores numéricos ou factos de confiança. */
      stats: Stat[];
      /** Bloco de apresentação breve do negócio. */
      about: {
        /** Título do bloco. */
        title: string;
        /** Parágrafo de apresentação. */
        text: string;
        /** Texto do botão. */
        ctaLabel: string;
        /** Destino do botão. */
        ctaHref: string;
      };
      /** Chamada para ação no final da Home. */
      finalCta: {
        /** Título da chamada para ação. */
        title: string;
        /** Texto de apoio. */
        subtitle: string;
        /** Texto do botão. */
        ctaLabel: string;
        /** Destino do botão. */
        ctaHref: string;
      };
    };
    /** Conteúdo da página Sobre. */
    about: {
      /** Metadados exclusivos da página Sobre. */
      seo: SeoMeta;
      /** Título e subtítulo de abertura. */
      hero: PageHeroContent;
      /** História curta da empresa. */
      history: string;
      /** Missão ou objetivo central. */
      mission: string;
      /** Princípios da empresa. */
      values: TitleDescription[];
      /** Pessoas apresentadas na secção Equipa. */
      team: TeamMember[];
      /** Razões de escolha apresentadas no fecho da página. */
      differentiators: Differentiator[];
    };
    /** Conteúdo da página Serviços. */
    services: {
      /** Metadados exclusivos da página Serviços. */
      seo: SeoMeta;
      /** Título e subtítulo de abertura. */
      hero: PageHeroContent;
      /** Serviços apresentados na Home e na página dedicada. */
      items: Service[];
    };
    /** Conteúdo da página Portefólio. */
    portfolio: {
      /** Metadados exclusivos da página Portefólio. */
      seo: SeoMeta;
      /** Título e subtítulo de abertura. */
      hero: PageHeroContent;
      /** Projetos mostrados na grelha. */
      items: PortfolioItem[];
    };
    /** Conteúdo da página Contacto. */
    contact: {
      /** Metadados exclusivos da página Contacto. */
      seo: SeoMeta;
      /** Título e subtítulo de abertura. */
      hero: PageHeroContent;
      /** Etiquetas e mensagens do formulário. */
      formLabels: FormLabels;
      /** Texto integral do email enviado pelo formulário. */
      emailTemplate: ContactEmailTemplate;
      /** Mensagens usadas pela validação no browser e no servidor. */
      validationMessages: ContactValidationMessages;
      /** Perguntas frequentes opcionais. */
      faq?: FaqItem[];
    };
    /** Conteúdo da página 404. */
    notFound: {
      /** Metadados dedicados, sem URL canónica para a rota inexistente. */
      seo: SeoMeta;
      /** Título da página de erro. */
      title: string;
      /** Explicação curta do erro. */
      message: string;
      /** Texto do link de regresso à Home. */
      ctaLabel: string;
    };
  };
}

// Microcopy da interface: etiquetas de acessibilidade, títulos auxiliares e
// mensagens partilhadas pelos componentes. Personalize o texto, mas mantenha
// os marcadores `{platform}` e `{name}`, que são substituídos em runtime.
export const siteCopy = {
  layout: {
    /** Link de salto apresentado quando recebe foco. */
    skipLink: "Saltar para o conteúdo",
  },
  header: {
    /** Nome acessível da navegação principal. */
    primaryNavLabel: "Navegação principal",
    /** Nome acessível da navegação em ecrãs pequenos. */
    mobileNavLabel: "Navegação móvel",
    /** Nome acessível do botão que abre o menu. */
    openNavLabel: "Abrir navegação",
    /** Nome acessível do botão que fecha o menu. */
    closeNavLabel: "Fechar navegação",
  },
  footer: {
    /** Título da coluna de navegação. */
    navigationTitle: "Navegação",
    /** Título da coluna de contactos. */
    contactTitle: "Contacto",
    /** Nome acessível dos links sociais; mantém `{platform}` e `{name}`. */
    socialAriaLabel: "Abrir {platform} de {name}",
  },
  whatsapp: {
    /** Texto curto associado ao contacto por WhatsApp. */
    label: "WhatsApp",
    /** Nome acessível do botão; mantém o marcador `{name}`. */
    ariaLabel: "Enviar mensagem pelo WhatsApp para {name}",
  },
  home: {
    /** Nome acessível da ligação interna para os serviços. */
    servicesAnchorLabel: "Ver serviços",
    /** Nota gráfica apresentada junto ao hero. */
    heroNote:
      "Perspetiva como método: traço, plano e ponto de decisão alinhados antes da obra.",
    /** Sobretítulo da secção de serviços. */
    servicesEyebrow: "Serviços",
    /** Sobretítulo da apresentação institucional. */
    aboutEyebrow: "Atelier",
  },
  pageEyebrows: {
    /** Sobretítulo da página Sobre. */
    about: "Sobre",
    /** Sobretítulo da página Serviços. */
    services: "Serviços",
    /** Sobretítulo da página Portefólio. */
    portfolio: "Portefólio",
    /** Sobretítulo da página Contacto. */
    contact: "Contacto",
  },
  aboutPage: {
    /** Título da secção de história. */
    historyTitle: "História",
    /** Título da secção de missão. */
    missionTitle: "Missão",
    /** Sobretítulo da secção de valores. */
    valuesEyebrow: "Valores",
    /** Título da secção de valores. */
    valuesTitle: "Princípios que orientam cada decisão.",
    /** Sobretítulo da secção de equipa. */
    teamEyebrow: "Equipa",
    /** Título da secção de equipa. */
    teamTitle: "Pessoas com responsabilidades claras.",
    /** Sobretítulo da secção de diferenciadores. */
    differentiatorsEyebrow: "Diferenciadores",
    /** Título da secção de diferenciadores. */
    differentiatorsTitle: "Método visível, escala controlada.",
  },
  servicesPage: {
    /** Título da chamada para ação. */
    ctaTitle: "Comece pela fase em que o projeto está hoje.",
    /** Explicação da chamada para ação. */
    ctaText:
      "A partir do primeiro contacto, ajudamos a perceber se faz sentido arrancar por consultadoria, estudo prévio, interiores ou licenciamento.",
    /** Texto do botão da chamada para ação. */
    ctaLabel: "Pedir enquadramento",
  },
  contactPage: {
    /** Título do cartão do formulário. */
    formTitle: "Enviar mensagem",
    /** Título do cartão de contactos diretos. */
    directTitle: "Dados diretos",
    /** Título do cartão de horário. */
    hoursTitle: "Horário",
    /** Sobretítulo do bloco do mapa. */
    mapEyebrow: "Morada",
    /** Texto do botão que abre o mapa. */
    mapButtonLabel: "Abrir mapa",
    /** Sobretítulo da secção de perguntas frequentes. */
    faqEyebrow: "Perguntas frequentes",
    /** Título da secção de perguntas frequentes. */
    faqTitle: "Antes da primeira resposta.",
  },
  contactForm: {
    /** Etiqueta do campo anti-spam invisível. */
    honeypotLabel: "Empresa",
    /** Resumo apresentado quando a validação no browser falha. */
    clientErrorMessage: "Corrija os campos assinalados.",
    /** Texto do botão enquanto o envio está em curso. */
    pendingSubmit: "A enviar...",
  },
} as const;

// Rotas e metadados das páginas legais. O corpo de cada página está nos MDX
// correspondentes em `content/legal/`.
export const legalPages = {
  privacy: {
    /** Rota pública da política de privacidade. */
    href: "/politica-de-privacidade",
    /** Título H1 da política de privacidade. */
    title: "Política de Privacidade",
    seo: {
      /** Título SEO da política de privacidade. */
      title: "Política de Privacidade",
      /** Descrição SEO; mantém o marcador `{companyName}`. */
      description:
        "Política de privacidade do site de {companyName}.",
    },
  },
  terms: {
    /** Rota pública dos termos de utilização. */
    href: "/termos",
    /** Título H1 dos termos de utilização. */
    title: "Termos",
    seo: {
      /** Título SEO dos termos de utilização. */
      title: "Termos",
      /** Descrição SEO; mantém o marcador `{companyName}`. */
      description:
        "Termos de utilização do site de {companyName}.",
    },
  },
} as const;

// Conteúdo principal do cliente. A ordem dos arrays é a ordem apresentada no
// site; remover ou acrescentar entradas atualiza as grelhas automaticamente.
export const siteContent: SiteContent = {
  identity: {
    name: "Ponto de Fuga",
    tagline: "Projetos rigorosos para casas e espaços de trabalho",
    description:
      "Atelier de arquitetura e design de interiores em Matosinhos, focado em projetos residenciais e comerciais de pequena e média escala.",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    favicon: "/images/favicon.svg",
  },

  contact: {
    email: "geral@pontodefuga.example",
    phone: "+351 220 123 456",
    whatsapp: {
      number: "+351 910 000 321",
      defaultMessage:
        "Olá, gostaria de falar convosco sobre um projeto de arquitetura ou interiores.",
    },
    address: {
      street: "Rua da Linha do Horizonte, 42, Sala 3.2",
      postalCode: "4450-999",
      city: "Matosinhos",
      country: "Portugal",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Rua%20da%20Linha%20do%20Horizonte%2042%20Matosinhos%20Portugal&output=embed",
    },
    hours: [
      { day: "Segunda a sexta", hours: "09:30–18:30" },
      { day: "Sábado", hours: "Por marcação" },
      { day: "Domingo", hours: "Encerrado" },
    ],
    social: [
      { platform: "instagram", url: "https://instagram.com/pontodefuga.example" },
      { platform: "linkedin", url: "https://linkedin.com/company/pontodefuga-example" },
    ],
  },

  nav: {
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Portefólio", href: "/portfolio" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  footer: {
    text: "{companyName} — Arquitetura e Interiores. Atelier fictício para template institucional.",
    links: [
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Termos", href: "/termos" },
    ],
  },
  seoDefaults: {
    title: "{companyName} — Arquitetura e Interiores",
    description:
      "Projetos de arquitetura, interiores e licenciamento para habitação e comércio em Matosinhos.",
    ogImage: "/images/og/ponto-de-fuga.webp",
  },

  pages: {
    home: {
      seo: {
        title: "{companyName} — Arquitetura e Interiores",
        description:
          "Atelier em Matosinhos para projetos residenciais, interiores comerciais e apoio ao licenciamento.",
      },
      hero: {
        title: "Arquitetura clara para espaços que precisam de funcionar bem.",
        subtitle:
          "Desenvolvemos projetos residenciais e comerciais com desenho cuidado, documentação rigorosa e decisões explicadas sem ruído.",
        ctaLabel: "Marcar reunião",
        ctaHref: "/contacto",
        image: "/images/home/atelier-hero.webp",
        imageAlt:
          "Interior contemporâneo em madeira e pedra natural aberto para um pátio junto ao Atlântico",
      },
      servicesIntro: {
        title: "Serviços principais",
        subtitle:
          "Do estudo inicial ao processo camarário, trabalhamos com uma estrutura simples e documentação verificável.",
      },
      stats: [
        { value: "12", label: "anos de prática em projeto" },
        { value: "48", label: "obras acompanhadas" },
        { value: "3", label: "áreas de serviço nucleares" },
      ],
      about: {
        title: "Um atelier pequeno, com método técnico.",
        text:
          "A equipa trabalha perto do cliente e dos consultores externos para transformar condicionantes reais em soluções construíveis.",
        ctaLabel: "Conhecer o atelier",
        ctaHref: "/sobre",
      },
      finalCta: {
        title: "Tem uma casa, loja ou escritório para repensar?",
        subtitle:
          "Envie-nos o ponto de partida: localização, objetivo e fase em que o projeto está.",
        ctaLabel: "Falar connosco",
        ctaHref: "/contacto",
      },
    },
    about: {
      seo: {
        title: "Sobre o atelier",
        description:
          "Conheça a equipa, método e princípios de trabalho de {companyName} em Matosinhos.",
      },
      hero: {
        title: "Desenho, detalhe e obra no mesmo plano de trabalho.",
        subtitle:
          "Somos um atelier de Matosinhos com foco em encomendas de escala contida, onde cada decisão tem impacto direto no uso diário.",
      },
      history:
        "O Ponto de Fuga nasceu em 2018 depois de vários anos de colaboração em gabinetes de arquitetura no Porto. A estrutura mantém-se pequena para garantir proximidade e responsabilidade técnica em cada projeto.",
      mission:
        "Criar espaços claros, viáveis e bem documentados, equilibrando ambição de desenho, orçamento disponível e exigências legais.",
      values: [
        {
          title: "Clareza",
          description:
            "Explicamos opções, riscos e próximos passos com linguagem direta.",
        },
        {
          title: "Rigor",
          description:
            "Cada fase tem peças desenhadas, listas e decisões registadas.",
        },
        {
          title: "Proporção",
          description:
            "A solução deve fazer sentido para o uso, a escala e o investimento.",
        },
      ],
      team: [
        {
          id: "ines-monteiro",
          name: "Inês Monteiro",
          role: "Arquiteta fundadora",
          bio: "Coordena projetos de arquitetura e acompanha processos de licenciamento.",
          photo: "/images/team/ines-monteiro.webp",
        },
        {
          id: "rui-valente",
          name: "Rui Valente",
          role: "Designer de interiores",
          bio: "Desenvolve conceitos de interiores, materiais e desenho de mobiliário fixo.",
          photo: "/images/team/rui-valente.webp",
        },
        {
          id: "marta-cunha",
          name: "Marta Cunha",
          role: "Gestora de projeto",
          bio: "Organiza prazos, documentação e comunicação entre cliente, equipa e obra.",
          photo: "/images/team/marta-cunha.webp",
        },
      ],
      differentiators: [
        {
          id: "processo-visivel",
          title: "Processo visível",
          description:
            "O cliente sabe sempre que decisões estão em aberto e que informação falta fechar.",
        },
        {
          id: "documentacao-limpa",
          title: "Documentação limpa",
          description:
            "Peças escritas e desenhadas preparadas para consulta, orçamento e licenciamento.",
        },
        {
          id: "escala-controlada",
          title: "Escala controlada",
          description:
            "Aceitamos poucos projetos em simultâneo para manter resposta técnica próxima.",
        },
      ],
    },
    services: {
      seo: {
        title: "Serviços",
        description:
          "Serviços de arquitetura, interiores, consultadoria e licenciamento em Matosinhos.",
      },
      hero: {
        title: "Serviços para definir, desenhar e aprovar o projeto.",
        subtitle:
          "A intervenção pode começar numa ideia vaga, num imóvel em avaliação ou num processo que precisa de ser organizado.",
      },
      items: [
        {
          id: "arquitetura",
          icon: "DraftingCompass",
          title: "Projeto de arquitetura",
          description:
            "Estudos prévios e projetos para habitação, lojas e pequenos escritórios.",
          detail:
            "Desenvolvemos o projeto desde o levantamento e estudo prévio até às peças necessárias para consulta a empreiteiros e submissão municipal, quando aplicável.",
        },
        {
          id: "interiores",
          icon: "LampDesk",
          title: "Design de interiores",
          description:
            "Organização espacial, materiais, iluminação e mobiliário fixo.",
          detail:
            "Trabalhamos layouts, mapas de acabamentos, desenhos de carpintaria e seleção de elementos essenciais para tornar o espaço coerente e executável.",
        },
        {
          id: "consultadoria-licenciamento",
          icon: "FileCheck2",
          title: "Consultadoria e licenciamento",
          description:
            "Análise de viabilidade, apoio técnico e preparação de processos.",
          detail:
            "Avaliamos condicionantes urbanísticas, identificamos riscos antes da compra ou obra e organizamos documentação para processos de licenciamento ou comunicação prévia.",
        },
      ],
    },
    portfolio: {
      seo: {
        title: "Portefólio",
        description:
          "Projetos residenciais e comerciais fictícios do atelier {companyName}.",
      },
      hero: {
        title: "Projetos recentes em habitação e comércio local.",
        subtitle:
          "Uma amostra curta para testar conteúdos reais sem fechar ainda uma direção visual.",
      },
      items: [
        {
          id: "apartamento-leca",
          title: "Apartamento em Leça",
          category: "Habitação",
          description:
            "Reorganização de T2 dos anos 80 com cozinha aberta e arrumação integrada.",
          image: "/images/portfolio/apartamento-leca.webp",
        },
        {
          id: "loja-senhora-hora",
          title: "Loja na Senhora da Hora",
          category: "Comércio",
          description:
            "Projeto de interiores para loja de bairro com frente estreita e zona técnica compacta.",
          image: "/images/portfolio/loja-senhora-hora.webp",
        },
        {
          id: "moradia-lavra",
          title: "Moradia em Lavra",
          category: "Habitação",
          description:
            "Estudo de ampliação com nova ligação ao jardim e revisão de circulação interior.",
          image: "/images/portfolio/moradia-lavra.webp",
        },
        {
          id: "escritorio-matosinhos-sul",
          title: "Escritório em Matosinhos Sul",
          category: "Trabalho",
          description:
            "Adaptação de fração para equipa de oito pessoas, com sala de reunião e copa discreta.",
          image: "/images/portfolio/escritorio-matosinhos-sul.webp",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Contacte {companyName} para discutir projetos de arquitetura e interiores em Matosinhos.",
      },
      hero: {
        title: "Conte-nos onde está o projeto e o que precisa de resolver.",
        subtitle:
          "Respondemos com próximos passos, informação em falta e uma estimativa clara de faseamento.",
      },
      formLabels: {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        message: "Mensagem",
        submit: "Enviar pedido",
        success: "Obrigado. Vamos responder assim que possível.",
        error: "Não foi possível enviar. Tente novamente ou use o email direto.",
      },
      emailTemplate: {
        subject: "Novo pedido para {companyName} — {senderName}",
        heading: "Novo pedido de contacto para {companyName}",
        nameLabel: "Nome",
        emailLabel: "Email",
        phoneLabel: "Telefone",
        messageLabel: "Mensagem",
        notProvided: "Não indicado",
      },
      validationMessages: {
        nameMin: "Indique o seu nome.",
        nameMax: "Indique um nome mais curto.",
        emailInvalid: "Indique um email válido.",
        emailMax: "Indique um email mais curto.",
        phoneMax: "Indique um telefone mais curto.",
        phoneInvalid: "Indique um telefone válido.",
        messageMin: "Escreva uma mensagem com mais algum contexto.",
        messageMax: "Reduza a mensagem para menos de 2000 caracteres.",
      },
      faq: [
        {
          id: "primeira-reuniao",
          question: "A primeira reunião tem custo?",
          answer:
            "A chamada inicial de enquadramento não tem custo. Estudos técnicos ou visitas são orçamentados antes de avançar.",
        },
        {
          id: "zonas",
          question: "Trabalham fora de Matosinhos?",
          answer:
            "Sim. A maioria dos projetos fica na área do Porto, Matosinhos e Gaia, mas avaliamos outros concelhos caso a escala faça sentido.",
        },
      ],
    },
    notFound: {
      seo: {
        title: "Página não encontrada",
        description: "A página pedida não existe ou foi movida.",
      },
      title: "Página não encontrada",
      message: "A página que tentou abrir não existe ou foi movida.",
      ctaLabel: "Voltar ao início",
    },
  },
};
