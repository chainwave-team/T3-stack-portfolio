/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import { TemplatePostTag } from '../types/templates'
import SEO from '../Layout/SEO'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'
import PostTagCloud from '../sections/Post/PostTagCloud'
import useLocalStorage from '../hooks/useLocalStorage'
import BlogFilterBar from '../sections/Blog/BlogFilterBar'

const PostTagTemplate: FC<TemplatePostTag> = ({ location, pageContext }) => {
  const [isGridMode, setGridMode] = useLocalStorage('gridMode', true)
  const { currentTag, posts, postTags } = pageContext
  const { pathname } = location
  const title = currentTag?.data.title?.text
  if (!title) {
    return null
  }

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
