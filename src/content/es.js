/* =====================================================================
   CONTENIDO DEL SITIO — ESPAÑOL (es)
   Misma forma que pt.js.
   ===================================================================== */

export const es = {
  brand: {
    name: 'Mondel Group',
    tagline: 'Uniendo el Cono Sur',
  },

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Servicios', href: '#servicos' },
    { label: 'Flota', href: '#frota' },
    { label: 'Cobertura', href: '#atuacao' },
    { label: 'Contacto', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Transporte internacional en el Cono Sur · Desde 1989',
    title: 'El nexo que conecta el Cono Sur.',
    subtitle:
      'Transporte internacional entre Brasil, Argentina, Uruguay, Paraguay y Chile, con la confianza de quien cruza fronteras desde 1989.',
    ctaPrimary: 'Solicitar cotización',
    ctaSecondary: 'Hablar por WhatsApp',
    stats: [
      { value: '35+', label: 'años de operación' },
      { value: '5', label: 'países atendidos' },
      { value: '3', label: 'unidades en el Cono Sur' },
      { value: '-22°C', label: 'cadena de frío' },
    ],
  },

  travessia: {
    eyebrow: 'La Travesía',
    title: 'Donde la ruta es difícil, Mondel ya pasó.',
    body: 'Desde nuestra casa matriz en Santiago de Chile, enfrentamos los Andes, las aduanas y las distancias del Cono Sur todos los días. El camino complejo es nuestra especialidad — y su tranquilidad.',
    origin: 'Casa matriz · Santiago, Chile',
    coords: '33°26\'15"S · 70°39\'03"W',
    cta: 'Conozca la operación',
    imageAlt: 'Flota Mondel cruzando la cordillera de los Andes',
  },

  about: {
    eyebrow: 'La empresa',
    title: 'Una historia que se proyecta al futuro',
    lead: 'Desde 1989, Mondel conecta el Cono Sur con transporte terrestre internacional de carga fraccionada y completa.',
    paragraphs: [
      'Con más de tres décadas de operación, Mondel Group se consolidó como referencia en logística internacional terrestre entre Brasil, Argentina, Uruguay, Paraguay y Chile. Con casa matriz en Chile y oficinas de apoyo en Brasil y Argentina, nuestra estructura propia garantiza agilidad en el despacho y cercanía con cada cliente.',
      'Somos especialistas en cargas que exigen cuidado: transporte refrigerado y congelado, cargas peligrosas (IMO) y operaciones de comercio exterior con despacho aduanero completo. Cada embarque es monitoreado por rastreo satelital, del origen al destino final.',
    ],
    values: [
      {
        icon: 'ShieldCheck',
        title: 'Seguridad en cada entrega',
        text: 'Rastreo satelital y custodia especializada en toda la ruta.',
      },
      {
        icon: 'Timer',
        title: 'Agilidad que marca la diferencia',
        text: 'Rutas consolidadas y despacho aduanero propio reducen los plazos.',
      },
      {
        icon: 'Globe2',
        title: 'Alcance internacional',
        text: 'Casa matriz en Chile y oficinas en Brasil y Argentina, uniendo el Cono Sur.',
      },
    ],
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Soluciones completas para su operación logística',
    subtitle:
      'Del flete exclusivo a la cadena de frío y al despacho aduanero — todo con la seguridad y la inteligencia que su carga merece.',
    items: {
      ftl: {
        subtitle: 'Carga completa',
        title: 'FTL / Exclusivo',
        text: 'Vehículo dedicado exclusivamente a su carga, con ruta directa y plazo optimizado del origen al destino.',
        long: 'Un vehículo dedicado exclusivamente a su carga, del origen al destino final — sin transbordos ni paradas para consolidación. La solución ideal para volúmenes mayores, cargas sensibles o plazos ajustados.',
        highlights: [
          'Vehículo 100% dedicado',
          'Ruta directa, sin transbordo',
          'Plazo optimizado',
          'Ideal para cargas voluminosas o urgentes',
        ],
      },
      ltl: {
        subtitle: 'Carga fraccionada',
        title: 'LTL / Consolidado',
        text: 'Consolidación inteligente de cargas que reduce el costo por operación sin renunciar a la seguridad.',
        long: 'Su carga viaja consolidada con otras, dividiendo el costo del transporte sin renunciar a la seguridad. La opción más eficiente para volúmenes menores y envíos recurrentes por el Cono Sur.',
        highlights: [
          'Costo compartido',
          'Ideal para volúmenes menores',
          'Rutas consolidadas',
          'Seguridad de punta a punta',
        ],
      },
      refrigerada: {
        subtitle: 'Cadena de frío',
        title: 'Carga Refrigerada',
        text: 'Transporte con control de temperatura hasta -22°C para productos refrigerados y congelados.',
        long: 'Transporte con temperatura controlada de la carga a la entrega, manteniendo la cadena de frío ininterrumpida para productos refrigerados y congelados hasta -22°C.',
        highlights: [
          'Control de temperatura hasta -22°C',
          'Cadena de frío ininterrumpida',
          'Refrigerados y congelados',
          'Equipos homologados',
        ],
      },
      perigosa: {
        subtitle: 'Normas IMO',
        title: 'Carga Peligrosa',
        text: 'Movimiento de cargas peligrosas con equipo habilitado y conformidad total con las normas de seguridad.',
        long: 'Movimiento de cargas peligrosas con total conformidad a las normas IMO: equipo habilitado, documentación y señalización adecuadas y protocolos rígidos de seguridad en cada etapa del transporte.',
        highlights: [
          'Conformidad con normas IMO',
          'Equipo habilitado',
          'Documentación y señalización',
          'Protocolos rígidos de seguridad',
        ],
      },
      satelite: {
        subtitle: 'Monitoreo 24/7',
        title: 'Rastreo Satelital',
        text: 'Seguimiento en tiempo real de cada embarque, de la carga hasta la entrega final.',
        long: 'Cada embarque se acompaña con rastreo satelital, con monitoreo en tiempo real de la carga hasta la entrega final — dando total previsibilidad a su operación.',
        highlights: [
          'Rastreo 24/7 por satélite',
          'Seguimiento en tiempo real',
          'Previsibilidad total',
          'De la carga a la entrega',
        ],
      },
      aduana: {
        subtitle: 'Comercio exterior',
        title: 'Despacho de Aduana',
        text: 'Despacho aduanero completo para importación y exportación, con toda la documentación bajo control.',
        long: 'Nos ocupamos de todo el despacho aduanero para importación y exportación, con la documentación de comercio exterior bajo control y agilidad en la liberación en las fronteras del Cono Sur.',
        highlights: [
          'Despacho para importación y exportación',
          'Documentación completa',
          'Agilidad en las fronteras',
          'Comercio exterior bajo control',
        ],
      },
    },
  },

  process: {
    eyebrow: 'Cómo funciona',
    title: 'De la cotización a la entrega en 4 pasos',
    steps: [
      {
        title: 'Solicitud',
        text: 'Usted envía origen, destino y detalles de la carga por el formulario o WhatsApp.',
      },
      {
        title: 'Cotización',
        text: 'Nuestro equipo arma la mejor solución de ruta, modalidad y plazo.',
      },
      {
        title: 'Retiro y despacho',
        text: 'Retiramos la carga y nos ocupamos de todo el despacho aduanero.',
      },
      {
        title: 'Transporte y entrega',
        text: 'Seguimiento satelital hasta la llegada al destino final.',
      },
    ],
  },

  fleet: {
    eyebrow: 'Flota',
    title: 'Vehículos preparados para cada tipo de carga',
    subtitle:
      'Equipos propios y homologados para carga seca, refrigerada, congelada y peligrosa, con rastreo en tiempo real.',
    note: 'Fotos ilustrativas de la flota. Las imágenes oficiales se incorporarán pronto.',
    items: {
      'carreta-bau': { nome: 'Furgón', specs: 'Carga seca • hasta 30 t' },
      refrigerado: { nome: 'Furgón Refrigerado', specs: 'Cadena de frío • hasta -22°C' },
      sider: { nome: 'Semirremolque Sider', specs: 'Carga paletizada • lona lateral' },
      graneleiro: { nome: 'Tractocamión', specs: 'Larga distancia • rutas internacionales' },
    },
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'La operación en movimiento',
    subtitle: 'Un panorama de nuestra estructura, equipos y rutas por el Cono Sur.',
    tiles: {
      rota: 'Operación en ruta',
      frota: 'Flota Mondel',
      frio: 'Cadena de frío',
      aduana: 'Despacho aduanero',
      terminal: 'Operación en terminal',
      carregamento: 'Carga en operación',
      armazenagem: 'Almacenaje y distribución',
      rastreamento: 'Rastreo 24/7',
      consolidada: 'Carga consolidada',
    },
  },

  offices: {
    eyebrow: 'Área de cobertura',
    title: 'Presencia que une el Cono Sur',
    subtitle:
      'Oficinas propias en los principales ejes logísticos del Cono Sur, con rutas consolidadas entre los países atendidos.',
    units: 'Nuestras unidades',
    alsoServe: 'También atendemos',
    tipos: { matriz: 'Matriz', apoio: 'Apoyo', atendido: 'Atendido' },
    status: {
      matriz: 'Origen de la operación',
      apoio: 'Hub de apoyo',
      atendido: 'País atendido',
    },
    countries: {
      chile: 'Chile',
      argentina: 'Argentina',
      brasil: 'Brasil',
      uruguai: 'Uruguay',
      paraguai: 'Paraguay',
    },
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Preguntas frecuentes',
    items: [
      {
        pergunta: '¿Qué países atiende Mondel?',
        resposta:
          'Operamos transporte terrestre internacional por el Cono Sur: Brasil, Argentina, Uruguay, Paraguay y Chile. Nuestra casa matriz está en Chile, con oficinas propias de apoyo en Brasil y Argentina, atendiendo también Uruguay y Paraguay.',
      },
      {
        pergunta: '¿Transportan carga refrigerada y congelada?',
        resposta:
          'Sí. Contamos con equipos aptos para cargas que exigen temperatura controlada, del refrigerado al congelado hasta -22°C, manteniendo la cadena de frío durante todo el trayecto.',
      },
      {
        pergunta: '¿Cómo funciona la cotización?',
        resposta:
          'Usted envía origen, destino y detalles de la carga por el formulario o WhatsApp. Nuestro equipo arma la mejor solución de ruta, modalidad y plazo, y responde con la cotización personalizada.',
      },
      {
        pergunta: '¿La carga se monitorea durante el transporte?',
        resposta:
          'Todos los embarques cuentan con rastreo satelital, permitiendo el seguimiento en tiempo real de la carga a la entrega final.',
      },
      {
        pergunta: '¿Mondel se ocupa del despacho aduanero?',
        resposta:
          'Sí. Ofrecemos despacho aduanero completo para importación y exportación, ocupándonos de toda la documentación de comercio exterior.',
      },
    ],
  },

  quote: {
    eyebrow: 'Cotización',
    title: 'Solicite su cotización',
    subtitle:
      'Complete los datos y reciba una atención personalizada. Al enviar, su solicitud va directo a nuestro WhatsApp comercial.',
    fields: {
      name: 'Nombre',
      company: 'Empresa',
      phone: 'Teléfono',
      email: 'Correo',
      origin: 'Origen de la carga',
      destination: 'Destino de la carga',
      country: 'País',
      city: 'Ciudad',
      selectCountry: 'Seleccione el país…',
      selectCity: 'Seleccione la ciudad…',
      pickCountryFirst: 'Elija el país primero',
      otherCity: 'Otra ciudad',
      otherCityPlaceholder: 'Escriba la ciudad',
      cargoType: 'Tipo de carga',
      weight: 'Peso estimado',
      weightPlaceholder: 'Ej.: 0,5 o 12',
      urgency: 'Urgencia',
      message: 'Detalles de la carga (volumen, observaciones)',
    },
    select: 'Seleccione…',
    cargoOptions: [
      'Carga completa (FTL)',
      'Carga fraccionada (LTL)',
      'Carga refrigerada / congelada',
      'Carga peligrosa (IMO)',
      'Otro',
    ],
    urgencyOptions: ['Flexible — mejor costo', 'Estándar', 'Urgente — lo antes posible'],
    submit: 'Enviar por WhatsApp',
    privacy: 'Sus datos se usan solo para respuesta comercial y no se comparten.',
    error: 'Complete al menos su nombre y teléfono para continuar.',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hable con especialistas en transporte en el Mercosur',
    subtitle: 'Estamos listos para atender su operación. Elija el canal de su preferencia.',
    mapLink: 'Abrir en Google Maps',
    mapTitle: 'Ubicación de Mondel Group en Google Maps',
    labels: {
      whatsapp: 'WhatsApp · Brasil',
      whatsappAr: 'WhatsApp · Argentina',
      phone: 'Teléfono',
      matrizPhone: 'Casa matriz · Chile',
      email: 'Correo',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      address: 'Oficina Brasil',
    },
  },

  footer: {
    about:
      'Transporte internacional de carga fraccionada y completa entre Brasil, Chile, Argentina y todo el Cono Sur desde 1989.',
    columns: {
      services: 'Servicios',
      quickLinks: 'Navegación',
      contact: 'Contacto',
    },
    quote: 'Cotización',
    rights: 'Todos los derechos reservados.',
    developer: 'Desarrollado con excelencia',
    privacy: 'Política de Privacidad',
  },

  privacy: {
    title: 'Política de Privacidad',
    updated: 'Última actualización: julio de 2026',
    intro:
      'Mondel Group respeta su privacidad y trata los datos personales conforme a la Ley General de Protección de Datos (LGPD — Ley n.º 13.709/2018).',
    sections: [
      {
        heading: 'Datos que recopilamos',
        body: 'Recopilamos únicamente los datos que usted informa voluntariamente en el formulario de cotización: nombre, empresa, teléfono, correo y detalles de la carga (origen, destino, tipo, peso y observaciones).',
      },
      {
        heading: 'Cómo usamos sus datos',
        body: 'Utilizamos estos datos exclusivamente para responder a su solicitud de cotización y dar seguimiento comercial a la atención. No los usamos para otras finalidades.',
      },
      {
        heading: 'Compartición',
        body: 'No vendemos ni compartimos sus datos con terceros. La información del formulario se envía directamente a nuestro equipo comercial por WhatsApp.',
      },
      {
        heading: 'Sus derechos',
        body: 'Puede solicitar en cualquier momento el acceso, la corrección o la eliminación de sus datos, contactándonos por nuestros canales oficiales.',
      },
      {
        heading: 'Cookies y almacenamiento',
        body: 'Este sitio no utiliza cookies de rastreo ni publicidad. Empleamos solo el almacenamiento local necesario para recordar el idioma elegido.',
      },
      {
        heading: 'Contacto',
        body: 'Para cuestiones sobre privacidad, escríbanos al correo contato@mondelgroup.com o por el WhatsApp indicado en el sitio.',
      },
    ],
  },

  whatsappFloat: {
    label: 'Hable con nosotros',
    message: '¡Hola! Vine por el sitio y me gustaría solicitar una cotización.',
  },

  ui: {
    requestQuote: 'Solicitar cotización',
    viewDetails: 'Ver detalles',
    close: 'Cerrar',
    editable: 'Editable — foto real',
    openImage: 'Ampliar imagen',
    prevImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    scrollAria: 'Desplazar hacia abajo',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    homeAria: 'Mondel Group — página de inicio',
    mainMenu: 'Menú principal',
    mobileMenu: 'Menú móvil',
    whatsapp: 'Hablar por WhatsApp',
  },

  quoteMessage: {
    header: '*Nueva solicitud de cotización — Mondel Group*',
    name: 'Nombre',
    company: 'Empresa',
    phone: 'Teléfono',
    email: 'Correo',
    origin: 'Origen',
    destination: 'Destino',
    cargoType: 'Tipo de carga',
    weight: 'Peso estimado',
    urgency: 'Urgencia',
    details: 'Detalles',
  },
};

export default es;
