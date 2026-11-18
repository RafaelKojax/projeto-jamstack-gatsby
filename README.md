# DevJamstack — Blog & Portfólio Técnico com Gatsby

Projeto desenvolvido como entrega da disciplina **Front-end Jamstack com Gatsby** do curso de Pós-Graduação do **Instituto Infnet**.

- **Aplicação em Produção (CDN):** [https://jamstack-rafael.netlify.app](https://jamstack-rafael.netlify.app)
- **Repositório GitHub:** [https://github.com/RafaelKojax/projeto-jamstack-gatsby](https://github.com/RafaelKojax/projeto-jamstack-gatsby)

---

## Sobre o Projeto

O **DevJamstack** é uma aplicação web estática construída sobre a arquitetura Jamstack utilizando o framework **Gatsby**. Todo o conteúdo das publicações é gerenciado por meio de arquivos **Markdown**, compilado em tempo de build via GraphQL e distribuído globalmente pela CDN da **Netlify** com integração contínua (CI/CD).

### Funcionalidades e Requisitos Implementados

- **Arquitetura Jamstack & CI/CD:** Pipeline configurada na Netlify integrada diretamente à branch `main` do GitHub. A cada novo `commit`/`push`, o build é disparado automaticamente e, em caso de sucesso, a nova versão é publicada na CDN.
- **Rotas Estáticas e Dinâmicas:**
  - `/` — Página inicial contendo banner otimizado e a listagem dinâmica das últimas 20 publicações ordenadas por data de atualização.
  - `/posts/[slug]` — Páginas de artigos geradas dinamicamente via API `createPage` (`gatsby-node.js`) a partir dos arquivos Markdown em `src/content/posts/`.
  - `/contato` — Página dedicada ao formulário de contato estático.
- **Componentização e Estilização Híbrida:**
  - Estrutura modularizada em componentes React (`Header`, `Footer`, `Layout`, `Seo` e `ContactForm`).
  - Design responsivo com Flexbox e *media queries*.
  - Combinação de folha de estilos CSS tradicional (`src/styles/global.css`) e CSS-in-JS com `styled-components`.
- **Formulário Estático com Validação:**
  - Formulário responsivo com 3 campos (`Nome`, `E-mail` e `Mensagem`), validação client-side e envio assíncrono via `POST`.
- **Otimização de Imagens e SEO:**
  - Redimensionamento automático, *lazy loading* e conversão para formatos modernos (`WebP`) via `gatsby-plugin-image` (`StaticImage` e `GatsbyImage`).
  - Metadados dinâmicos (`title`, `description`, `image` e Open Graph) gerenciados via `useSiteMetadata` e componente `Seo`, além da geração automática de `sitemap-index.xml` e `robots.txt`.

---

## Estrutura de Diretórios

```text
projeto-jamstack-gatsby/
├── src/
│   ├── components/         # Componentes reutilizáveis (Header, Footer, Layout, Seo, ContactForm)
│   ├── content/posts/      # Artigos em formato Markdown (.md)
│   ├── hooks/              # Hook customizado useSiteMetadata (GraphQL)
│   ├── images/             # Imagens locais otimizadas pelo gatsby-plugin-sharp
│   ├── pages/              # Rotas estáticas (index.js e contato.js)
│   ├── styles/             # Estilos globais em CSS (global.css)
│   └── templates/          # Template das rotas dinâmicas de posts (post.js)
├── gatsby-browser.js       # Importação do CSS global
├── gatsby-config.js        # Configuração de plugins, metadados, sitemap e robots.txt
└── gatsby-node.js          # Criação programática das rotas /posts/[slug]
```

---

## Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RafaelKojax/projeto-jamstack-gatsby.git
   cd projeto-jamstack-gatsby
   ```

2. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run develop
   ```
   A aplicação estará disponível em `http://localhost:8000`.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```