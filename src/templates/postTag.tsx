/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import { TemplatePostTag } from '../types/templates'
import SEO from '../Layout/SEO'
import BlogHero from '../sections/Blog/BlogHero'
import useLocalStorage from '../hooks/useLocalStorage'

const BlogFilterBar = loadable(() => import('../sections/Blog/BlogFilterBar'))
const BlogList = loadable(() => import('../sections/Blog/BlogList'))
const PostTagCloud = loadable(() => import('../sections/Post/PostTagCloud'))

const PostTagTemplate: FC<TemplatePostTag> = ({ location, pageContext }) => {
  const [isGridMode, setGridMode] = useLocalStorage('gridMode', true)
  const { currentTag, posts, postTags } = pageContext
  const { pathname } = location
  const title = currentTag?.data.title?.text || ''

  return (
    <Layout path={pathname}>
      <SEO
        title={title}
        description={currentTag.data?.description?.text}
        path={pathname}
      />
      <BlogHero
        title={title}
        subTitle={`Tous les articles parlant de : ${title}`}
      />
      <BlogFilterBar onChangeMode={setGridMode} />
      <BlogList posts={posts} modeList={!isGridMode} />
      <PostTagCloud tags={postTags} />
    </Layout>
  )
}

export default PostTagTemplate
