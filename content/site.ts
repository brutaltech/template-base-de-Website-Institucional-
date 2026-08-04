// content/site.ts

// ── Tipos auxiliares ──────────────────────────────────────────────

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;   // string, não number — aguenta "120+", "98%", etc.
  label: string;
}

export interface Service {
  id: string;
  icon: string;         // nome do ícone (ex: lucide-react)
  title: string;
  description: string;  // resumo curto — usado na Home e na lista
  detail: string;       // texto mais longo — usado na página de Serviços
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: string;       // opcional — o layout tem de aguentar a ausência
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;       // opcional — o layout tem de aguentar a ausência
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'linkedin' | 'youtube' | 'tiktok';
  url: string;
}

export interface BusinessHours {
  day: string;    // ex: "Segunda a sexta"
  hours: string;  // ex: "09:00–18:00" ou "Encerrado"
}

// ── Conteúdo principal ────────────────────────────────────────────

export interface SiteContent {
  identity: {
    name: string;
    tagline: string;
    description: string;   // usada como meta description por omissão / JSON-LD
    logoLight: string;
    logoDark: string;
    favicon: string;
  };

  contact: {
    email: string;
    phone: string;
    whatsapp: { number: string; defaultMessage: string };
    address: { street: string; postalCode: string; city: string; country: string; mapEmbedUrl?: string };
    hours: BusinessHours[];
    social: SocialLink[];
  };

  nav: { links: NavLink[] };
  footer: { text: string; links: NavLink[] };
  seoDefaults: SeoMeta;

  pages: {
    home: {
      seo: SeoMeta;
      hero: { title: string; subtitle: string; ctaLabel: string; ctaHref: string };
      servicesIntro: { title: string; subtitle: string };
      stats: Stat[];
      about: { title: string; text: string; ctaLabel: string; ctaHref: string };
      finalCta: { title: string; subtitle: string; ctaLabel: string; ctaHref: string };
    };
    about: {
      seo: SeoMeta;
      hero: { title: string; subtitle: string };
      history: string;
      mission: string;
      values: { title: string; description: string }[];
      team: TeamMember[];
      differentiators: Differentiator[];
    };
    services: {
      seo: SeoMeta;
      hero: { title: string; subtitle: string };
      items: Service[];
    };
    portfolio: {
      seo: SeoMeta;
      hero: { title: string; subtitle: string };
      items: PortfolioItem[];
    };
    contact: {
      seo: SeoMeta;
      hero: { title: string; subtitle: string };
      formLabels: {
        name: string; email: string; phone: string; message: string;
        submit: string; success: string; error: string;
      };
      faq?: FaqItem[];
    };
    notFound: { title: string; message: string; ctaLabel: string };
  };
}

export const siteContent: SiteContent = {
  identity: {
    name: "Ponto de Fuga — Arquitetura e Interiores",
    tagline: "Projetos rigorosos para casas e espaços de trabalho",
    description:
      "Atelier de arquitetura e design de interiores em Matosinhos, focado em projetos residenciais e comerciais de pequena e média escala.",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    favicon: "/favicon.ico",
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
    text: "Ponto de Fuga — Arquitetura e Interiores. Atelier fictício para template institucional.",
    links: [
      { label: "Política de privacidade", href: "/legal/politica-de-privacidade" },
      { label: "Termos", href: "/legal/termos" },
    ],
  },
  seoDefaults: {
    title: "Ponto de Fuga — Arquitetura e Interiores",
    description:
      "Projetos de arquitetura, interiores e licenciamento para habitação e comércio em Matosinhos.",
  },

  pages: {
    home: {
      seo: {
        title: "Ponto de Fuga — Arquitetura e Interiores",
        description:
          "Atelier em Matosinhos para projetos residenciais, interiores comerciais e apoio ao licenciamento.",
      },
      hero: {
        title: "Arquitetura clara para espaços que precisam de funcionar bem.",
        subtitle:
          "Desenvolvemos projetos residenciais e comerciais com desenho cuidado, documentação rigorosa e decisões explicadas sem ruído.",
        ctaLabel: "Marcar reunião",
        ctaHref: "/contacto",
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
          "Conheça a equipa, método e princípios de trabalho do Ponto de Fuga em Matosinhos.",
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
          photo: "/images/team/ines-monteiro.jpg",
        },
        {
          id: "rui-valente",
          name: "Rui Valente",
          role: "Designer de interiores",
          bio: "Desenvolve conceitos de interiores, materiais e desenho de mobiliário fixo.",
          photo: "/images/team/rui-valente.jpg",
        },
        {
          id: "marta-cunha",
          name: "Marta Cunha",
          role: "Gestora de projeto",
          bio: "Organiza prazos, documentação e comunicação entre cliente, equipa e obra.",
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
          "Projetos residenciais e comerciais fictícios do atelier Ponto de Fuga.",
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
          image: "/images/portfolio/apartamento-leca.jpg",
        },
        {
          id: "loja-senhora-hora",
          title: "Loja na Senhora da Hora",
          category: "Comércio",
          description:
            "Projeto de interiores para loja de bairro com frente estreita e zona técnica compacta.",
          image: "/images/portfolio/loja-senhora-hora.jpg",
        },
        {
          id: "moradia-lavra",
          title: "Moradia em Lavra",
          category: "Habitação",
          description:
            "Estudo de ampliação com nova ligação ao jardim e revisão de circulação interior.",
        },
        {
          id: "escritorio-matosinhos-sul",
          title: "Escritório em Matosinhos Sul",
          category: "Trabalho",
          description:
            "Adaptação de fração para equipa de oito pessoas, com sala de reunião e copa discreta.",
          image: "/images/portfolio/escritorio-matosinhos-sul.jpg",
        },
      ],
    },
    contact: {
      seo: {
        title: "Contacto",
        description:
          "Contacte o Ponto de Fuga para discutir projetos de arquitetura e interiores em Matosinhos.",
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
      title: "Página não encontrada",
      message: "A página que tentou abrir não existe ou foi movida.",
      ctaLabel: "Voltar ao início",
    },
  },
};
