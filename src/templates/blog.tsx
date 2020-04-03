/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { TemplateBlog } from '../types/templates'
import PageHero from '../components/PageHero'
import useLocalStorage from '../hooks/useLocalStorage'

const BlogFilterBar = loadable(() => import('../sections/Blog/BlogFilterBar'))
const BlogList = loadable(() => import('../sections/Blog/BlogList'))
const PostTagCloud = loadable(() => import('../sections/Post/PostTagCloud'))

const BlogTemplate: FC<TemplateBlog> = ({ location, pageContext }) => {
  const [isGridMode, setGridMode] = useLocalStorage('gridMode', true)
  const { postTags, posts } = pageContext
  const { pathname } = location
  const title = 'Blog'
  const subTitle = 'Découvrez les derniers articles du blog'

  return (
    <Layout path={pathname}>
      <SEO title={title} path={pathname} description={subTitle} />
      <PageHero {...{ title, subTitle }} />
      <BlogFilterBar onChangeMode={setGridMode} />
      <BlogList posts={posts} modeList={!isGridMode} />
      <PostTagCloud tags={postTags} />
    </Layout>
  )
}

export default BlogTemplate
