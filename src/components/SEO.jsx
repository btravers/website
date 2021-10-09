import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
`

const SEO = ({ title }) => {
  const {
    site: {
      siteMetadata: { title: defaultTitle, description, siteUrl, twitterUsername },
    },
  } = useStaticQuery(query)
  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
}

export default SEO
