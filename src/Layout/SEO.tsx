import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type Meta = {
  name?: string
  content?: string
  property?: string
}

type Props = {
  title: string
  description?: string
  lang?: string
  meta?: Array<Partial<Meta>>
}

type Query = {
  siteMetadata: {
    title: string
    description?: string
    author?: string
  }
}

function SEO({ title, description = '', lang = 'fr', meta = [] }: Props) {
  const { site }: { site: Query } = useStaticQuery(
    graphql`
      query {
        site {
          ...siteMetaData
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

export default SEO
