/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import Hero from '../components/Hero'
import { PrismicText, Slice } from '../utils/types'
import PostSlices from '../components/PostSlices'

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "DD-MM-YYYY")
      data {
        title {
          text
        }
        body {
          __typename
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
          ... on PrismicPostBodyQuote {
            id
            slice_type
            primary {
              quote {
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
          ... on PrismicPostBodyText {
            id
            slice_type
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCode {
            id
            slice_type
            slice_label
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
      }
    }
  }
`

type Props = {
  path: string
  data: {
    prismicPost: {
      first_publication_date: string
      data: {
        title: PrismicText
        body: Array<Slice>
      }
    }
  }
}

export default function PostTemplate(props: Props) {
  const {
    path,
    data: { prismicPost }
  } = props
  const { data, first_publication_date } = prismicPost
  console.log({ props })
  return (
    <Layout path={path}>
      <SEO title={data.title.text || ''} />
      <Hero title={data.title.text || ''} meta={first_publication_date} />
      <div sx={{ mb: 6 }}>
        {data.body ? <PostSlices slices={data.body} /> : null}
      </div>
    </Layout>
  )
}
