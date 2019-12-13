/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Fragment } from 'react'
import uuid from 'uuid'

import Layout from '../components/Layout/Layout'
import Hero from '../components/ui/Hero'
import Text from '../components/slices/Text'
import Code from '../components/slices/Code'
import Quote from '../components/slices/Quote'
import ImageCaption from '../components/slices/ImageCaption'
import { PrismicText } from '../utils/types'

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
            prismicId
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              caption
              image_size
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

type Slice = {
  slice_type: string
  primary: any
}

// Sort and display the different slice options
const PostSlices = ({ slices }: { slices: Array<Slice> }) => {
  return slices.map(slice => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <Fragment key={uuid()}>
              <Text slice={slice} />
            </Fragment>
          )

        case 'quote':
          return (
            <Fragment key={uuid()}>
              <Quote slice={slice} />
            </Fragment>
          )

        case 'code':
          return (
            <Fragment key={uuid()}>
              <Code slice={slice} />
            </Fragment>
          )

        case 'image_with_caption':
          return (
            <Fragment key={uuid()}>
              <ImageCaption slice={slice} />
            </Fragment>
          )

        default:
          return null
      }
    })()
    return res
  })
}

type Props = {
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

export default function PostTemplate({ data: { prismicPost } }: Props) {
  const { data, first_publication_date } = prismicPost
  return (
    <Layout>
      <Hero title={data.title.text || ''} meta={first_publication_date} />
      <div sx={{ mb: 6 }}>
        {data.body ? <PostSlices slices={data.body} /> : null}
      </div>
    </Layout>
  )
}
