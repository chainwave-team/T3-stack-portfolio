/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import PostHero from '../sections/Post/PostHero'
import PostSlices from '../sections/Post/PostSlices'
import LastPosts from '../components/LastPosts'
import PostThumbnail from '../sections/Post/PostThumbnail'
import Comments from '../components/Comments'
import PostTagCloud from '../sections/Post/PostTagCloud'
import { TemplatePost } from '../types'
import { getRelatedPosts } from '../utils'

const PostTemplate: FC<TemplatePost> = ({ location, pageContext }) => {
  const { allPosts, postTags, currentPost } = pageContext
  const relatedPosts = getRelatedPosts(currentPost, allPosts)
  const { uid, data, first_publication_date } = currentPost
  const { pathname } = location

  if (!data?.title?.text) {
    return null
  }

  return (
    <Layout path={pathname}>
      <SEO title={data.title.text} />
      <PostHero
        title={data.title.text}
        date={data.published_date || first_publication_date}
      />
      <PostThumbnail thumbnail={data?.thumbnail} />
      <PostSlices slices={data?.body} />
      <LastPosts
        title="Plus d'articles"
        button="Tous les articles"
        posts={relatedPosts}
      />
      <Comments title={data.title.text} uid={uid} />
      <PostTagCloud tags={postTags} />
    </Layout>
  )
}

export default PostTemplate
