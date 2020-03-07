/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import { FC, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import { PrismicPost } from '../types'
import Fade from './Fade'
import Link from './Link'
import TagList from './TagList'
import { getTagsFromRelation } from '../utils'

const settings = { gutterSize: 3, cardHeight: 250 }

export const PostCard: FC<PrismicPost> = ({
  uid,
  first_publication_date,
  data: { title, published_date, relations }
}) => {
  const [hover, setHover] = useState(false)
  const hoverState = useSpring({
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    borderWidth: hover ? 1 : 0,
    borderStyle: hover ? `solid` : `initial`
  })
  const date = published_date || first_publication_date

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
            <Styled.p sx={{ color: 'muted', mt: 0, fontSize: 1 }}>
              {date}
            </Styled.p>
            <Styled.h4>{title?.text || ''}</Styled.h4>
          </div>
          {relations && <TagList tags={getTagsFromRelation(relations)} />}
        </animated.div>
      </Link>
    </Fade>
  )
}

export interface PostCardGridProps {
  posts: Array<{ node: PrismicPost }>
}

const PostCardGrid: FC<PostCardGridProps> = ({ posts }) => (
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
)

export default PostCardGrid
