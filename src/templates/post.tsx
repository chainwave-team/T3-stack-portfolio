/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import PostHero from '../sections/Post/PostHero'
import PostThumbnail from '../sections/Post/PostThumbnail'
import { TemplatePost } from '../types/templates'

const PostBottom = loadable(() => import('../sections/Post/PostBottom'))
const PostTagCloud = loadable(() => import('../sections/Post/PostTagCloud'))
const Comments = loadable(() => import('../components/Comments'))
const LastPosts = loadable(() => import('../components/LastPosts'))
const PostSlices = loadable(() => import('../sections/Post/PostSlices'))

const PostTemplate: FC<TemplatePost> = ({ location, pageContext }) => {
  const { relatedPosts, postTags, currentPost } = pageContext
  const { uid, data, first_publication_date } = currentPost
  const { pathname } = location

  if (!data?.title?.text) {
    return null
  }

  return (
    <Layout path={pathname}>
      <SEO
        type="article"
        title={data?.meta_title || data.title.text}
        description={data?.meta_description || ''}
        path={pathname}
        imageUrl={data?.thumbnail?.url}
      />
      <PostHero
        title={data.title.text}
        date={data.published_date || first_publication_date}
      />
      <PostThumbnail thumbnail={data?.thumbnail} />
      <PostSlices slices={data?.body} />
      <PostBottom
        authorName="Julien CARON"
        authorDesc="Salut, moi c’est Julien et j’adore construire des choses qui vivent sur Internet."
      />
      <LastPosts title="Plus d'articles" posts={relatedPosts} />
      <Comments title={data.title.text} uid={uid} />
      <PostTagCloud tags={postTags} />
    </Layout>
  )
}

export default PostTemplate
