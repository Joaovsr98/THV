# Mondel Group — Site Institucional

Site institucional premium para a **Mondel Group** (Mondel Logística S.A.), operadora de transporte internacional de cargas no Cone Sul desde 1989.

Construído em **React + Vite + JavaScript + CSS Modules**, 100% responsivo, com SEO básico, animações suaves e foco em geração de contatos comerciais.

---

## Como rodar (Windows)

Pré-requisito: ter o **Node.js 18+** instalado (https://nodejs.org).

Abra o terminal (PowerShell ou CMD) na pasta do projeto e rode:

    npm install      # instala as dependências (só na primeira vez)
    npm run dev      # inicia o servidor de desenvolvimento

Depois abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Outros comandos:

    npm run build    # gera a versão de produção na pasta /dist
    npm run preview  # pré-visualiza a build de produção

---

## Deploy (Vercel — recomendado, gratuito)

1. Suba este projeto para um repositório no GitHub.
2. Em https://vercel.com, clique em Add New > Project e importe o repositório.
3. A Vercel detecta o Vite automaticamente. É só confirmar e publicar.

Não é necessário configurar nada — não há banco de dados, login ou variáveis de ambiente.

---

## Onde editar cada coisa

O projeto foi organizado para ser fácil de editar, sem mexer nos componentes.

| Quero mudar...                        | Edite o arquivo               |
|---------------------------------------|-------------------------------|
| Textos do site (títulos, frases)      | src/content/pt.js             |
| Contatos (WhatsApp, e-mail, redes)    | src/data/empresa.js           |
| Serviços (cartões)                    | src/data/servicos.js          |
| Escritórios / endereços               | src/data/oficinas.js          |
| Frota (veículos + fotos)              | src/data/frota.js             |
| Depoimentos e FAQ                     | src/data/depoimentos.js       |
| Cores e fontes (identidade visual)    | src/styles/variables.css      |

### Trocar o logo

O logo entra por um "slot" pronto. Quando tiver o arquivo oficial (idealmente .svg, ou .png com fundo transparente):

1. Coloque o arquivo em src/assets/logo/ (ex.: mondel-group.svg).
2. Abra src/components/ui/Logo.jsx e siga o comentário no topo do arquivo: descomente a linha de import do logo e troque o placeholder pela tag <img>.

Enquanto o arquivo oficial não é inserido, o site mostra um placeholder tipográfico neutro (não imita o símbolo da marca).

### Inserir as fotos da frota

1. Coloque as imagens em src/assets/images/frota/.
2. Em src/data/frota.js, importe cada imagem no topo e aponte o campo "image" para ela. Exemplo:

    import carretaBau from '../assets/images/frota/carreta-bau.jpg';
    // ...
    { id: 'carreta-bau', nome: 'Carreta Baú', specs: '...', icon: 'Truck', image: carretaBau },

Enquanto não houver foto (image: null), um placeholder estilizado é exibido.

---

## Estrutura do projeto

    src/
    ├── assets/          Imagens e logo
    ├── components/
    │   ├── layout/      Header, Footer, WhatsApp flutuante
    │   ├── ui/          Componentes reutilizáveis (Button, Logo, SectionTitle)
    │   └── sections/    Seções da página (Hero, Serviços, Frota...)
    ├── content/         Textos centralizados (pt.js) — pronto para i18n
    ├── data/            Dados estruturados (serviços, contatos, frota...)
    ├── hooks/           useReveal (animações), useMediaQuery
    ├── styles/          Design tokens e estilos globais
    ├── utils/           Links de contato e registro de ícones
    ├── App.jsx          Montagem das seções
    └── main.jsx         Ponto de entrada

---

## Preparado para outros idiomas

Todos os textos ficam em src/content/pt.js. Para adicionar espanhol/inglês no futuro, basta duplicar esse arquivo (ex.: es.js) e trocar a importação — sem reescrever os componentes.

---

## Funcionalidades

- Botão flutuante de WhatsApp com mensagem pronta
- Formulário de cotação que monta a mensagem e abre no WhatsApp comercial
- Links clicáveis: WhatsApp, telefone, e-mail, Instagram, LinkedIn
- Google Maps integrado (sem necessidade de API key)
- Animações on-scroll (Intersection Observer), respeitando prefers-reduced-motion
- SEO: meta tags, Open Graph, Schema.org, robots.txt, sitemap.xml
- 100% responsivo (mobile-first)

---

## Checklist antes de publicar

- [ ] Inserir o logo oficial em src/assets/logo/
- [ ] Adicionar as fotos reais da frota
- [ ] Trocar o domínio nos arquivos de SEO (index.html, public/sitemap.xml, public/robots.txt)
- [ ] Adicionar uma imagem og-image.jpg em public/ (1200x630) para compartilhamento em redes
- [ ] Conferir todos os textos em src/content/pt.js
