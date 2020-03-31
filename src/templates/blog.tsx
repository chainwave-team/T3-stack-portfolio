/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { TemplateBlog } from '../types/templates'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'
import PostTagCloud from '../sections/Post/PostTagCloud'
import BlogFilterBar from '../sections/Blog/BlogFilterBar'
import useLocalStorage from '../hooks/useLocalStorage'

const BlogTemplate: FC<TemplateBlog> = ({ location, pageContext }) => {
  const [isGridMode, setGridMode] = useLocalStorage('gridMode', true)
  const { postTags, posts } = pageContext
  const { pathname } = location

  return (
    <Layout path={pathname}>
      <SEO
        title="Blog"
        path={pathname}
        description="Découvrez les derniers articles du blog"
      />
      <BlogHero />
      <BlogFilterBar onChangeMode={setGridMode} />
      <BlogList posts={posts} modeList={!isGridMode} />
      <PostTagCloud tags={postTags} />
    </Layout>
  )
}

export default BlogTemplate
