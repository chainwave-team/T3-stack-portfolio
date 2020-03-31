import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export interface SEOProps {
  title: string
  description?: string
  lang?: string
}

type Props = {
  title: string
  description?: string
  lang?: string
  type?: 'website' | 'article'
  path?: string
  imageUrl?: string
}

type Query = {
  siteMetadata: {
    title: string
    description?: string
    author?: string
    siteUrl?: string
    image?: string
  }
}

function SEO({
  title,
  description = '',
  lang = 'fr',
  type = 'website',
  path = '/',
  imageUrl
}: Props) {
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
  const url = `${site.siteMetadata.siteUrl}${path}`
  const image = imageUrl || site?.siteMetadata?.image || ''

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: 'canonical', key: url, href: url }]}
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
          property: `og:site_name`,
          content: site.siteMetadata.description
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: type
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author
        // },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  )
}

export default SEO
