/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC, useState } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { TemplateBlog } from '../types'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'
import PostTagCloud from '../sections/Post/PostTagCloud'
import BlogFilterBar from '../sections/Blog/BlogFilterBar'

const BlogTemplate: FC<TemplateBlog> = ({ location, pageContext }) => {
  const [modeList, setModeList] = useState(false)

  return (
    <Layout path={location.pathname}>
      <SEO title="Blog" />
      <BlogHero />
      <BlogFilterBar onChangeMode={(mode: boolean) => setModeList(mode)} />
      <BlogList posts={pageContext.posts} modeList={modeList} />
      <PostTagCloud tags={pageContext.postTags} />
    </Layout>
  )
}

export default BlogTemplate
