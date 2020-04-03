/** @jsx jsx */
import { jsx, Styled, Container, Button, Box, Flex } from 'theme-ui'
import { FC } from 'react'

import Link from './Link'
import { PrismicPost } from '../types/postsType'
import PostCardGrid from './PostCardGrid'
import { NodeArrayOf } from '../types'

export interface LastPostsProps {
  posts: NodeArrayOf<PrismicPost>
  title?: string
  button?: string
  displayButton?: boolean
}

const LastPosts: FC<LastPostsProps> = ({
  posts,
  title = 'Mes derniers articles',
  button = 'Voir le blog',
  displayButton = false
}) => {
  if (!posts || posts.length < 1) return null
  return (
    <Container sx={{ my: 6 }} id="blog">
      <Styled.h2 sx={{ textAlign: 'center' }}>{title}</Styled.h2>
      <PostCardGrid posts={posts.slice(0, 3)} />
      {displayButton && (
        <Flex sx={{ justifyContent: 'center' }}>
          <Link to="/blog" sx={{ m: 'auto', display: 'block' }}>
            <Button>{button}</Button>
          </Link>
        </Flex>
      )}
    </Container>
  )
}

export default LastPosts
