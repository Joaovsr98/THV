/* =====================================================================
   SITE CONTENT — ENGLISH (en)
   Same shape as pt.js.
   ===================================================================== */

export const en = {
  brand: {
    name: 'Mondel Group',
    tagline: 'Uniendo el Cono Sur',
  },

  nav: [
    { label: 'Home', href: '#inicio' },
    { label: 'Company', href: '#empresa' },
    { label: 'Services', href: '#servicos' },
    { label: 'Fleet', href: '#frota' },
    { label: 'Coverage', href: '#atuacao' },
    { label: 'Contact', href: '#contato' },
  ],

  hero: {
    eyebrow: 'International transport across the Southern Cone · Since 1989',
    title: 'The link that connects the Southern Cone.',
    subtitle:
      'International transport between Brazil, Argentina, Uruguay, Paraguay and Chile, with the confidence of those who have crossed borders since 1989.',
    ctaPrimary: 'Request a quote',
    ctaSecondary: 'Chat on WhatsApp',
    stats: [
      { value: '35+', label: 'years of operation' },
      { value: '5', label: 'countries served' },
      { value: '3', label: 'units in the Southern Cone' },
      { value: '-22°C', label: 'cold chain' },
    ],
  },

  travessia: {
    eyebrow: 'The Crossing',
    title: 'Where the route is hard, Mondel has already been.',
    body: 'From our headquarters in Santiago, Chile, we take on the Andes, the customs and the distances of the Southern Cone every day. The complex path is our specialty — and your peace of mind.',
    origin: 'Headquarters · Santiago, Chile',
    coords: '33°26\'15"S · 70°39\'03"W',
    cta: 'See the operation',
    imageAlt: 'Mondel fleet crossing the Andes mountains',
  },

  about: {
    eyebrow: 'The company',
    title: 'A history that projects into the future',
    lead: 'Since 1989, Mondel connects the Southern Cone with international road transport of partial and full loads.',
    paragraphs: [
      'With over three decades of operation, Mondel Group has established itself as a benchmark in international overland logistics between Brazil, Argentina, Uruguay, Paraguay and Chile. With headquarters in Chile and support offices in Brazil and Argentina, our own structure ensures fast clearance and closeness to every client.',
      'We specialize in cargo that requires care: refrigerated and frozen transport, dangerous goods (IMO) and foreign-trade operations with full customs clearance. Every shipment is monitored by satellite tracking, from origin to final destination.',
    ],
    values: [
      {
        icon: 'ShieldCheck',
        title: 'Safety in every delivery',
        text: 'Satellite tracking and specialized custody along the entire route.',
      },
      {
        icon: 'Timer',
        title: 'Agility that makes the difference',
        text: 'Consolidated routes and in-house customs clearance shorten lead times.',
      },
      {
        icon: 'Globe2',
        title: 'International reach',
        text: 'Headquarters in Chile and offices in Brazil and Argentina, uniting the Southern Cone.',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Complete solutions for your logistics operation',
    subtitle:
      'From dedicated freight to the cold chain and customs clearance — all with the security and intelligence your cargo deserves.',
    items: {
      ftl: {
        subtitle: 'Full load',
        title: 'FTL / Dedicated',
        text: 'A vehicle dedicated exclusively to your cargo, with a direct route and optimized lead time from origin to destination.',
        long: 'A vehicle dedicated exclusively to your cargo, from origin to final destination — with no transshipment or consolidation stops. The ideal solution for larger volumes, sensitive cargo or tight deadlines.',
        highlights: [
          '100% dedicated vehicle',
          'Direct route, no transshipment',
          'Optimized lead time',
          'Ideal for bulky or urgent cargo',
        ],
      },
      ltl: {
        subtitle: 'Partial load',
        title: 'LTL / Consolidated',
        text: 'Smart cargo consolidation that lowers the cost per operation without compromising safety.',
        long: 'Your cargo travels consolidated with others, sharing the transport cost without compromising safety. The most efficient option for smaller volumes and recurring shipments across the Southern Cone.',
        highlights: [
          'Shared cost',
          'Ideal for smaller volumes',
          'Consolidated routes',
          'End-to-end safety',
        ],
      },
      refrigerada: {
        subtitle: 'Cold chain',
        title: 'Refrigerated Cargo',
        text: 'Transport with temperature control down to -22°C for chilled and frozen products.',
        long: 'Temperature-controlled transport from loading to delivery, keeping the cold chain unbroken for chilled and frozen products down to -22°C.',
        highlights: [
          'Temperature control to -22°C',
          'Unbroken cold chain',
          'Chilled and frozen',
          'Certified equipment',
        ],
      },
      perigosa: {
        subtitle: 'IMO standards',
        title: 'Dangerous Goods',
        text: 'Handling of dangerous goods with a qualified team and full compliance with safety standards.',
        long: 'Handling of dangerous goods in full compliance with IMO standards: a qualified team, proper documentation and signage, and strict safety protocols at every stage of transport.',
        highlights: [
          'IMO compliance',
          'Qualified team',
          'Documentation and signage',
          'Strict safety protocols',
        ],
      },
      satelite: {
        subtitle: '24/7 monitoring',
        title: 'Satellite Tracking',
        text: 'Real-time monitoring of every shipment, from loading to final delivery.',
        long: 'Every shipment is followed by satellite tracking, with real-time monitoring from loading to final delivery — giving your operation full predictability.',
        highlights: [
          '24/7 satellite tracking',
          'Real-time monitoring',
          'Full predictability',
          'From loading to delivery',
        ],
      },
      aduana: {
        subtitle: 'Foreign trade',
        title: 'Customs Clearance',
        text: 'Complete customs clearance for import and export, with all documentation under control.',
        long: 'We handle all customs clearance for import and export, with foreign-trade documentation under control and fast release at the Southern Cone borders.',
        highlights: [
          'Import and export clearance',
          'Complete documentation',
          'Fast at the borders',
          'Foreign trade under control',
        ],
      },
    },
  },

  process: {
    eyebrow: 'How it works',
    title: 'From quote to delivery in 4 steps',
    steps: [
      {
        title: 'Request',
        text: 'You send origin, destination and cargo details via the form or WhatsApp.',
      },
      {
        title: 'Quote',
        text: 'Our team builds the best route, mode and lead-time solution.',
      },
      {
        title: 'Pickup and clearance',
        text: 'We collect the cargo and handle all customs clearance.',
      },
      {
        title: 'Transport and delivery',
        text: 'Satellite monitoring until arrival at the final destination.',
      },
    ],
  },

  fleet: {
    eyebrow: 'Fleet',
    title: 'Vehicles ready for every type of cargo',
    subtitle:
      'Own, certified equipment for dry, refrigerated, frozen and dangerous cargo, with real-time tracking.',
    note: 'Illustrative fleet photos. Official images coming soon.',
    items: {
      'carreta-bau': { nome: 'Box Trailer', specs: 'Dry cargo • up to 30 t' },
      refrigerado: { nome: 'Reefer Trailer', specs: 'Cold chain • down to -22°C' },
      sider: { nome: 'Curtainsider', specs: 'Palletized cargo • side curtain' },
      graneleiro: { nome: 'Tractor Unit', specs: 'Long haul • international routes' },
    },
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'The operation in motion',
    subtitle: 'A glimpse of our structure, equipment and routes across the Southern Cone.',
    tiles: {
      rota: 'Operation on route',
      frota: 'Mondel fleet',
      frio: 'Cold chain',
      aduana: 'Customs clearance',
      terminal: 'Terminal operation',
      carregamento: 'Loading in operation',
      armazenagem: 'Warehousing & distribution',
      rastreamento: '24/7 tracking',
      consolidada: 'Consolidated cargo',
    },
  },

  offices: {
    eyebrow: 'Coverage area',
    title: 'A presence that unites the Southern Cone',
    subtitle:
      'Own offices on the main logistics hubs of the Southern Cone, with consolidated routes between the countries served.',
    units: 'Our units',
    alsoServe: 'We also serve',
    tipos: { matriz: 'Headquarters', apoio: 'Support', atendido: 'Served' },
    status: {
      matriz: 'Origin of the operation',
      apoio: 'Support hub',
      atendido: 'Country served',
    },
    countries: {
      chile: 'Chile',
      argentina: 'Argentina',
      brasil: 'Brazil',
      uruguai: 'Uruguay',
      paraguai: 'Paraguay',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        pergunta: 'Which countries does Mondel serve?',
        resposta:
          'We operate international road transport across the Southern Cone: Brazil, Argentina, Uruguay, Paraguay and Chile. Our headquarters is in Chile, with our own support offices in Brazil and Argentina, also serving Uruguay and Paraguay.',
      },
      {
        pergunta: 'Do you transport refrigerated and frozen cargo?',
        resposta:
          'Yes. We have equipment suited for temperature-controlled cargo, from chilled to frozen down to -22°C, keeping the cold chain throughout the journey.',
      },
      {
        pergunta: 'How does the quote work?',
        resposta:
          'You send origin, destination and cargo details via the form or WhatsApp. Our team builds the best route, mode and lead-time solution and replies with a personalized quote.',
      },
      {
        pergunta: 'Is the cargo monitored during transport?',
        resposta:
          'All shipments include satellite tracking, allowing real-time monitoring from loading to final delivery.',
      },
      {
        pergunta: 'Does Mondel handle customs clearance?',
        resposta:
          'Yes. We offer complete customs clearance for import and export, handling all foreign-trade documentation.',
      },
    ],
  },

  quote: {
    eyebrow: 'Quote',
    title: 'Request your quote',
    subtitle:
      'Fill in the details below and get personalized service. When you submit, your request goes straight to our commercial WhatsApp.',
    fields: {
      name: 'Name',
      company: 'Company',
      phone: 'Phone',
      email: 'Email',
      origin: 'Cargo origin',
      destination: 'Cargo destination',
      country: 'Country',
      city: 'City',
      selectCountry: 'Select the country…',
      selectCity: 'Select the city…',
      pickCountryFirst: 'Choose the country first',
      otherCity: 'Other city',
      otherCityPlaceholder: 'Type the city',
      cargoType: 'Cargo type',
      weight: 'Estimated weight',
      weightPlaceholder: 'e.g., 0.5 or 12',
      urgency: 'Urgency',
      message: 'Cargo details (volume, notes)',
    },
    select: 'Select…',
    cargoOptions: [
      'Full load (FTL)',
      'Partial load (LTL)',
      'Refrigerated / frozen cargo',
      'Dangerous goods (IMO)',
      'Other',
    ],
    urgencyOptions: ['Flexible — best price', 'Standard', 'Urgent — as soon as possible'],
    submit: 'Send via WhatsApp',
    privacy: 'Your data is used only for commercial follow-up and is not shared.',
    error: 'Please fill in at least your name and phone to continue.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Talk to transport specialists in Mercosur',
    subtitle: 'We are ready to serve your operation. Choose your preferred channel.',
    mapLink: 'Open in Google Maps',
    mapTitle: 'Mondel Group location on Google Maps',
    labels: {
      whatsapp: 'WhatsApp · Brazil',
      whatsappAr: 'WhatsApp · Argentina',
      phone: 'Phone',
      matrizPhone: 'Headquarters · Chile',
      email: 'Email',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      address: 'Brazil office',
    },
  },

  footer: {
    about:
      'International transport of partial and full loads between Brazil, Chile, Argentina and the entire Southern Cone since 1989.',
    columns: {
      services: 'Services',
      quickLinks: 'Navigation',
      contact: 'Contact',
    },
    quote: 'Quote',
    rights: 'All rights reserved.',
    developer: 'Crafted with excellence',
    privacy: 'Privacy Policy',
  },

  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    intro:
      'Mondel Group respects your privacy and handles personal data in accordance with the Brazilian General Data Protection Law (LGPD — Law No. 13.709/2018).',
    sections: [
      {
        heading: 'Data we collect',
        body: 'We collect only the data you voluntarily provide in the quote form: name, company, phone, email and cargo details (origin, destination, type, weight and notes).',
      },
      {
        heading: 'How we use your data',
        body: 'We use this data exclusively to respond to your quote request and follow up commercially. We do not use it for any other purpose.',
      },
      {
        heading: 'Sharing',
        body: 'We do not sell or share your data with third parties. The form information is sent directly to our commercial team via WhatsApp.',
      },
      {
        heading: 'Your rights',
        body: 'You may request access to, correction of, or deletion of your data at any time by contacting us through our official channels.',
      },
      {
        heading: 'Cookies and storage',
        body: 'This site does not use tracking or advertising cookies. We only use the local storage needed to remember your chosen language.',
      },
      {
        heading: 'Contact',
        body: 'For privacy matters, reach us at contato@mondelgroup.com or via the WhatsApp shown on the site.',
      },
    ],
  },

  whatsappFloat: {
    label: 'Talk to us',
    message: 'Hello! I came from the website and would like to request a quote.',
  },

  ui: {
    requestQuote: 'Request a quote',
    viewDetails: 'View details',
    close: 'Close',
    editable: 'Editable — real photo',
    openImage: 'Open image',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    scrollAria: 'Scroll down',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    homeAria: 'Mondel Group — home',
    mainMenu: 'Main menu',
    mobileMenu: 'Mobile menu',
    whatsapp: 'Chat on WhatsApp',
  },

  quoteMessage: {
    header: '*New quote request — Mondel Group*',
    name: 'Name',
    company: 'Company',
    phone: 'Phone',
    email: 'Email',
    origin: 'Origin',
    destination: 'Destination',
    cargoType: 'Cargo type',
    weight: 'Estimated weight',
    urgency: 'Urgency',
    details: 'Details',
  },
};

export default en;
