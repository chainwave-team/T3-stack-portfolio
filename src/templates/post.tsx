/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import PostHero from '../sections/Post/PostHero'
import PostSlices from '../sections/Post/PostSlices'
import LastPosts from '../components/LastPosts'
import PostThumbnail from '../sections/Post/PostThumbnail'
import Comments from '../components/Comments'
import PostTagCloud from '../sections/Post/PostTagCloud'
import { TemplatePost } from '../types.d'
import { getRelatedPosts, getPostsTags } from '../utils/utils'

const PostTemplate: FC<TemplatePost> = ({ location, data }) => {
  const { prismicPost, allPosts, allTags } = data
  const relatedPosts = getRelatedPosts(prismicPost, allPosts)
  const techTags = getPostsTags(allPosts, allTags)
  const { uid, data: postData, first_publication_date } = prismicPost

  if (!postData?.title?.text) {
    return null
  }

  return (
    <Layout path={location.pathname}>
      <SEO title={postData.title.text} />
      <PostHero
        title={postData.title.text}
        date={postData.published_date || first_publication_date}
      />
      <PostThumbnail thumbnail={postData?.thumbnail} />
      <PostSlices slices={postData?.body} />
      <LastPosts
        title="Plus d'articles"
        button="Tous les articles"
        posts={relatedPosts?.slice(0, 3)}
      />
      <Comments title={postData.title.text} uid={uid} />
      <PostTagCloud tags={techTags} />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      ...PrismicPost
    }
    allPosts: allPrismicPost {
      edges {
        node {
          ...PrismicPost
        }
      }
    }
    allTags: allPrismicTechTags {
      edges {
        node {
          ...PrismicTechTag
        }
      }
    }
  }
`
