import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'
import SectionHeader from '../sections/homepage/Header'
import SectionSlider from '../sections/homepage/Slider'
import ServicesSection from '../sections/homepage/Services'
import LastPosts from '../sections/LastPosts'
import {
  PrismicProject,
  PrismicText,
  ServicesStatus,
  PrismicPost
} from '../utils/types'

type Props = {
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

function IndexPage({ path, data: { homepage, projects, posts } }: Props) {
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services
  } = homepage.data

  return (
    <Layout path={path}>
      <SEO title="Portfolio" />
      <SectionHeader
        textarea={introduction.html}
        buttonLabel={header_contact_button_label}
      />
      <ServicesSection title={services_introduction.text} items={services} />
      <SectionSlider nodes={projects.nodes} />
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
          html
        }
        title {
          text
        }
        header_contact_button_label
        services_introduction {
          text
        }
        services {
          status
          service_title
          service_textarea {
            html
          }
        }
      }
    }
    posts: allPrismicPost(
      limit: 3
      sort: { fields: first_publication_date, order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            thumbnail {
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            canonical {
              document {
                data {
                  title {
                    text
                  }
                }
              }
            }
            relations {
              tech_tags {
                document {
                  data {
                    title {
                      html
                      text
                    }
                    description {
                      html
                      text
                    }
                  }
                }
              }
            }
            published_date(formatString: "DD-MM-YYYY")
          }
          first_publication_date(formatString: "DD-MM-YYYY")
          last_publication_date(formatString: "DD-MM-YYYY")
        }
      }
    }
    projects: allPrismicProject(filter: { lang: { eq: "fr-fr" } }) {
      nodes {
        uid
        data {
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
                fluid(quality: 100) {
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
