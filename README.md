# THV Transportes — Site Institucional

Redesign e desenvolvimento de uma experiência digital para a **THV Transportes**, empresa brasileira com atuação histórica no transporte rodoviário de cargas e forte presença no segmento siderúrgico.

O projeto transforma uma presença institucional tradicional em uma interface moderna, responsiva e orientada à apresentação da operação, serviços e geração de contatos comerciais.

Desenvolvido com **React + Vite + JavaScript + CSS Modules**.

---

## 🌐 Projeto online

### ➜ https://thv-umber.vercel.app/

> Acesse a versão publicada para conhecer a experiência completa.  
> O projeto foi desenvolvido e otimizado para desktop, tablet e dispositivos móveis.

---

## Sobre o projeto

A proposta foi modernizar a apresentação digital da THV preservando características reconhecíveis de sua identidade.

A direção visual combina:

**indústria + aço + logística + engenharia + movimento**

A identidade utiliza tons de azul profundo e ciano inspirados na comunicação histórica da empresa, reinterpretados em uma interface contemporânea.

Mais do que reproduzir o site institucional anterior, o projeto reorganiza a informação em uma jornada digital:

```text
Apresentação
      ↓
História
      ↓
Serviços
      ↓
Presença no Brasil
      ↓
Operação e estrutura
      ↓
Segurança
      ↓
Cotação
      ↓
Contato
```

---

## ✨ Principais funcionalidades

### 🏭 Hero industrial

A abertura do projeto foi desenvolvida especificamente para comunicar a relação da THV com transporte, indústria e produtos siderúrgicos.

A composição utiliza elementos gráficos, movimento e linguagem visual inspirada em engenharia e estruturas metálicas.

---

### 🕐 Timeline institucional

A história da empresa é apresentada através de uma timeline interativa.

No desktop, os marcos seguem uma leitura cronológica horizontal.

No mobile, a experiência é reorganizada verticalmente para preservar legibilidade e navegação.

As animações acompanham o avanço pela seção e respeitam a preferência `prefers-reduced-motion`.

---

### 🚛 Serviços especializados

A área de serviços apresenta categorias relacionadas à operação da empresa, incluindo:

- Aços Longos
- Aços Planos
- Aços não Planos
- Transporte de Insumos
- Tubos de Concreto
- Tubos de Aço
- Produtos Siderúrgicos em Geral

Os componentes foram desenvolvidos para comunicar uma linguagem mais industrial e técnica do que cards convencionais de uma transportadora.

---

### 🇧🇷 Mapa de atuação interativo

Uma das principais experiências do projeto é a representação visual da presença da THV no Brasil.

O componente foi desenvolvido utilizando **SVG + React + CSS**, sem depender de bibliotecas pesadas de mapas.

A experiência inclui:

- representação vetorial do Brasil;
- estados com presença institucional;
- pontos interativos;
- rotas logísticas;
- destaque sincronizado entre mapa e lista;
- animações;
- navegação por mouse e teclado;
- adaptação para dispositivos móveis;
- suporte a `prefers-reduced-motion`.

O mapa funciona não apenas como elemento visual, mas como uma forma de comunicar escala e estrutura operacional.

---

### 🔒 Segurança e tecnologia

O projeto possui uma área dedicada à apresentação de aspectos relacionados à segurança e estrutura tecnológica da operação.

A seção mantém a mesma linguagem industrial do restante da experiência e evita quebrar a identidade visual com componentes genéricos.

---

### 📋 Cotação estruturada

A área comercial possui formulário de cotação organizado para reduzir atrito no preenchimento.

Os dados são agrupados de forma lógica, incluindo informações como:

```text
Origem + Destino

Nome + Empresa

E-mail + Telefone
```

Campos obrigatórios possuem indicação visual e a interface mantém labels permanentemente visíveis para melhorar clareza e acessibilidade.

---

## 🎨 Identidade visual

A interface foi construída sobre uma linguagem própria para o projeto:

- azul profundo como cor institucional;
- ciano como destaque operacional;
- branco e tons metálicos para contraste;
- elementos inspirados em aço e engenharia;
- linhas técnicas;
- marcadores;
- microinterações;
- movimento associado à logística.

O objetivo foi preservar reconhecimento da identidade da THV sem simplesmente reproduzir a estética do site institucional anterior.

---

## 🛠️ Tecnologias

- React
- Vite
- JavaScript
- CSS Modules
- Lucide React
- SVG
- HTML5
- CSS3
- Git
- GitHub
- Vercel

---

## 🧩 Arquitetura

```text
src/
├── assets/              Imagens e recursos visuais
├── components/
│   ├── layout/          Header, Footer e estrutura global
│   ├── ui/              Componentes reutilizáveis
│   └── sections/        Seções da experiência
├── content/             Conteúdo institucional
├── data/                Serviços, unidades e dados estruturados
├── hooks/               Hooks reutilizáveis
├── styles/              Design tokens e estilos globais
├── utils/               Funções auxiliares
├── App.jsx              Composição da aplicação
└── main.jsx             Bootstrap da aplicação
```

---

## ⚙️ Decisões técnicas

### Componentização

As principais áreas da interface foram desenvolvidas como componentes independentes, facilitando manutenção e evolução.

### Dados separados da apresentação

Serviços, unidades e outros conteúdos estruturados são mantidos fora dos componentes sempre que possível.

Isso reduz acoplamento entre conteúdo e interface.

### CSS Modules

Os estilos das seções são isolados através de CSS Modules, reduzindo conflitos e mantendo a organização visual do projeto.

### SVG interativo

Elementos gráficos mais específicos, principalmente relacionados ao mapa operacional, utilizam SVG para manter:

- nitidez em diferentes resoluções;
- baixo peso;
- controle das animações;
- interatividade;
- responsividade.

### Movimento com propósito

As animações foram utilizadas para reforçar conceitos de:

**rota · transporte · progresso · operação**

e não apenas como decoração.

O projeto também respeita:

```css
prefers-reduced-motion
```

para usuários que optam por reduzir animações.

---

## 📱 Responsividade

O projeto foi desenvolvido e revisado em diferentes larguras de viewport.

A interface reorganiza elementos como:

- navegação;
- timeline;
- serviços;
- mapa;
- informações institucionais;
- formulário de cotação.

O objetivo é preservar a experiência visual sem simplesmente reduzir a versão desktop.

---

## 🔎 SEO e estrutura web

A aplicação possui estrutura preparada para mecanismos de busca e compartilhamento, incluindo:

- meta tags;
- Open Graph;
- dados estruturados;
- `robots.txt`;
- `sitemap.xml`;
- HTML semântico.

---

## ⚡ Performance

Recursos interativos foram desenvolvidos priorizando tecnologias nativas e componentes leves.

No mapa, por exemplo, a experiência utiliza:

```text
React
+
SVG
+
CSS
```

em vez de adicionar bibliotecas completas de mapas apenas para uma representação institucional.

---

## 💻 Desenvolvimento local

A versão pronta pode ser acessada diretamente online.

Para desenvolvedores que desejarem analisar ou executar o código:

### Requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## 🚀 Deploy

O projeto está publicado na Vercel e utiliza um fluxo simples de entrega:

```text
Desenvolvimento
      ↓
Git
      ↓
GitHub
      ↓
Vercel
      ↓
Produção
```

---

## 📌 Status

**Projeto funcional, responsivo e publicado.**

O projeto continua recebendo refinamentos de interface e conteúdo conforme novas informações institucionais são validadas.

---

## 👨‍💻 Autor

**João Victor dos Santos Rodrigues**

Análise e Desenvolvimento de Sistemas

**Desenvolvimento Web · React · JavaScript · Arquitetura Front-end · UX/UI**

---

# 🌐 Conheça o projeto

### ➜ https://thv-umber.vercel.app/
