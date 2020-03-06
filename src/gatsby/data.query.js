const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

const PostBodyText = `
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
`

const PostBodyQuote = `
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
`

const PostBodyCode = `
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
`

const PostBodyImageWithCaption = `
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
                ${GatsbyFluid_withWebp}
              }
            }
          }
        }
        caption
      }
    }
`

const PostThumbnail = `
    thumbnail {
        localFile {
        childImageSharp {
            fluid(
            maxWidth: 1180
            jpegQuality: 100
            pngQuality: 100
            quality: 100
            ) {
            ${GatsbyFluid_withWebp}
            }
        }
        }
    }
`

const PostRelations = `
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
`

const PostCanonical = `
    canonical {
        document {
            data {
                title {
                    text
                }
            }
        }
    }
`

const TechTag = `
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
`

const Post = `
    uid
    first_publication_date(formatString: "DD/MM/YYYY")
    data {
        published_date(formatString: "DD/MM/YYYY")
        title {
            html
            text
        }

        ${PostThumbnail}
        ${PostCanonical}
        ${PostRelations}

        body {
            ${PostBodyImageWithCaption}
            ${PostBodyQuote}
            ${PostBodyCode}
            ${PostBodyText}
        }
    }
`

module.exports = {
  postTags: `{
        tags: allPrismicTechTags {
            edges {
                node {
                    ${TechTag}
                }
            }
        }
    }`,
  posts: `{
        posts: allPrismicPost(filter: { lang: { eq: "fr-fr" } }) {
            edges {
                node {
                    ${Post}
                }
            }
        }
    }`
}
