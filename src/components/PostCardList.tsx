/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC, Fragment } from 'react'

import { PrismicPost } from '../types'
import Fade from './Fade'
import Link from './Link'
import { hoverStyle } from '../styles/theme'

export const PostCard: FC<PrismicPost> = ({
  uid,
  first_publication_date,
  data: { title, published_date }
}) => (
  <Fade>
    <div sx={{ pb: 2 }}>
      <Link to={`/${uid}`}>
        <Styled.h3 sx={hoverStyle}>{title?.text || ''}</Styled.h3>
        <Styled.p sx={{ color: 'muted' }}>
          {published_date || first_publication_date}
        </Styled.p>
      </Link>
    </div>
  </Fade>
)

export interface PostCardListProps {
  posts: Array<{ node: PrismicPost }>
}

const PostCardList: FC<PostCardListProps> = ({ posts }) => (
  <Fragment>
    {posts.map(({ node }) => (
      <PostCard key={node.uid} {...node} />
    ))}
  </Fragment>
)

export default PostCardList
