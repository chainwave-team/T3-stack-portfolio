/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import Hero from '../components/tmp/Hero'
import { PrismicPost } from '../utils/types'
import PostSlices from '../components/PostSlices'
import LastPosts from '../components/tmp/LastPosts'

export interface PostTemplateProps {
  path: string
  data: {
    prismicPost: PrismicPost
    similarPosts: {
      edges: Array<{
        node: PrismicPost
      }>
    }
  }
}

const PostTemplate: FC<PostTemplateProps> = props => {
  const {
    path,
    data: { prismicPost, similarPosts }
  } = props
  const { uid, data, first_publication_date } = prismicPost
  const excludes = ['bonjour-cher-visiteur-bienvenue-sur-mon-article-demo', uid]
  const relatedPosts = similarPosts.edges.filter(({ node }) => {
    // Here "related posts algorithm"
    if (excludes.includes(node.uid)) {
      return false
    }
    // ... rest of algorithm
    return true
  })

  return (
    <Layout path={path}>
      <SEO title={data.title.text || ''} />
      <Hero
        title={data.title.text || ''}
        date={data.published_date || first_publication_date}
      />
      <div sx={{ my: 4 }}>
        {data?.body ? <PostSlices slices={data.body} /> : null}
      </div>
      <LastPosts
        title="Plus d'articles"
        button="Tous les articles"
        posts={relatedPosts.slice(0, 3)}
      />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      ...PrismicPost
    }
    similarPosts: allPrismicPost {
      edges {
        node {
          ...PrismicPost
        }
      }
    }
  }
`
