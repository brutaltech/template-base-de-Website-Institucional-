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

// ── Tema e tokens visuais ────────────────────────────────────────────

/** Paleta visual do site e dos emails. */
export const siteTheme = {
  colors: {
    /** Cor principal para texto, botões e elementos estruturais. */
    primary: "#1b343d",
    /** Cor escura para superfícies de alto contraste. */
    secondary: "#002030",
    /** Cor de destaque sobre superfícies claras. */
    accent: "#a9522c",
    /** Cor de destaque com contraste AA sobre `secondary`. */
    accentOnDark: "#d88760",
    /** Texto secundário sólido com contraste AA sobre fundos claros. */
    mutedText: "#617277",
    /** Fundo principal da página. */
    canvas: "#fcfcf6",
    /** Fundo alternativo de secções. */
    surface: "#ecf4ee",
    /** Fundo subtil de cartões e elementos de apoio. */
    surfaceSoft: "#f7faf4",
    /** Cor do atalho de WhatsApp e estados de sucesso. */
    success: "#127946",
    /** Estado hover da cor de sucesso. */
    successHover: "#036035",
    /** Branco da marca, usado também em transparências. */
    white: "#ffffff",
  },
} as const;

/** Variáveis injetadas no elemento `<html>` pelo layout raiz. */
export const siteThemeCssVariables = {
  "--site-color-primary": siteTheme.colors.primary,
  "--site-color-secondary": siteTheme.colors.secondary,
  "--site-color-accent": siteTheme.colors.accent,
  "--site-color-accent-on-dark": siteTheme.colors.accentOnDark,
  "--site-color-muted-text": siteTheme.colors.mutedText,
  "--site-color-canvas": siteTheme.colors.canvas,
  "--site-color-surface": siteTheme.colors.surface,
  "--site-color-surface-soft": siteTheme.colors.surfaceSoft,
  "--site-color-success": siteTheme.colors.success,
  "--site-color-success-hover": siteTheme.colors.successHover,
  "--site-color-white": siteTheme.colors.white,
} as const;

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
      "Preço fechado: 399€. Prazo fechado: 5 dias úteis. Sem surpresas.",
    /** Sobretítulo da secção de serviços. */
    servicesEyebrow: "Serviços",
    /** Sobretítulo da apresentação institucional. */
    aboutEyebrow: "BrutalTech",
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
    valuesTitle: "Princípios simples, aplicados a cada projeto.",
    /** Sobretítulo da secção de equipa. */
    teamEyebrow: "Equipa",
    /** Título da secção de equipa. */
    teamTitle: "Três pessoas, uma equipa completa.",
    /** Sobretítulo da secção de diferenciadores. */
    differentiatorsEyebrow: "Diferenciadores",
    /** Título da secção de diferenciadores. */
    differentiatorsTitle: "Preço, prazo e trabalho sem surpresas.",
  },
  servicesPage: {
    /** Título da chamada para ação. */
    ctaTitle: "O seu negócio precisa de um site que trabalhe por si.",
    /** Explicação da chamada para ação. */
    ctaText:
      "Diga-nos o que vende e de que precisa. Respondemos com a solução, o preço e o prazo antes de começar.",
    /** Texto do botão da chamada para ação. */
    ctaLabel: "Pedir proposta",
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
    faqTitle: "O que precisa de saber antes de avançar.",
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
    name: "BrutalTech",
    tagline: "Sites profissionais. Preço fechado. Prazo fechado.",
    description:
      "Empresa de tecnologia no Porto que cria sites profissionais para pequenos negócios, com preço e prazo definidos desde o início.",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    favicon: "/images/favicon.svg",
  },

  contact: {
    email: "geral@pontodefuga.example",
    phone: "+351 220 145 870",
    whatsapp: {
      number: "+351 912 345 678",
      defaultMessage:
        "Olá, quero saber mais sobre o Site Institucional da BrutalTech.",
    },
    address: {
      street: "Rua de Camões, 218, 3.º",
      postalCode: "4000-138",
      city: "Porto",
      country: "Portugal",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Rua%20de%20Cam%C3%B5es%20218%204000-138%20Porto%20Portugal&output=embed",
    },
    hours: [
      { day: "Segunda a sexta", hours: "09:00–18:00" },
      { day: "Sábado", hours: "Encerrado" },
      { day: "Domingo", hours: "Encerrado" },
    ],
    social: [],
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
    text: "{companyName} — sites profissionais para pequenos negócios.",
    links: [
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Termos", href: "/termos" },
    ],
  },
  seoDefaults: {
    title: "{companyName} — Sites profissionais para pequenos negócios",
    description:
      "Sites profissionais com preço fechado e prazo definido. Conheça o Site Institucional por 399€, entregue em 5 dias úteis.",
    ogImage: "/images/og/brutaltech.webp",
  },

  pages: {
    home: {
      seo: {
        title: "{companyName} — Site profissional por 399€",
        description:
          "Site Institucional profissional por 399€, entregue em 5 dias úteis. Preço fechado, sem custos escondidos.",
      },
      hero: {
        title: "O site profissional do seu negócio por 399€.",
        subtitle:
          "Um Site Institucional completo, pronto em 5 dias úteis. Preço fechado, prazo fechado e tudo explicado sem jargão.",
        ctaLabel: "Quero o meu site",
        ctaHref: "/contacto",
        image: "/images/home/brutaltech-hero.webp",
        imageAlt:
          "Dona de um pequeno negócio e especialista digital a rever um site num portátil",
      },
      servicesIntro: {
        title: "A presença digital certa para o seu negócio",
        subtitle:
          "Comece por um site profissional e acrescente apenas o que o negócio realmente precisa.",
      },
      stats: [
        { value: "27", label: "sites entregues" },
        { value: "5 dias", label: "prazo do Site Institucional" },
        { value: "96%", label: "clientes satisfeitos" },
      ],
      about: {
        title: "Uma equipa pequena, focada no que dá resultado.",
        text:
          "Criamos sites claros, rápidos e fáceis de encontrar. O dono do negócio sabe sempre o que está incluído, quanto custa e quando fica pronto.",
        ctaLabel: "Conhecer a BrutalTech",
        ctaHref: "/sobre",
      },
      finalCta: {
        title: "Está na altura de o seu negócio ter um site profissional?",
        subtitle:
          "Conte-nos o que faz. Nós respondemos com os próximos passos, sem conversa de vendedor.",
        ctaLabel: "Pedir o meu site",
        ctaHref: "/contacto",
      },
    },
    about: {
      seo: {
        title: "Sobre a BrutalTech",
        description:
          "Conheça a equipa, a história e a forma direta de trabalhar de {companyName} no Porto.",
      },
      hero: {
        title: "Tecnologia útil para negócios reais.",
        subtitle:
          "Somos uma equipa do Porto que transforma bons negócios em presenças digitais profissionais, sem complicar o processo.",
      },
      history:
        "A BrutalTech nasceu em 2023, no Porto, depois de vermos demasiados pequenos negócios presos entre sites caros e soluções que nunca ficam prontas. Criámos uma equipa curta e um processo simples para entregar depressa, com qualidade e sem custos inesperados.",
      mission:
        "Dar a pequenos negócios uma presença digital profissional, clara e acessível, com preço e prazo conhecidos antes de o trabalho começar.",
      values: [
        {
          title: "Transparência",
          description:
            "O cliente conhece o preço, o prazo e o que está incluído antes de avançar.",
        },
        {
          title: "Simplicidade",
          description:
            "Retiramos a complexidade técnica da conversa e deixamos apenas decisões úteis.",
        },
        {
          title: "Responsabilidade",
          description:
            "Cumprimos o combinado e avisamos cedo quando algo depende do cliente.",
        },
        {
          title: "Utilidade",
          description:
            "Cada página e cada funcionalidade têm de ajudar o negócio a ser encontrado ou contactado.",
        },
      ],
      team: [
        {
          id: "beatriz-almeida",
          name: "Beatriz Almeida",
          role: "Estratégia e conteúdo",
          bio: "Transforma a proposta de cada negócio em mensagens claras e páginas que orientam o cliente.",
          photo: "/images/team/brutaltech-team-01.webp",
        },
        {
          id: "diogo-martins",
          name: "Diogo Martins",
          role: "Desenvolvimento web",
          bio: "Constrói sites rápidos, seguros e preparados para funcionar bem em qualquer ecrã.",
          photo: "/images/team/brutaltech-team-02.webp",
        },
        {
          id: "sara-reis",
          name: "Sara Reis",
          role: "Design e apoio ao cliente",
          bio: "Cuida da identidade visual, organiza cada entrega e acompanha o cliente do primeiro contacto ao lançamento.",
          photo: "/images/team/brutaltech-team-03.webp",
        },
      ],
      differentiators: [
        {
          id: "preco-fechado",
          title: "Preço fechado",
          description:
            "O Site Institucional custa 399€. O valor é acordado antes de começar e não cresce a meio.",
        },
        {
          id: "prazo-fechado",
          title: "Prazo fechado",
          description:
            "Com os conteúdos reunidos, entregamos o pacote principal em 5 dias úteis.",
        },
        {
          id: "sem-surpresas",
          title: "Sem surpresas",
          description:
            "Explicamos o que está incluído, o que precisamos do cliente e o que acontece depois da entrega.",
        },
      ],
    },
    services: {
      seo: {
        title: "Serviços",
        description:
          "Sites institucionais, lojas online, manutenção e SEO local para pequenos negócios em Portugal.",
      },
      hero: {
        title: "Soluções digitais que o seu negócio consegue usar.",
        subtitle:
          "Sem pacotes confusos nem tecnologia por explicar. Escolha o ponto de partida e saiba o que recebe.",
      },
      items: [
        {
          id: "site-institucional",
          icon: "Network",
          title: "Site Institucional",
          description:
            "Um site profissional por 399€, entregue em 5 dias úteis.",
          detail:
            "O pacote principal inclui até cinco páginas, adaptação à identidade do negócio, formulário de contacto, botão de WhatsApp, versão para telemóvel, configuração essencial para motores de pesquisa e publicação. Custa 399€ e fica pronto em 5 dias úteis depois de recebermos os conteúdos necessários.",
        },
        {
          id: "lojas-online",
          icon: "ClipboardCheck",
          title: "Lojas Online",
          description:
            "Venda produtos online com uma loja simples de gerir.",
          detail:
            "Criamos uma loja adaptada ao catálogo, com pagamentos, entregas e páginas de produto organizadas. O âmbito, o preço e o prazo são definidos depois de sabermos quantos produtos e integrações são necessários.",
        },
        {
          id: "manutencao-suporte",
          icon: "Hammer",
          title: "Manutenção e Suporte",
          description:
            "Atualizações, segurança e pequenas alterações sem perder tempo.",
          detail:
            "Mantemos o site atualizado, verificamos o funcionamento e tratamos de alterações de conteúdo. O serviço é opcional: o site continua a ser seu e não fica preso a uma mensalidade obrigatória.",
        },
        {
          id: "seo-local",
          icon: "SearchCheck",
          title: "SEO Local",
          description:
            "Ajude clientes próximos a encontrar o seu negócio nas pesquisas.",
          detail:
            "Organizamos as páginas para pesquisas locais, afinamos títulos e descrições e ajudamos a melhorar a informação pública do negócio. O objetivo é ser mais fácil de encontrar, sem prometer posições impossíveis de garantir.",
        },
      ],
    },
    portfolio: {
      seo: {
        title: "Portefólio",
        description:
          "Exemplos fictícios de sites para restauração, saúde, automóvel, beleza e comércio local criados por {companyName}.",
      },
      hero: {
        title: "Sites pensados para negócios que reconhece.",
        subtitle:
          "Estes casos fictícios mostram como adaptamos a mesma base sólida a objetivos e públicos diferentes.",
      },
      items: [
        {
          id: "restaurante-o-largo",
          title: "Restaurante O Largo",
          category: "Restauração",
          description:
            "Site com menu, reservas, horários e localização para um restaurante familiar no centro do Porto.",
          image: "/images/portfolio/brutaltech-portfolio-01.webp",
        },
        {
          id: "clinica-movimento-norte",
          title: "Clínica Movimento Norte",
          category: "Saúde",
          description:
            "Presença digital clara para apresentar fisioterapia, equipa e pedidos de marcação.",
          image: "/images/portfolio/brutaltech-portfolio-03.webp",
        },
        {
          id: "oficina-motor-certo",
          title: "Oficina Motor Certo",
          category: "Automóvel",
          description:
            "Site direto com serviços, contactos rápidos e pedido de orçamento para uma oficina multimarca.",
          image: "/images/portfolio/brutaltech-portfolio-04.webp",
        },
        {
          id: "salao-linha-clara",
          title: "Salão Linha Clara",
          category: "Beleza",
          description:
            "Montra visual de serviços, preços e marcações para um cabeleireiro de bairro.",
          image: "/images/portfolio/brutaltech-portfolio-02.webp",
        },
        {
          id: "mercearia-da-vila",
          title: "Mercearia da Vila",
          category: "Comércio local",
          description:
            "Página simples para contar a história da loja, divulgar cabazes e receber encomendas por WhatsApp.",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Fale com {companyName} sobre o site profissional do seu negócio e receba próximos passos claros.",
      },
      hero: {
        title: "Conte-nos o que o seu negócio precisa.",
        subtitle:
          "Respondemos com perguntas úteis, próximos passos e um preço claro. Sem compromisso e sem jargão.",
      },
      formLabels: {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        message: "De que precisa?",
        submit: "Pedir contacto",
        success: "Pedido recebido. Falamos consigo em breve.",
        error: "Não conseguimos enviar o pedido. Tente novamente ou use o email direto.",
      },
      emailTemplate: {
        subject: "Novo contacto no site de {companyName} — {senderName}",
        heading: "Novo pedido recebido em {companyName}",
        nameLabel: "Cliente",
        emailLabel: "Email de resposta",
        phoneLabel: "Telefone",
        messageLabel: "Pedido",
        notProvided: "Não preenchido",
      },
      validationMessages: {
        nameMin: "Diga-nos o seu nome.",
        nameMax: "O nome não pode ter mais de 100 caracteres.",
        emailInvalid: "Escreva um email válido.",
        emailMax: "O email não pode ter mais de 254 caracteres.",
        phoneMax: "O telefone não pode ter mais de 30 caracteres.",
        phoneInvalid: "Use apenas algarismos, espaços e os símbolos +, ( ), ponto ou hífen.",
        messageMin: "Conte-nos um pouco mais sobre o que precisa.",
        messageMax: "A mensagem não pode ter mais de 2000 caracteres.",
      },
      faq: [
        {
          id: "o-que-inclui",
          question: "O que inclui o Site Institucional de 399€?",
          answer:
            "Inclui até cinco páginas, adaptação à sua marca, formulário de contacto, WhatsApp, versão para telemóvel, configuração essencial para pesquisas e publicação do site.",
        },
        {
          id: "quanto-tempo",
          question: "Quanto tempo demora?",
          answer:
            "O Site Institucional fica pronto em 5 dias úteis, contados a partir do momento em que recebemos os textos, imagens e dados necessários.",
        },
        {
          id: "o-que-precisam",
          question: "O que precisam de mim?",
          answer:
            "Precisamos do logótipo, contactos, serviços, algumas fotografias e informação sobre o negócio. Se os textos ainda não estiverem organizados, ajudamos a dar-lhes estrutura.",
        },
        {
          id: "depois-da-entrega",
          question: "O que acontece depois da entrega?",
          answer:
            "O site fica seu e entregamos os acessos necessários. Pode geri-lo de forma independente ou contratar a nossa manutenção, sem fidelização obrigatória.",
        },
      ],
    },
    notFound: {
      seo: {
        title: "Página não encontrada",
        description: "Esta página não está disponível. Continue a explorar o site da BrutalTech.",
      },
      title: "Esta página não está online.",
      message: "O endereço pode estar errado ou a página pode ter mudado. Volte ao início e encontre o que procura.",
      ctaLabel: "Voltar ao início",
    },
  },
};
