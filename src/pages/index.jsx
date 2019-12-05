import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionHeader from './homepage/header'
import SectionSlider from './homepage/slider'
import SectionFooter from './homepage/footer'
import ServicesSection from './homepage/Services'

const IndexPage = ({ data }) => {
  const { projects, home, categories, tags, homepage } = data

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

  // Format names from WordPress/graphQL to React
  const { skills_titre: skillsTitle, skills, footer } = home.acf

  console.log({ homepage })

  return (
    <Layout>
      <SEO title="Portfolio" />
      <SectionHeader
        title={homepage.data.name}
        textarea={homepage.data.introduction.html}
        subTitle={homepage.data.job}
        buttonLabel={homepage.data.header_contact_button_label}
      />
      <ServicesSection
        title={homepage.data.services_introduction.text}
        items={homepage.data.services}
      />
      <SectionSlider items={publicProjects} />
      <SectionFooter items={footer} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      uid: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      data: PropTypes.shape({
        name: PropTypes.string,
        header_contact_button_label: PropTypes.string,
        job: PropTypes.string,
        title: PropTypes.shape({
          text: PropTypes.string
        }),
        introduction: PropTypes.shape({
          html: PropTypes.string
        }),
        // Services
        services_introduction: PropTypes.shape({
          text: PropTypes.string
        }),
        services: PropTypes.arrayOf(
          PropTypes.shape({
            service_title: PropTypes.string,
            service_textarea: PropTypes.shape({
              html: PropTypes.string
            })
          })
        )
      })
    }),
    projects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    }),
    home: PropTypes.shape({
      acf: PropTypes.object
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
        name: '',
        header_contact_button_label: '',
        job: '',
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
    home: { acf: {} },
    tags: { nodes: [] },
    categories: { nodes: [] },
    projects: { edges: [] }
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: prismicHomepage {
      uid
      type
      data {
        name
        introduction {
          html
        }
        title {
          text
        }
        job
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
    home: wordpressPage(wordpress_id: { eq: 765 }) {
      acf {
        header_name
        header_textarea
        label_bouton_contact
        skills_titre
        footer_text
        footer_small
        header_titres {
          titre_metier
        }
        skills {
          titre
          content
        }
        footer {
          intro
          titre
          links {
            label
            lien
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
