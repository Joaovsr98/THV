/* =====================================================================
   CONTEÚDO DO SITE — PORTUGUÊS (pt-BR)
   Fonte única de cópia. O espanhol vive em es.js com a mesma forma.
   ===================================================================== */

export const pt = {
  brand: {
    name: 'Mondel Group',
    tagline: 'Uniendo el Cono Sur',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Transporte internacional no Cone Sul · Desde 1989',
    title: 'O elo que conecta o Cone Sul.',
    subtitle:
      'Transporte internacional entre Brasil, Argentina, Uruguai, Paraguai e Chile, com a confiança de quem cruza fronteiras desde 1989.',
    ctaPrimary: 'Solicitar cotação',
    ctaSecondary: 'Falar no WhatsApp',
    stats: [
      { value: '35+', label: 'anos de operação' },
      { value: '5', label: 'países atendidos' },
      { value: '3', label: 'unidades no Cone Sul' },
      { value: '-22°C', label: 'cadeia do frio' },
    ],
  },

  travessia: {
    eyebrow: 'A Travessia',
    title: 'Onde a rota é difícil, a Mondel já passou.',
    body: 'Da nossa matriz em Santiago, no Chile, enfrentamos os Andes, as aduanas e as distâncias do Cone Sul todos os dias. O caminho complexo é a nossa especialidade — e a sua tranquilidade.',
    origin: 'Matriz · Santiago, Chile',
    coords: '33°26\'15"S · 70°39\'03"W',
    cta: 'Conheça a operação',
    imageAlt: 'Frota Mondel cruzando a cordilheira dos Andes',
  },

  about: {
    eyebrow: 'A empresa',
    title: 'Uma história que se projeta ao futuro',
    lead: 'Desde 1989, a Mondel conecta o Cone Sul com transporte rodoviário internacional de carga fracionada e completa.',
    paragraphs: [
      'Com mais de três décadas de operação, a Mondel Group consolidou-se como referência em logística internacional terrestre entre Brasil, Argentina, Uruguai, Paraguai e Chile. Com matriz no Chile e escritórios de apoio no Brasil e na Argentina, nossa estrutura própria garante agilidade no despacho e proximidade com cada cliente.',
      'Somos especialistas em cargas que exigem cuidado: transporte refrigerado e congelado, cargas perigosas (IMO) e operações de comércio exterior com despacho aduaneiro completo. Cada embarque é monitorado por rastreamento via satélite, do ponto de origem ao destino final.',
    ],
    values: [
      {
        icon: 'ShieldCheck',
        title: 'Segurança em cada entrega',
        text: 'Rastreamento por satélite e custódia especializada em toda a rota.',
      },
      {
        icon: 'Timer',
        title: 'Agilidade que faz a diferença',
        text: 'Rotas consolidadas e despacho aduaneiro próprio reduzem prazos.',
      },
      {
        icon: 'Globe2',
        title: 'Alcance internacional',
        text: 'Matriz no Chile e escritórios no Brasil e na Argentina, unindo o Cone Sul.',
      },
    ],
  },

  services: {
    eyebrow: 'Serviços',
    title: 'Soluções completas para sua operação logística',
    subtitle:
      'Do frete exclusivo à cadeia do frio e ao despacho aduaneiro — tudo com a segurança e a inteligência que sua carga merece.',
    items: {
      ftl: {
        subtitle: 'Carga fechada',
        title: 'FTL / Exclusivo',
        text: 'Veículo dedicado exclusivamente à sua carga, com rota direta e prazo otimizado da origem ao destino.',
        long: 'Um veículo dedicado exclusivamente à sua carga, do ponto de origem ao destino final — sem transbordos nem paradas para consolidação. A solução ideal para volumes maiores, cargas sensíveis ou prazos apertados.',
        highlights: [
          'Veículo 100% dedicado',
          'Rota direta, sem transbordo',
          'Prazo otimizado',
          'Ideal para cargas volumosas ou urgentes',
        ],
      },
      ltl: {
        subtitle: 'Carga fracionada',
        title: 'LTL / Consolidado',
        text: 'Consolidação inteligente de cargas que reduz o custo por operação sem abrir mão da segurança.',
        long: 'Sua carga viaja consolidada com outras, dividindo o custo do transporte sem abrir mão da segurança. A opção mais eficiente para volumes menores e envios recorrentes pelo Cone Sul.',
        highlights: [
          'Custo compartilhado',
          'Ideal para volumes menores',
          'Rotas consolidadas',
          'Segurança mantida de ponta a ponta',
        ],
      },
      refrigerada: {
        subtitle: 'Cadeia do frio',
        title: 'Carga Refrigerada',
        text: 'Transporte com controle de temperatura até -22°C para produtos refrigerados e congelados.',
        long: 'Transporte com temperatura controlada do carregamento à entrega, mantendo a cadeia do frio ininterrupta para produtos refrigerados e congelados até -22°C.',
        highlights: [
          'Controle de temperatura até -22°C',
          'Cadeia do frio ininterrupta',
          'Refrigerados e congelados',
          'Equipamentos homologados',
        ],
      },
      perigosa: {
        subtitle: 'Normas IMO',
        title: 'Carga Perigosa',
        text: 'Movimentação de cargas perigosas com equipe habilitada e conformidade total às normas de segurança.',
        long: 'Movimentação de cargas perigosas com total conformidade às normas IMO: equipe habilitada, documentação e sinalização adequadas e protocolos rígidos de segurança em cada etapa do transporte.',
        highlights: [
          'Conformidade com normas IMO',
          'Equipe habilitada',
          'Documentação e sinalização',
          'Protocolos rígidos de segurança',
        ],
      },
      satelite: {
        subtitle: 'Monitoramento 24/7',
        title: 'Rastreamento por Satélite',
        text: 'Acompanhamento em tempo real de cada embarque, do carregamento até a entrega final.',
        long: 'Cada embarque é acompanhado por rastreamento via satélite, com monitoramento em tempo real do carregamento até a entrega final — dando total previsibilidade à sua operação.',
        highlights: [
          'Rastreamento 24/7 por satélite',
          'Acompanhamento em tempo real',
          'Previsibilidade total',
          'Do carregamento à entrega',
        ],
      },
      aduana: {
        subtitle: 'Comércio exterior',
        title: 'Despacho de Aduana',
        text: 'Despacho aduaneiro completo para importação e exportação, com toda a documentação sob controle.',
        long: 'Cuidamos de todo o despacho aduaneiro para importação e exportação, com a documentação de comércio exterior sob controle e agilidade na liberação nas fronteiras do Cone Sul.',
        highlights: [
          'Despacho para importação e exportação',
          'Documentação completa',
          'Agilidade nas fronteiras',
          'Comércio exterior sob controle',
        ],
      },
    },
  },

  process: {
    eyebrow: 'Como funciona',
    title: 'Do orçamento à entrega em 4 passos',
    steps: [
      {
        title: 'Solicitação',
        text: 'Você envia origem, destino e detalhes da carga pelo formulário ou WhatsApp.',
      },
      {
        title: 'Cotação',
        text: 'Nosso time monta a melhor solução de rota, modalidade e prazo.',
      },
      {
        title: 'Coleta e despacho',
        text: 'Retiramos a carga e cuidamos de todo o despacho aduaneiro.',
      },
      {
        title: 'Transporte e entrega',
        text: 'Acompanhamento por satélite até a chegada ao destino final.',
      },
    ],
  },

  fleet: {
    eyebrow: 'Frota',
    title: 'Veículos preparados para cada tipo de carga',
    subtitle:
      'Equipamentos próprios e homologados para carga seca, refrigerada, congelada e perigosa, com rastreamento em tempo real.',
    note: 'Fotos ilustrativas da frota. As imagens oficiais serão inseridas em breve.',
    items: {
      'carreta-bau': { nome: 'Carreta Baú', specs: 'Carga seca • até 30 t' },
      refrigerado: { nome: 'Baú Refrigerado', specs: 'Cadeia do frio • até -22°C' },
      sider: { nome: 'Carreta Sider', specs: 'Carga paletizada • lona lateral' },
      graneleiro: { nome: 'Cavalo Mecânico', specs: 'Longa distância • rotas internacionais' },
    },
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'A operação em movimento',
    subtitle: 'Um panorama da nossa estrutura, equipamentos e rotas pelo Cone Sul.',
    tiles: {
      rota: 'Operação em rota',
      frota: 'Frota Mondel',
      frio: 'Cadeia do frio',
      aduana: 'Despacho aduaneiro',
      terminal: 'Operação no terminal',
      carregamento: 'Carregamento na operação',
      armazenagem: 'Armazenagem e distribuição',
      rastreamento: 'Rastreamento 24/7',
      consolidada: 'Carga consolidada',
    },
  },

  offices: {
    eyebrow: 'Área de atuação',
    title: 'Presença que une o Cone Sul',
    subtitle:
      'Escritórios próprios nos principais eixos logísticos do Cone Sul, com rotas consolidadas entre os países atendidos.',
    units: 'Nossas unidades',
    alsoServe: 'Também atendemos',
    tipos: { matriz: 'Matriz', apoio: 'Apoio', atendido: 'Atendido' },
    status: {
      matriz: 'Origem da operação',
      apoio: 'Hub de apoio',
      atendido: 'País atendido',
    },
    countries: {
      chile: 'Chile',
      argentina: 'Argentina',
      brasil: 'Brasil',
      uruguai: 'Uruguai',
      paraguai: 'Paraguai',
    },
  },

  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Perguntas frequentes',
    items: [
      {
        pergunta: 'Quais países a Mondel atende?',
        resposta:
          'Operamos transporte rodoviário internacional pelo Cone Sul: Brasil, Argentina, Uruguai, Paraguai e Chile. Nossa matriz fica no Chile, com escritórios próprios de apoio no Brasil e na Argentina, atendendo também Uruguai e Paraguai.',
      },
      {
        pergunta: 'Vocês transportam carga refrigerada e congelada?',
        resposta:
          'Sim. Contamos com equipamentos aptos para cargas que exigem temperatura controlada, do refrigerado ao congelado até -22°C, mantendo a cadeia do frio durante todo o trajeto.',
      },
      {
        pergunta: 'Como funciona a cotação?',
        resposta:
          'Você envia origem, destino e detalhes da carga pelo formulário ou WhatsApp. Nosso time monta a melhor solução de rota, modalidade e prazo, e retorna com o orçamento personalizado.',
      },
      {
        pergunta: 'A carga é monitorada durante o transporte?',
        resposta:
          'Todos os embarques contam com rastreamento por satélite, permitindo acompanhamento em tempo real do carregamento à entrega final.',
      },
      {
        pergunta: 'A Mondel cuida do despacho aduaneiro?',
        resposta:
          'Sim. Oferecemos despacho aduaneiro completo para importação e exportação, cuidando de toda a documentação de comércio exterior.',
      },
    ],
  },

  quote: {
    eyebrow: 'Cotação',
    title: 'Solicite sua cotação',
    subtitle:
      'Preencha os dados abaixo e receba um atendimento personalizado. Ao enviar, sua solicitação segue direto para o nosso WhatsApp comercial.',
    fields: {
      name: 'Nome',
      company: 'Empresa',
      phone: 'Telefone',
      email: 'E-mail',
      origin: 'Origem da carga',
      destination: 'Destino da carga',
      country: 'País',
      city: 'Cidade',
      selectCountry: 'Selecione o país…',
      selectCity: 'Selecione a cidade…',
      pickCountryFirst: 'Escolha o país primeiro',
      otherCity: 'Outra cidade',
      otherCityPlaceholder: 'Digite a cidade',
      cargoType: 'Tipo de carga',
      weight: 'Peso estimado',
      weightPlaceholder: 'Ex.: 0,5 ou 12',
      urgency: 'Urgência',
      message: 'Detalhes da carga (volume, observações)',
    },
    select: 'Selecione…',
    cargoOptions: [
      'Carga fechada (FTL)',
      'Carga fracionada (LTL)',
      'Carga refrigerada / congelada',
      'Carga perigosa (IMO)',
      'Outro',
    ],
    urgencyOptions: ['Flexível — melhor custo', 'Padrão', 'Urgente — o quanto antes'],
    submit: 'Enviar pelo WhatsApp',
    privacy: 'Seus dados são usados apenas para retorno comercial e não são compartilhados.',
    error: 'Preencha ao menos seu nome e telefone para continuarmos.',
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Fale com especialistas em transporte no Mercosul',
    subtitle: 'Estamos prontos para atender sua operação. Escolha o canal de sua preferência.',
    mapLink: 'Abrir no Google Maps',
    mapTitle: 'Localização da Mondel Group no Google Maps',
    labels: {
      whatsapp: 'WhatsApp · Brasil',
      whatsappAr: 'WhatsApp · Argentina',
      phone: 'Telefone',
      matrizPhone: 'Matriz · Chile',
      email: 'E-mail',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      address: 'Escritório Brasil',
    },
  },

  footer: {
    about:
      'Transporte internacional de carga fracionada e completa entre Brasil, Chile, Argentina e todo o Cone Sul desde 1989.',
    columns: {
      services: 'Serviços',
      quickLinks: 'Navegação',
      contact: 'Contato',
    },
    quote: 'Cotação',
    rights: 'Todos os direitos reservados.',
    developer: 'Desenvolvido com excelência',
    privacy: 'Política de Privacidade',
  },

  privacy: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: julho de 2026',
    intro:
      'A Mondel Group respeita a sua privacidade e trata os dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
    sections: [
      {
        heading: 'Dados que coletamos',
        body: 'Coletamos apenas os dados que você informa voluntariamente no formulário de cotação: nome, empresa, telefone, e-mail e detalhes da carga (origem, destino, tipo, peso e observações).',
      },
      {
        heading: 'Como usamos seus dados',
        body: 'Utilizamos esses dados exclusivamente para responder à sua solicitação de cotação e dar seguimento comercial ao atendimento. Não os usamos para outras finalidades.',
      },
      {
        heading: 'Compartilhamento',
        body: 'Não vendemos nem compartilhamos seus dados com terceiros. As informações do formulário são enviadas diretamente à nossa equipe comercial pelo WhatsApp.',
      },
      {
        heading: 'Seus direitos',
        body: 'Você pode solicitar a qualquer momento o acesso, a correção ou a exclusão dos seus dados, bastando entrar em contato pelos nossos canais oficiais.',
      },
      {
        heading: 'Cookies e armazenamento',
        body: 'Este site não utiliza cookies de rastreamento ou publicidade. Empregamos apenas o armazenamento local necessário para lembrar o idioma escolhido.',
      },
      {
        heading: 'Contato',
        body: 'Para questões sobre privacidade, fale conosco pelo e-mail contato@mondelgroup.com ou pelo WhatsApp informado no site.',
      },
    ],
  },

  whatsappFloat: {
    label: 'Fale com a gente',
    message: 'Olá! Vim pelo site e gostaria de solicitar uma cotação.',
  },

  ui: {
    requestQuote: 'Solicitar cotação',
    viewDetails: 'Ver detalhes',
    close: 'Fechar',
    editable: 'Editável — foto real',
    openImage: 'Ampliar imagem',
    prevImage: 'Imagem anterior',
    nextImage: 'Próxima imagem',
    scrollAria: 'Rolar para baixo',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    homeAria: 'Mondel Group — página inicial',
    mainMenu: 'Menu principal',
    mobileMenu: 'Menu mobile',
    whatsapp: 'Falar no WhatsApp',
  },

  quoteMessage: {
    header: '*Nova solicitação de cotação — Mondel Group*',
    name: 'Nome',
    company: 'Empresa',
    phone: 'Telefone',
    email: 'E-mail',
    origin: 'Origem',
    destination: 'Destino',
    cargoType: 'Tipo de carga',
    weight: 'Peso estimado',
    urgency: 'Urgência',
    details: 'Detalhes',
  },
};

export default pt;
