/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC } from 'react'

import Container from '../../components/Container'
import { PrismicPost } from '../../types.d'
import Link from '../../components/Link'
import { hoverStyle } from '../../styles/theme'
import Fade from '../../components/Fade'

export interface BlogListProps {
  posts?: Array<{
    node: PrismicPost
  }>
}

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

const BlogList: FC<BlogListProps> = ({ posts = [] }) => {
  return (
    <Container size="blog" sx={{ my: 5 }}>
      {posts.length > 0 ? (
        posts.map(({ node }) => <PostCard key={node.uid} {...node} />)
      ) : (
        <Styled.h5 sx={{ textAlign: 'center' }}>
          Il n'y a pas d'article dans cette catégorie
        </Styled.h5>
      )}
    </Container>
  )
}

export default BlogList
