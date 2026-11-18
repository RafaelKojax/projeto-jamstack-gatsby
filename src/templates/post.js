import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <article>
        <Link to="/" style={{ color: "#38bdf8", textDecoration: "none" }}>
          ← Voltar para a lista
        </Link>
        <h1 style={{ fontSize: "2rem", margin: "1rem 0 0.5rem" }}>
          {post.frontmatter.title}
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
          Atualizado em: {post.frontmatter.updatedAtFormatted}
        </p>

        {image && (
          <div style={{ marginBottom: "2rem" }}>
            <GatsbyImage
              image={image}
              alt={post.frontmatter.title}
              style={{ borderRadius: "10px" }}
            />
          </div>
        )}

        <div
          style={{ display: "grid", gap: "1rem" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        description
        updatedAtFormatted: updatedAt(formatString: "DD/MM/YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { title, description, slug } = data.markdownRemark.frontmatter;
  return <Seo title={title} description={description} pathname={`/posts/${slug}`} />;
};

export default PostTemplate;