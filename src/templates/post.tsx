/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Hero from '../components/ui/Hero'
import { PrismicText } from '../utils/types'

type Props = {
  data: {
    prismicPost: {
      first_publication_date: string
      data: {
        title: PrismicText
      }
    }
  }
}

export default function PostTemplate({ data: { prismicPost } }: Props) {
  const { data, first_publication_date } = prismicPost
  return (
    <Layout>
      <Hero title={data.title.text || ''} meta={first_publication_date} />

      {/*
        // TODO : Thumbnail (optional)
        // Todo : multiple container sizes
        // TODO : Slices 
      */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(formatString: "DD-MM-YYYY")
      data {
        title {
          text
        }
      }
    }
  }
`
