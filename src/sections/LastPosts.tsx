/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

import Link from '../components/Link'
import { PrismicPost } from '../utils/types'
import { getTagsFromRelation } from '../utils/utils'
import Container from '../components/Container'
import Button from '../components/Button'
import TagList from '../components/TagList'
import Fade from '../components/Fade'

type Post = { node: PrismicPost }

const settings = { gutterSize: 3, cardHeight: 250 }

function PostCard({ data, ...props }: PrismicPost) {
  const { uid, first_publication_date, last_publication_date } = props
  const { title, published_date: customDate, relations } = data
  const [hover, setHover] = useState(false)
  const hoverState = useSpring({
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    borderWidth: hover ? 1 : 0,
    borderStyle: hover ? `solid` : `initial`
  })
  const date = customDate || last_publication_date || first_publication_date

  return (
    <Fade>
      <Link to={`/${uid}`}>
        <animated.div
          style={{
            overflow: 'hidden',
            ...hoverState
          }}
          sx={{
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            m: settings.gutterSize,
            py: [4],
            px: [3],
            bg: hover ? 'transparent' : 'blue',
            minHeight: settings.cardHeight,
            cursor: 'pointer',
            color: 'white'
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div>
            <Styled.p sx={{ color: 'grey.light', mt: 0, fontSize: 1 }}>
              {date}
            </Styled.p>
            <Styled.h4 sx={{}}>{title.text}</Styled.h4>
          </div>
          <TagList tags={getTagsFromRelation(relations)} />
        </animated.div>
      </Link>
    </Fade>
  )
}

type Props = {
  posts: Post[]
  title?: string
  button?: string
}

export default function LastPosts({ posts, title, button }: Props) {
  if (!posts || posts.length < 1) return null
  return (
    <Container section id="blog">
      <Styled.h2 sx={{ textAlign: 'center' }}>{title}</Styled.h2>
      <Flex
        sx={{
          mx: -settings.gutterSize,
          my: 4,
          minHeight: settings.cardHeight * 1.75,
          justifyItems: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {posts.map(({ node }) => (
          <div key={node.uid} sx={{ width: ['full', 'full', '1/3'] }}>
            <PostCard {...node} />
          </div>
        ))}
      </Flex>
      <Button sx={{ m: 'auto', display: 'block' }}>{button}</Button>
    </Container>
  )
}

LastPosts.defaultProps = {
  title: 'Mes derniers articles',
  button: 'Voir le blog'
}
