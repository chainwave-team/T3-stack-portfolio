/** @jsx jsx */
import { jsx, Styled, Flex, Box } from 'theme-ui'
import { FC, RefObject } from 'react'
import { animated, useSpring } from 'react-spring'
import { navigate } from 'gatsby'

import { PrismicPost } from '../types'
import Fade from './Fade'
import TagList from './TagList'
import { getTagsFromRelation } from '../utils'
import useHover from '../hooks/useHover'

const settings = { gutterSize: 3, cardHeight: 250 }

export const PostCard: FC<PrismicPost> = ({
  uid,
  first_publication_date,
  data: { title, published_date, relations }
}) => {
  const [hoverRef, isHovered] = useHover()
  const hoverState = useSpring({
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    borderWidth: isHovered ? 1 : 0,
    borderStyle: isHovered ? `solid` : `initial`
  })
  const date = published_date || first_publication_date

  const handleClick = () => {
    navigate(`/${uid}`)
  }

  return (
    <Fade>
      <Box
        as="article"
        sx={{ cursor: 'pointer' }}
        ref={hoverRef as RefObject<any>}
        onClick={handleClick}
      >
        <animated.div
          style={hoverState}
          sx={{
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            m: settings.gutterSize,
            py: [4],
            px: [3],
            bg: isHovered ? 'transparent' : 'blue',
            minHeight: settings.cardHeight,
            cursor: 'pointer',
            color: 'white'
          }}
        >
          <div>
            <Styled.p sx={{ color: 'muted', mt: 0, fontSize: 1 }}>
              {date}
            </Styled.p>
            <Styled.h4>{title?.text || ''}</Styled.h4>
          </div>
          {relations && <TagList tags={getTagsFromRelation(relations)} />}
        </animated.div>
      </Box>
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
