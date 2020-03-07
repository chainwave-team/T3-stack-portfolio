/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC } from 'react'

import Link from './Link'
import { PrismicPost } from '../types'
import Container from './Container'
import Button from './Button'
import PostCardGrid from './PostCardGrid'

export interface LastPostsProps {
  posts: Array<{ node: PrismicPost }>
  title?: string
  button?: string
}

const LastPosts: FC<LastPostsProps> = ({
  posts,
  title = 'Mes derniers articles',
  button = 'Voir le blog'
}) => {
  if (!posts || posts.length < 1) return null
  return (
    <Container section id="blog">
      <Styled.h2 sx={{ textAlign: 'center' }}>{title}</Styled.h2>
      <PostCardGrid posts={posts.slice(0, 3)} />
      <Link to="/blog">
        <Button sx={{ m: 'auto', display: 'block' }}>{button}</Button>
      </Link>
    </Container>
  )
}

export default LastPosts
