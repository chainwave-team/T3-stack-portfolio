import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/seo'
import SectionHeader from './homepage/Header'
import SectionSlider from './homepage/Slider'
import ServicesSection from './homepage/Services'
import propTypes from '../utils/prop-types'

const IndexPage = ({ data }) => {
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services
  } = data.homepage.data
  const projects = data.projects.nodes.map(({ data: projectsData, uid }) => ({
    ...projectsData,
    slug: uid
  }))

  return (
    <Layout>
      <SEO title="Portfolio" />
      <SectionHeader
        textarea={introduction.html}
        buttonLabel={header_contact_button_label}
      />
      <ServicesSection title={services_introduction.text} items={services} />
      <SectionSlider projects={projects} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      uid: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.shape({
        header_contact_button_label: PropTypes.string,
        title: propTypes.textarea,
        introduction: propTypes.textarea,
        services_introduction: propTypes.textarea,
        services: PropTypes.arrayOf(
          PropTypes.shape({
            service_title: PropTypes.string,
            service_textarea: propTypes.textarea
          })
        )
      })
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          data: propTypes.project
        })
      )
    })
  })
}

IndexPage.defaultProps = {
  data: {
    homepage: {
      type: 'homepage',
      data: {
        header_contact_button_label: '',
        title: {
          text: ''
        },
        introduction: {
          html: ''
        },
        services_introduction: {
          text: ''
        },
        services: {
          service_title: '',
          service_textarea: {
            html: ''
          }
        }
      }
    }
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: prismicHomepage(lang: { eq: "fr-fr" }) {
      uid
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
