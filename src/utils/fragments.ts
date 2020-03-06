/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby'

/**
 * Fragments are globals
 * Just name and export import PropTypes from 'prop-types'
 * So, make sure the names are uniques
 *
 * @link https://medium.com/flatiron-labs/using-graphql-fragments-across-multiple-templates-in-gatsbyjs-7731a2d28bbd
 */

export const siteMetaData = graphql`
  fragment siteMetaData on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`

export const PrismicTechTag = graphql`
  fragment PrismicTechTag on PrismicTechTags {
    uid
    data {
      title {
        text
        html
      }
      description {
        text
        html
      }
    }
  }
`

export const PrismicPost = graphql`
  fragment PrismicPost on PrismicPost {
    uid
    first_publication_date(formatString: "DD/MM/YYYY")
    data {
      published_date(formatString: "DD/MM/YYYY")
      title {
        html
        text
      }

      thumbnail {
        localFile {
          childImageSharp {
            fixed(width: 1180) {
              ...GatsbyImageSharpFixed
            }
            fluid(
              maxWidth: 1180
              jpegQuality: 100
              pngQuality: 100
              quality: 100
            ) {
              ...GatsbyImageSharpFluid
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
            uid
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

      body {
        ...PrismicPostBodyImageWithCaption
        ...PrismicPostBodyQuote
        ...PrismicPostBodyText
        ...PrismicPostBodyCode
      }
    }
  }
`

// Post slice Text
export const PrismicPostBodyText = graphql`
  fragment PrismicPostBodyText on PrismicPostBodyText {
    ... on PrismicPostBodyText {
      id
      slice_type
      primary {
        text {
          text
          html
        }
      }
    }
  }
`

// Post slice Quote
export const PrismicPostBodyQuote = graphql`
  fragment PrismicPostBodyQuote on PrismicPostBodyQuote {
    ... on PrismicPostBodyQuote {
      id
      slice_type
      primary {
        quote {
          text
          html
        }
        source_name
        source_link {
          link_type
          target
          url
        }
      }
    }
  }
`

// Post slice Code
export const PrismicPostBodyCode = graphql`
  fragment PrismicPostBodyCode on PrismicPostBodyCode {
    ... on PrismicPostBodyCode {
      id
      slice_type
      primary {
        code {
          html
          text
          raw {
            label
          }
        }
      }
    }
  }
`

// Post slice Image with Caption
export const PrismicPostBodyImageWithCaption = graphql`
  fragment PrismicPostBodyImageWithCaption on PrismicPostBodyImageWithCaption {
    ... on PrismicPostBodyImageWithCaption {
      id
      slice_type
      slice_label
      prismicId
      primary {
        image {
          alt
          localFile {
            childImageSharp {
              fluid(
                jpegQuality: 100
                pngQuality: 100
                quality: 100
                maxWidth: 1920
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        caption
      }
    }
  }
`
