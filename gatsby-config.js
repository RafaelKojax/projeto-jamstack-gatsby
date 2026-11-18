/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "DevJamstack | Portfólio & Artigos Técnicos",
    description: "Projeto desenvolvido na disciplina Front-end Jamstack com Gatsby - Pós Infnet.",
    siteUrl: "https://seu-projeto.netlify.app", // Atualize após o deploy na CDN
    image: "/banner-home.jpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://seu-projeto.netlify.app",
        sitemap: "https://seu-projeto.netlify.app/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};