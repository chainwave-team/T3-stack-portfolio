/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import { TemplatePostTag } from '../types.d'
import SEO from '../Layout/SEO'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'

const PostTagTemplate: FC<TemplatePostTag> = ({ location, pageContext }) => {
  const { currentTag, posts } = pageContext
  const { pathname } = location
  const title = currentTag?.data.title?.text
  if (!title) {
    return null
  }

  return (
    <Layout path={pathname}>
      <SEO title={title} />
      <BlogHero
        title={title}
        subTitle={`Tous les articles parlant de : ${title}`}
      />
      <BlogList posts={posts} />
    </Layout>
  )
}

export default PostTagTemplate
