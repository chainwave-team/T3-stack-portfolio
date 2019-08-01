import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionHeader from './homepage/header'
import SectionSkills from './homepage/skills'
import SectionSlider from './homepage/slider'
import SectionFooter from './homepage/footer'

// import Acc from '../components/Acc'

const IndexPage = ({ data }) => {
  const { options, projects, categories } = data

  // Merge categories into projects list
  const projectsList = projects.nodes.map(item => {
    const projectId = item.project_type[0] || false
    const projectType = projectId
      ? categories.nodes.filter(el => el.wordpress_id === projectId)
      : []
    return { ...item, project_type: projectType }
  })

  // Format names from WordPress/graphQL to React
  const {
    header_name: title,
    header_textarea: textarea,
    header_titres: subTitles,
    label_bouton_contact: buttonLabel,
    skills_titre: skillsTitle,
    skills,
    footer
  } = options.options.portfolio

  const titlesList = subTitles.map(item => item.titre_metier)

  // console.log({ options, projectsList })
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Acc/> */}
      <SectionHeader
        title={title}
        textarea={textarea}
        subTitles={titlesList}
        buttonLabel={buttonLabel}
      />
      <SectionSkills title={skillsTitle} items={skills} />
      <SectionSlider items={projectsList} />
      <SectionFooter items={footer} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.shape({
      options: PropTypes.object
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }),
    categories: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    })
  })
}

IndexPage.defaultProps = {
  data: {
    options: { options: {} },
    projects: { nodes: [] },
    categories: { nodes: [] }
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    options: wordpressAcfOptions {
      options {
        github_url
        header_textarea
        linkedin_url
        malt_url
        portfolio {
          header_name
          header_textarea
          label_bouton_contact
          skills_titre
          projets_titre
          footer_text
          footer {
            titre
            intro
            links {
              label
              lien
            }
          }
          header_titres {
            titre_metier
          }
          skills {
            titre
            content
          }
        }
      }
    }
    projects: allWordpressWpProjets(limit: 20) {
      nodes {
        id
        wordpress_id
        title
        date(formatString: "MMM YY")
        status
        excerpt
        content
        tags {
          id
          name
        }
        project_type
        acf {
          lien_demo
          lien_sources
        }
        featured_media {
          alt_text
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
    categories: allWordpressWpProjectType {
      nodes {
        name
        wordpress_id
        id
      }
    }
  }
`
