/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import { FC } from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Layout/SEO'
import Hero from '../components/Hero'
import { PrismicText, Slice } from '../utils/types'
import PostSlices from '../components/PostSlices'

export interface PostTemplateProps {
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

const PostTemplate: FC<PostTemplateProps> = props => {
  const {
    path,
    data: { prismicPost }
  } = props
  const { data, first_publication_date } = prismicPost
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

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      ...PrismicPost
    }
  }
`
