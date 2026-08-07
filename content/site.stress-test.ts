import type { SiteContent } from "./site";

export const stressTestSiteContent = {
  identity: {
    name: "BrutalTech — Sites, Lojas Online, SEO Local e Suporte Digital para Pequenos Negócios que Querem Crescer sem Complicações",
    tagline:
      "Presença digital completa, com preço, prazo e entregáveis definidos antes de começarmos, para que saiba exatamente o que vai receber e quando fica disponível",
    description:
      "Empresa portuguesa de tecnologia que cria sites institucionais, lojas online e soluções de presença digital para pequenos negócios, com comunicação direta, condições claras e acompanhamento próximo.",
    logoLight: "/images/logo-light.svg",
    logoDark: "/images/logo-dark.svg",
    favicon: "/images/favicon.svg",
  },

  contact: {
    email: "pedidos@brutaltech.example",
    phone: "+351 220 987 654",
    whatsapp: {
      number: "+351 930 000 654",
      defaultMessage:
        "Olá, quero perceber se o pacote Site Institucional da BrutalTech é adequado para o meu negócio e o que precisam de mim para começar.",
    },
    address: {
      street: "Rua da Indústria Digital, 18, Piso 2, Sala 204",
      postalCode: "4000-286",
      city: "Porto",
      country: "Portugal",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Rua%20da%20Ind%C3%BAstria%20Digital%2018%20Porto%20Portugal&output=embed",
    },
    hours: [
      { day: "Segunda", hours: "09:00–18:30" },
      { day: "Terça", hours: "09:00–18:30" },
      { day: "Quarta", hours: "09:00–18:30" },
      { day: "Quinta", hours: "09:00–18:30" },
      { day: "Sexta", hours: "09:00–17:30" },
      { day: "Sábado", hours: "10:00–13:00, apenas por marcação" },
      { day: "Domingo e feriados", hours: "Encerrado" },
    ],
    hoursSchema: ["Mo-Th 09:00-18:30", "Fr 09:00-17:30", "Sa 10:00-13:00"],
    social: [],
  },

  nav: {
    links: [
      { label: "Início e pacote principal", href: "/" },
      { label: "Empresa, método e equipa", href: "/sobre" },
      { label: "Serviços digitais disponíveis", href: "/servicos" },
      { label: "Sites entregues a pequenos negócios", href: "/portfolio" },
      { label: "Pedir proposta e esclarecer dúvidas", href: "/contacto" },
    ],
  },
  footer: {
    text: "{companyName} — Presença digital prática para pequenos negócios portugueses, com preço fechado, prazo definido e apoio de pessoas reais.",
    links: [
      { label: "Política de privacidade e tratamento de dados", href: "/politica-de-privacidade" },
      { label: "Termos e condições de utilização", href: "/termos" },
    ],
  },
  seoDefaults: {
    title: "{companyName} — Sites Profissionais para Pequenos Negócios",
    description:
      "Sites institucionais por 399 €, entregues em cinco dias úteis, além de lojas online, SEO local, manutenção e apoio digital para pequenos negócios.",
    ogImage: "/images/og/brutaltech.webp",
  },

  pages: {
    home: {
      seo: {
        title: "{companyName} — Site Profissional por 399 € em 5 Dias Úteis",
        description:
          "Uma presença digital clara, rápida e pronta para receber clientes: preço fechado, prazo fechado e acompanhamento direto desde o primeiro conteúdo até à publicação.",
        ogImage: "/images/og/brutaltech.webp",
      },
      hero: {
        title:
          "O site profissional que o seu pequeno negócio precisa, por 399 €, entregue em cinco dias úteis e sem custos escondidos.",
        subtitle:
          "Reunimos páginas essenciais, adaptação a telemóvel, formulário de contacto, mapa, informação legal e preparação para pesquisa num pacote com tudo explicado antes de avançar. O resultado é um site rápido, credível e fácil de manter, sem reuniões intermináveis nem linguagem técnica vazia.",
        ctaLabel: "Pedir o meu site por 399 €",
        ctaHref: "/contacto",
        image: "/images/home/brutaltech-hero.webp",
        imageAlt:
          "Equipa da BrutalTech a rever num ecrã o site de um pequeno negócio antes da publicação",
      },
      servicesIntro: {
        title:
          "Oito formas de resolver a presença digital, desde o primeiro site até ao suporte contínuo",
        subtitle:
          "Pode começar pelo pacote de 399 € e acrescentar apenas o que fizer sentido: venda online, páginas de campanha, pesquisa local, conteúdos, integrações ou manutenção.",
      },
      stats: [
        { value: "27", label: "sites de pequenos negócios entregues e publicados" },
        { value: "5 dias", label: "prazo do pacote Site Institucional após receção dos conteúdos" },
        { value: "399 €", label: "preço fechado do produto principal, sem extras inesperados" },
        { value: "4,9/5", label: "avaliação média atribuída pelos clientes após a entrega" },
        { value: "8", label: "serviços digitais combináveis sem mudar de fornecedor" },
      ],
      about: {
        title:
          "Uma equipa pequena para donos de negócios que querem respostas concretas e decisões rápidas.",
        text:
          "A BrutalTech junta estratégia, conteúdos, design, desenvolvimento e acompanhamento numa equipa que fala diretamente consigo. Traduzimos o que o negócio faz em páginas simples de entender, mostramos o que está incluído e tratamos da parte técnica sem transformar cada decisão numa reunião.",
        ctaLabel: "Conhecer a equipa e o método de trabalho",
        ctaHref: "/sobre",
      },
      finalCta: {
        title:
          "Se os clientes procuram o seu negócio e encontram informação incompleta, está na altura de ter um site que trabalha por si.",
        subtitle:
          "Diga-nos o que vende, onde trabalha e que contacto quer receber. Confirmamos o enquadramento, enviamos a lista de conteúdos necessária e marcamos a data de entrega antes de começar.",
        ctaLabel: "Receber os próximos passos",
        ctaHref: "/contacto",
      },
    },
    about: {
      seo: {
        title: "Sobre a equipa da {companyName}",
        description:
          "Conheça a história, o método, os princípios e a equipa alargada que cria presenças digitais claras para pequenos negócios portugueses.",
      },
      hero: {
        title:
          "Tecnologia útil, explicada sem rodeios e entregue com responsabilidades claras em cada fase.",
        subtitle:
          "Somos uma empresa jovem do Porto criada para dar a pequenos negócios o tipo de presença digital que normalmente parece cara, demorada ou demasiado complicada.",
      },
      history:
        "A BrutalTech nasceu em 2022, depois de três profissionais perceberem que muitos restaurantes, clínicas, oficinas, lojas e prestadores de serviços continuavam dependentes de páginas desatualizadas ou apenas das redes sociais. Os primeiros projetos mostraram um padrão: o problema raramente era falta de vontade, mas propostas confusas, preços imprevisíveis e processos que exigiam demasiado tempo ao cliente. A equipa transformou essa experiência num pacote simples, repetível e transparente, mantendo espaço para adaptar conteúdos, identidade e necessidades reais de cada negócio.",
      mission:
        "A nossa missão é tornar uma presença digital profissional acessível a quem está ocupado a gerir um negócio. Fazemo-lo com preços conhecidos antes do arranque, prazos que começam quando recebemos os conteúdos, linguagem clara em todas as decisões e uma entrega que o cliente consegue compreender, usar e continuar a desenvolver.",
      values: [
        {
          title: "Clareza comercial antes do arranque",
          description:
            "Explicamos o que está incluído, o que depende do cliente, quando começa o prazo e que pedidos ficam fora do pacote, sem letras pequenas nem surpresas na fatura.",
        },
        {
          title: "Prazos que significam datas reais",
          description:
            "O calendário é confirmado quando os conteúdos chegam, cada revisão tem uma janela definida e qualquer alteração ao plano é comunicada com impacto e nova data.",
        },
        {
          title: "Decisões guiadas pelo negócio",
          description:
            "Cada página, botão e mensagem deve ajudar alguém a perceber o serviço, confiar na empresa e dar o próximo passo; o resto é distração.",
        },
        {
          title: "Suporte depois da publicação",
          description:
            "A entrega não termina numa pasta de ficheiros: deixamos acessos organizados, instruções claras e opções de apoio para atualizações, dúvidas e crescimento futuro.",
        },
      ],
      team: [
        {
          id: "beatriz-sousa",
          name: "Beatriz Sousa",
          role: "Cofundadora e responsável de produto digital",
          bio: "Transforma objetivos comerciais em páginas, prioridades e entregáveis concretos. Coordena o pacote Site Institucional, conduz a reunião inicial e garante que preço, prazo, conteúdos em falta e critérios de aprovação ficam claros para o cliente e para a equipa antes do primeiro dia de produção.",
          photo: "/images/team/brutaltech-team-01.webp",
        },
        {
          id: "miguel-rocha",
          name: "Miguel Rocha",
          role: "Cofundador e responsável técnico",
          bio: "Constrói e publica sites rápidos, seguros e adaptados a diferentes ecrãs. Também trata de domínios, formulários, integrações e verificações finais, traduzindo limitações técnicas em escolhas simples para que o cliente não tenha de dominar ferramentas ou siglas.",
          photo: "/images/team/brutaltech-team-02.webp",
        },
        {
          id: "leonor-faria",
          name: "Leonor Faria",
          role: "Conteúdos, SEO local e experiência do cliente",
          bio: "Ajuda a organizar informação dispersa em textos que clientes reais entendem. Revê títulos, serviços, perguntas frequentes e dados locais, acompanha a recolha de materiais e mantém a comunicação diária curta, objetiva e orientada para desbloquear a próxima entrega.",
          photo: "/images/team/brutaltech-team-03.webp",
        },
        {
          id: "diogo-martins",
          name: "Diogo Martins",
          role: "Design de interfaces e sistemas visuais",
          bio: "Adapta cores, tipografia, fotografia e hierarquia à identidade de cada negócio, sem sacrificar leitura ou velocidade. Trabalha especialmente os casos em que a marca ainda tem poucos materiais e é preciso construir consistência a partir de um logótipo, uma montra ou um conjunto pequeno de referências.",
        },
        {
          id: "carolina-lopes",
          name: "Carolina Lopes",
          role: "Lojas online e operações digitais",
          bio: "Organiza catálogos, pagamentos, entregas e emails de compra para que uma loja não seja apenas visualmente convincente, mas também simples de operar no dia a dia. Testa percursos de compra, documenta tarefas recorrentes e prepara a equipa do cliente para gerir encomendas com autonomia.",
        },
        {
          id: "andre-pinto",
          name: "André Pinto",
          role: "Manutenção, qualidade e suporte ao cliente",
          bio: "Acompanha atualizações, cópias de segurança, monitorização e pedidos após a publicação. Antes de cada entrega verifica ligações, formulários, conteúdo, comportamento em telemóvel e situações de erro, registando o que foi testado e o que precisa de confirmação do cliente.",
        },
      ],
      differentiators: [
        {
          id: "preco-fechado",
          title: "Preço fechado antes de começar",
          description:
            "O pacote principal custa 399 € e inclui uma lista objetiva de páginas, funcionalidades, revisões e tarefas de publicação.",
        },
        {
          id: "prazo-fechado",
          title: "Cinco dias úteis com ponto de partida definido",
          description:
            "O prazo começa quando recebemos os conteúdos essenciais e termina numa data de entrega confirmada por escrito.",
        },
        {
          id: "sem-surpresas",
          title: "Pedidos extra separados do compromisso inicial",
          description:
            "Se surgir uma necessidade fora do pacote, explicamos alternativas, custo e impacto no prazo antes de executar qualquer trabalho adicional.",
        },
        {
          id: "entrega-acompanhada",
          title: "Publicação, acessos e instruções incluídos",
          description:
            "O site é entregue online, com os acessos organizados e uma passagem clara pelo que pode atualizar e pelo apoio disponível depois.",
        },
      ],
    },
    services: {
      seo: {
        title: "Serviços digitais para pequenos negócios",
        description:
          "Oito serviços da {companyName}: sites institucionais, lojas online, manutenção, SEO local, páginas de campanha, conteúdos, integrações e recuperação de sites.",
      },
      hero: {
        title:
          "Comece pelo site de que precisa hoje e acrescente apenas o que resolve um problema real do negócio.",
        subtitle:
          "O pacote Site Institucional é o ponto de partida mais procurado, mas a mesma equipa pode tratar da venda online, da pesquisa local, de campanhas, integrações e manutenção sem obrigar a coordenar vários fornecedores.",
      },
      items: [
        {
          id: "site-institucional",
          icon: "FileCheck2",
          title: "Site Institucional — pacote principal por 399 €",
          description:
            "Um site profissional, rápido e preparado para receber contactos, entregue em cinco dias úteis.",
          detail:
            "Inclui página inicial, apresentação da empresa, serviços, exemplos de trabalho, contacto, informação legal, adaptação a telemóvel, formulário, mapa, ligações sociais, preparação básica para pesquisa e publicação. O preço é 399 € e o prazo de cinco dias úteis começa após recebermos textos, contactos, logótipo e imagens essenciais. Inclui uma ronda de revisão dentro do âmbito acordado e uma entrega acompanhada com acessos organizados.",
        },
        {
          id: "lojas-online",
          icon: "LampDesk",
          title: "Lojas Online com catálogo, pagamentos e operação preparada",
          description:
            "Venda produtos ou vales online com um processo simples para clientes e para quem gere encomendas.",
          detail:
            "Organizamos categorias, páginas de produto, carrinho, pagamentos, métodos de entrega, emails transacionais e informação legal. Antes de publicar testamos compras completas e mostramos à equipa como atualizar produtos, acompanhar encomendas, gerir stock e resolver as situações mais frequentes sem depender de suporte para cada alteração.",
        },
        {
          id: "manutencao-suporte",
          icon: "ClipboardCheck",
          title: "Manutenção, atualizações e suporte com resposta definida",
          description:
            "Mantenha o site atualizado, protegido e acompanhado sem ter de descobrir o problema sozinho.",
          detail:
            "Os planos podem incluir atualizações técnicas, cópias de segurança, monitorização, pequenas alterações de conteúdo e um canal de suporte com tempos de resposta conhecidos. Enviamos um resumo do trabalho realizado e avisamos quando um pedido ultrapassa o plano, antes de propor qualquer custo adicional.",
        },
        {
          id: "seo-local",
          icon: "SearchCheck",
          title: "SEO Local e presença coerente nos resultados de pesquisa",
          description:
            "Ajude clientes próximos a encontrar serviços, horários, contactos e localização sem informação contraditória.",
          detail:
            "Revemos as pesquisas relevantes para a zona, títulos e descrições das páginas, dados de contacto, perfil de negócio, perguntas frequentes e consistência entre diretórios. O trabalho é apresentado como melhorias concretas e prioridades mensuráveis, sem prometer posições garantidas ou resultados instantâneos.",
        },
        {
          id: "paginas-campanha",
          icon: "DraftingCompass",
          title: "Páginas de campanha para uma oferta, lançamento ou marcação",
          description:
            "Uma página focada numa ação clara, pronta para anúncios, redes sociais, eventos ou campanhas sazonais.",
          detail:
            "Estruturamos proposta, benefícios, prova, dúvidas, formulário e confirmação em torno de um único objetivo. A página é adaptada à identidade existente, medida com os indicadores acordados e testada em telemóvel antes de receber tráfego pago ou ser divulgada aos clientes.",
        },
        {
          id: "conteudo-estrutura",
          icon: "Ruler",
          title: "Conteúdos e organização da mensagem comercial",
          description:
            "Transforme notas, brochuras e explicações repetidas em páginas que respondem às dúvidas certas.",
          detail:
            "Entrevistamos quem conhece o negócio, reunimos materiais existentes e organizamos serviços, diferenciação, processo, perguntas frequentes e chamadas para ação. O texto mantém o tom da empresa, evita jargão que não ajuda a vender e fica preparado para revisão por quem detém a informação final.",
        },
        {
          id: "integracoes-automacoes",
          icon: "Network",
          title: "Integrações de formulários, marcações, email e ferramentas do negócio",
          description:
            "Ligue o site às ferramentas que já usa e reduza cópias manuais de pedidos, contactos ou marcações.",
          detail:
            "Analisamos o percurso desde a ação do visitante até à pessoa responsável pela resposta. Podemos ligar formulários, agendas, listas de email, sistemas de atendimento e notificações, documentando acessos e limites para que uma automação útil não se transforme numa dependência difícil de manter.",
        },
        {
          id: "recuperacao-site",
          icon: "Hammer",
          title: "Recuperação e reorganização de sites lentos, partidos ou desatualizados",
          description:
            "Resolva erros visíveis e preserve o conteúdo útil antes de decidir entre reparar ou substituir.",
          detail:
            "Fazemos um diagnóstico do estado atual, identificamos riscos de acesso, conteúdos a preservar, ligações partidas e problemas em telemóvel. Depois apresentamos uma escolha clara entre correção faseada e reconstrução, com prioridades, preço e consequências explicadas antes de mexer no site que está online.",
        },
      ],
    },
    portfolio: {
      seo: {
        title: "Portefólio de sites para negócios locais",
        description:
          "Sete projetos fictícios da {companyName} para restauração, saúde, serviços automóveis, beleza, comércio, formação e turismo, com imagens e fallbacks.",
      },
      hero: {
        title:
          "Negócios reconhecíveis, problemas concretos e sites construídos para facilitar o próximo contacto ou compra.",
        subtitle:
          "Este conjunto de teste combina títulos extensos, categorias diferentes, descrições com vários comprimentos, cinco projetos com fotografia e dois casos sem imagem para validar o fallback visual.",
      },
      items: [
        {
          id: "tasca-da-praca",
          title: "Tasca da Praça — menu, reservas de grupo e horários especiais num site fácil de consultar à porta do restaurante",
          category: "Restauração",
          description:
            "Site institucional para um restaurante familiar, com menus atualizáveis, informação sobre alergénios, fotografias do espaço, formulário para grupos e chamadas rápidas para telefone e mapa em telemóvel.",
          image: "/images/portfolio/brutaltech-portfolio-01.webp",
        },
        {
          id: "clinica-viva-matosinhos",
          title: "Clínica Viva Matosinhos — apresentação simples de especialidades e pedidos de primeira consulta",
          category: "Saúde",
          description:
            "Reorganização dos serviços por necessidade do paciente, perfis da equipa, respostas sobre preparação da consulta e ligação ao sistema externo de marcações, com especial cuidado na clareza da informação.",
          image: "/images/portfolio/brutaltech-portfolio-03.webp",
        },
        {
          id: "oficina-norte-motor",
          title: "Norte Motor — oficina multimarca com pedidos de orçamento que já chegam com a informação necessária",
          category: "Automóvel",
          description:
            "Novo site com serviços, zonas atendidas, contactos de emergência e formulário orientado para matrícula, modelo, problema e disponibilidade, reduzindo trocas de mensagens antes do agendamento.",
          image: "/images/portfolio/brutaltech-portfolio-04.webp",
        },
        {
          id: "studio-corte-cor",
          title: "Studio Corte & Cor — cabeleireiro de bairro com preços claros, galeria consistente e marcação em poucos passos",
          category: "Beleza e bem-estar",
          description:
            "Presença digital criada a partir de materiais dispersos nas redes sociais, reunindo serviços, intervalos de preço, equipa, cuidados antes da visita e acesso direto à agenda online.",
          image: "/images/portfolio/brutaltech-portfolio-02.webp",
        },
        {
          id: "mercearia-raiz",
          title: "Mercearia Raiz — catálogo online de cabazes locais com recolha, entrega e datas de encomenda sem ambiguidades",
          category: "Comércio local",
          description:
            "Loja online compacta com produtos sazonais, opções de cabaz, códigos de zona para entrega e mensagens automáticas que explicam quando a encomenda fica pronta para recolha ou distribuição.",
          image: "/images/portfolio/brutaltech-portfolio-03.webp",
        },
        {
          id: "academia-contas-claras",
          title: "Academia Contas Claras — cursos práticos para empresários que precisam de compreender números sem voltar à escola",
          category: "Formação",
          description:
            "Página de lançamento com programa detalhado, perfis dos formadores, calendário, perguntas frequentes, testemunhos e lista de espera para a edição seguinte. Este item não define imagem para testar o fallback do cartão.",
        },
        {
          id: "casas-do-rio-verde",
          title: "Casas do Rio Verde — alojamento rural com comparação de unidades, disponibilidade externa e guia completo de chegada",
          category: "Turismo",
          description:
            "Site bilingue orientado para famílias, com diferenças entre casas, regras importantes, atividades próximas e ligação ao motor de reservas. A ausência intencional de imagem valida um segundo fallback na grelha.",
        },
      ],
    },
    contact: {
      seo: {
        title: "Pedir proposta e esclarecer o pacote Site Institucional",
        description:
          "Contacte a {companyName} para confirmar se o pacote de 399 € e cinco dias úteis responde ao seu negócio ou para enquadrar outro serviço digital.",
      },
      hero: {
        title:
          "Diga-nos o que o seu negócio vende, quem precisa de chegar ao site e que resultado quer melhorar primeiro.",
        subtitle:
          "Não precisa de preparar um documento técnico. Indique o nome do negócio, serviços principais, localização, site atual se existir e prazo desejado; respondemos com enquadramento, informação em falta e próximos passos concretos.",
      },
      formLabels: {
        name: "Nome completo da pessoa responsável pelo pedido",
        email: "Email onde quer receber a resposta e a proposta",
        phone: "Telefone ou WhatsApp para esclarecimentos rápidos",
        message: "Conte-nos sobre o negócio, o site atual e o resultado que procura",
        submit: "Enviar pedido detalhado à BrutalTech",
        success:
          "Pedido recebido. Vamos rever a informação e responder com o enquadramento e os próximos passos.",
        error:
          "Não conseguimos enviar o pedido. Tente novamente ou escreva diretamente para o email apresentado nesta página.",
      },
      emailTemplate: {
        subject: "Novo pedido para {companyName} — {senderName}",
        heading: "Novo pedido comercial recebido por {companyName}",
        nameLabel: "Pessoa responsável",
        emailLabel: "Email para resposta",
        phoneLabel: "Telefone ou WhatsApp",
        messageLabel: "Negócio, necessidade e prazo indicados",
        notProvided: "Não indicado no formulário",
      },
      validationMessages: {
        nameMin: "Indique o seu nome para sabermos como responder.",
        nameMax: "Use um nome mais curto, com um máximo de 100 caracteres.",
        emailInvalid: "Indique um endereço de email válido.",
        emailMax: "Use um endereço de email mais curto.",
        phoneMax: "Use um número de telefone mais curto.",
        phoneInvalid: "Use apenas algarismos e os sinais habituais num número de telefone.",
        messageMin: "Acrescente algum contexto sobre o negócio ou o site de que precisa.",
        messageMax: "Reduza a mensagem para menos de 2000 caracteres.",
      },
      faq: [
        {
          id: "incluido-site-institucional",
          question: "O que está incluído no pacote Site Institucional de 399 €?",
          answer:
            "Inclui as páginas essenciais para apresentar a empresa, serviços, exemplos de trabalho e contactos, além de adaptação a telemóvel, formulário, mapa, informação legal, preparação básica para pesquisa, uma ronda de revisão e publicação. Confirmamos por escrito a lista exata antes de começar.",
        },
        {
          id: "inicio-cinco-dias",
          question: "Os cinco dias úteis começam logo depois do primeiro contacto?",
          answer:
            "O prazo começa quando a proposta está aceite e recebemos os conteúdos essenciais: contactos, serviços, logótipo, imagens e respostas ao formulário inicial. Nesse momento confirmamos também a data prevista para apresentação e publicação.",
        },
        {
          id: "conteudos-necessarios",
          question: "O que precisam de mim para construir o site sem atrasos?",
          answer:
            "Precisamos de informação prática sobre o negócio, lista de serviços, zonas atendidas, contactos, horários, logótipo e fotografias disponíveis. Enviamos uma lista organizada, identificamos o que falta e podemos ajudar a escrever ou selecionar materiais quando esse apoio é contratado.",
        },
        {
          id: "depois-entrega",
          question: "O que acontece depois da entrega e quem trata de alterações futuras?",
          answer:
            "Entregamos o site publicado, organizamos acessos e explicamos o que pode ser atualizado. Pode gerir o conteúdo internamente, pedir alterações pontuais ou escolher um plano de manutenção com atualizações, acompanhamento e tempos de resposta definidos.",
        },
        {
          id: "dominio-alojamento-email",
          question: "Podem ajudar com domínio, alojamento, caixas de email e ferramentas que já usamos?",
          answer:
            "Sim. Primeiro confirmamos o que já existe e quem detém os acessos. Depois indicamos o que está incluído no pacote, que custos pertencem a fornecedores externos e se alguma migração ou integração precisa de orçamento separado.",
        },
      ],
    },
    notFound: {
      seo: {
        title: "Página não encontrada",
        description: "O endereço pedido não existe ou deixou de estar disponível.",
      },
      title: "Esta página não chegou à publicação.",
      message:
        "O endereço que tentou abrir não existe, foi alterado ou ficou incompleto. Volte ao início para conhecer os serviços da BrutalTech ou use o contacto direto se estava à procura de uma proposta.",
      ctaLabel: "Voltar ao início e conhecer o pacote de 399 €",
    },
  },
} satisfies SiteContent;
