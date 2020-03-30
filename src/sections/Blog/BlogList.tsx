/** @jsx jsx */
import { jsx, Styled, Flex, Container } from 'theme-ui'
import { FC } from 'react'

import { PrismicPost } from '../../types/postsType'
import Link from '../../components/Link'
import Button from '../../components/Button'
import PostCardGrid from '../../components/PostCardGrid'
import PostCardList from '../../components/PostCardList'

export interface BlogListProps {
  posts?: Array<{
    node: PrismicPost
  }>
  modeList?: boolean
}

const BlogList: FC<BlogListProps> = ({ posts = [], modeList = false }) => {
  const List = () =>
    modeList ? <PostCardList posts={posts} /> : <PostCardGrid posts={posts} />
  return (
    <Container variant={modeList ? 'blog' : 'container'} sx={{ mt: 5, mb: 6 }}>
      {posts.length > 0 ? (
        <List />
      ) : (
        <div sx={{ py: 3 }}>
          <Styled.h5 sx={{ textAlign: 'center' }}>
            Il n&apos;y a pas d&apos;article dans cette catégorie
            <br />
          </Styled.h5>
          <Flex sx={{ justifyContent: 'center', py: 3 }}>
            <Link to="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </Flex>
        </div>
      )}
    </Container>
  )
}

export default BlogList
