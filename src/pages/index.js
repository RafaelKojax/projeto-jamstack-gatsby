import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

const PostList = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const PostItem = styled.li`
  background: #1e293b;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  a {
    color: #38bdf8;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  time {
    color: #94a3b8;
    font-size: 0.9rem;
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
          Artigos &amp; Projetos Jamstack
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
          Publicações estáticas geradas a partir de Markdown com Gatsby e deploy contínuo em CDN.
        </p>
        <StaticImage
          src="../images/banner-home.jpg"
          alt="Banner ilustrativo de desenvolvimento web Jamstack"
          placeholder="blurred"
          layout="constrained"
          width={960}
          height={320}
          style={{ borderRadius: "10px" }}
        />
      </section>

      <section>
        <h2>Últimas Atualizações (Top 20)</h2>
        <PostList>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <Link to={`/posts/${post.frontmatter.slug}`}>
                {post.frontmatter.title}
              </Link>
              <time dateTime={post.frontmatter.updatedAt}>
                Atualizado em: {post.frontmatter.updatedAtFormatted}
              </time>
            </PostItem>
          ))}
        </PostList>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { updatedAt: DESC } }
      limit: 20
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          updatedAt
          updatedAtFormatted: updatedAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Início" pathname="/" />;

export default IndexPage;