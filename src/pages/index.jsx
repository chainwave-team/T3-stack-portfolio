import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout/layout'
import SEO from '../components/Layout/seo'
import SectionHeader from './homepage/header'
import SectionSlider from './homepage/slider'
import ServicesSection from './homepage/Services'
import propTypes from '../utils/prop-types'

const IndexPage = ({ data }) => {
  const { projects, categories, tags, homepage } = data

  // Filter project with image
  const withImageProjects = projects.edges.filter(({ node }) => {
    if (node.featured_media === null) {
      console.warn(
        `The post "${node.title}" (id: ${node.wordpress_id}) n'a pas d'image`
      )
      return false
    }
    return true
  })

  // Merge categories into projects list
  const projectsWithTax = withImageProjects.map(({ node }) => ({
    ...node,
    categories:
      node.project_cat.length > 0
        ? categories.nodes.filter(
            cat => node.project_cat.indexOf(cat.wordpress_id) !== -1
          )
        : [],
    tags:
      node.project_cat.length > 0
        ? tags.nodes.filter(
            tag => node.project_tag.indexOf(tag.wordpress_id) !== -1
          )
        : []
  }))

  // Filter if post.status === publish
  const publicProjects = projectsWithTax.filter(
    node => node.status === 'publish'
  )

  return (
    <Layout>
      <SEO title="Portfolio" />
      <SectionHeader
        textarea={homepage.data.introduction.html}
        buttonLabel={homepage.data.header_contact_button_label}
      />
      <ServicesSection
        title={homepage.data.services_introduction.text}
        items={homepage.data.services}
      />
      <SectionSlider items={publicProjects} />
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
      edges: PropTypes.arrayOf(PropTypes.object)
    }),
    categories: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }),
    tags: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
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
    },
    tags: { nodes: [] },
    categories: { nodes: [] },
    projects: { edges: [] }
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
    projects: allWordpressWpPortfolio {
      edges {
        node {
          id
          project_cat
          project_tag
          slug
          status
          template
          title
          wordpress_id
          content
          acf {
            lien_demo
            lien_sources
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    categories: allWordpressWpProjectCat {
      nodes {
        id
        name
        slug
        wordpress_id
      }
    }
    tags: allWordpressWpProjectTag {
      nodes {
        id
        name
        slug
        wordpress_id
      }
    }
  }
`
