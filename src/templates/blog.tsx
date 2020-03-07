/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { TemplateBlog } from '../types'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'
import PostTagCloud from '../sections/Post/PostTagCloud'

const BlogTemplate: FC<TemplateBlog> = ({ location, pageContext }) => (
  <Layout path={location.pathname}>
    <SEO title="Blog" />
    <BlogHero />
    <BlogList posts={pageContext.posts} />
    <PostTagCloud tags={pageContext.postTags} />
  </Layout>
)

export default BlogTemplate
