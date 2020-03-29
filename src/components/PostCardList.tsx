/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import { FC, Fragment, RefObject } from 'react'
import { navigate } from 'gatsby'

import { PrismicPost } from '../types/postsType'
import Fade from './Fade'
import TagList from './TagList'
import { getTagsFromRelation } from '../utils'
import useHover from '../hooks/useHover'
import { NodeArrayOf } from '../types'

export const PostCard: FC<PrismicPost> = ({
  uid,
  first_publication_date,
  data: { title, published_date, relations }
}) => {
  const [hoverRef, isHovered] = useHover()

  const handleClick = () => {
    navigate(`/${uid}`)
  }

  return (
    <article sx={{ mb: 5 }}>
      <Fade>
        <Box
          sx={{ cursor: 'pointer' }}
          ref={hoverRef as RefObject<any>}
          onClick={handleClick}
        >
          <Styled.p sx={{ color: 'muted' }}>
            {published_date || first_publication_date}
          </Styled.p>
          <Styled.h3
            sx={{
              color: isHovered ? 'secondary' : 'heading',
              transform: 'color 200ms ease',
              my: 3
            }}
          >
            {title?.text || ''}
          </Styled.h3>
          <TagList tags={getTagsFromRelation(relations)} />
        </Box>
      </Fade>
    </article>
  )
}

export interface PostCardListProps {
  posts: NodeArrayOf<PrismicPost>
}

const PostCardList: FC<PostCardListProps> = ({ posts }) => (
  <Fragment>
    {posts.map(({ node }) => (
      <PostCard key={node.uid} {...node} />
    ))}
  </Fragment>
)

export default PostCardList
