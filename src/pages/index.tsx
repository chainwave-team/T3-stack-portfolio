/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import { graphql } from 'gatsby'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import HomepageHero from '../sections/HomepageHero'
import LastPosts from '../components/LastPosts'
import {
  PrismicProject,
  PrismicText,
  ServicesStatus,
  PrismicPost
} from '../utils/types'
import HomepagePortfolio from '../sections/HomepagePortfolio'

const HomepageServices = loadable(() => import('../sections/HomepageServices'))

export interface IndexPageProps {
  path: string
  data: {
    homepage: {
      type: string
      data: {
        header_contact_button_label: string
        title: PrismicText
        introduction: PrismicText
        services_introduction: PrismicText
        services: Array<{
          status: ServicesStatus
          service_title: string
          service_textarea: PrismicText
        }>
      }
    }
    projects: {
      nodes: Array<{
        uid: string
        data: PrismicProject
      }>
    }
    posts: {
      edges: Array<{
        node: PrismicPost
      }>
    }
  }
}

const IndexPage: FC<IndexPageProps> = ({
  path,
  data: { homepage, projects, posts }
}) => {
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services
  } = homepage.data

  return (
    <Layout path={path}>
      <SEO title="Portfolio" />
      <HomepageHero
        textarea={introduction.text}
        buttonLabel={header_contact_button_label}
      />
      <HomepageServices
        title={services_introduction.text || ''}
        items={services}
      />
      <HomepagePortfolio nodes={projects.nodes} />
      <LastPosts posts={posts.edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: prismicHomepage(lang: { eq: "fr-fr" }) {
      type
      data {
        introduction {
          text
          html
        }
        title {
          text
          html
        }
        header_contact_button_label
        services_introduction {
          text
          html
        }
        services {
          status
          service_title
          service_textarea {
            text
            html
          }
        }
      }
    }
    posts: allPrismicPost(
      limit: 3
      sort: { fields: first_publication_date, order: DESC }
      filter: {
        uid: { ne: "bonjour-cher-visiteur-bienvenue-sur-mon-article-demo" }
      }
    ) {
      edges {
        node {
          ...PrismicPost
        }
      }
    }
    projects: allPrismicProject(filter: { lang: { eq: "fr-fr" } }) {
      nodes {
        uid
        data {
          isfeatured
          demo_link {
            link_type
            url
            target
          }
          full_screen {
            alt
            url
            localFile {
              childImageSharp {
                fluid(quality: 85, maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html {
            html
            text
          }
          project_type {
            document {
              data {
                title {
                  text
                  html
                }
              }
            }
          }
          relations {
            tech_tags {
              document {
                data {
                  description {
                    html
                    text
                  }
                  title {
                    html
                    text
                  }
                }
              }
            }
          }
          source_link {
            link_type
            url
            target
          }
          title {
            html
            text
          }
          video {
            link_type
            target
            name
            kind
            url
            size
          }
        }
      }
    }
  }
`
