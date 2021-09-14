import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        twitterUsername
      }
    }
  }
`;

const SEO = () => {
  const {
    site: {
      siteMetadata: { title, description, siteUrl, twitterUsername },
    },
  } = useStaticQuery(query);
  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
