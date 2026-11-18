const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/post.js");

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { frontmatter: { updatedAt: DESC } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Erro ao carregar arquivos Markdown.", result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    });
  });
};