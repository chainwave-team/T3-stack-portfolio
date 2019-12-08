import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/seo'
import SectionHeader from './homepage/Header'
import SectionSlider from './homepage/Slider'
import ServicesSection from './homepage/Services'
import { PrismicProject, PrismicText } from '../utils/types'

type Props = {
  data: {
    homepage: {
      type: string
      data: {
        header_contact_button_label: string
        title: PrismicText
        introduction: PrismicText
        services_introduction: PrismicText
        services: Array<{
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
  }
}

function IndexPage({ data: { homepage, projects } }: Props) {
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services
  } = homepage.data

  return (
    <Layout>
      <SEO title="Portfolio" />
      <SectionHeader
        textarea={introduction.html}
        buttonLabel={header_contact_button_label}
      />
      <ServicesSection title={services_introduction.text} items={services} />
      <SectionSlider nodes={projects.nodes} />
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
          service_title
          service_textarea {
            html
          }
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
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
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
              id
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
