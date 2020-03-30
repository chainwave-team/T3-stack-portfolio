/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { FC } from 'react'
import Img from 'gatsby-image'

import { PrismicImage } from '../../types/prismicField'

export interface PostThumbnailProps {
  thumbnail?: PrismicImage
}

const PostThumbnail: FC<PostThumbnailProps> = ({ thumbnail }) => {
  const hasThumbnail: boolean =
    !!thumbnail && !!thumbnail?.localFile?.childImageSharp?.fluid

  if (!hasThumbnail) {
    return null
  }

  return (
    <Container sx={{ mb: 5 }}>
      <Img
        fluid={thumbnail?.localFile?.childImageSharp.fluid}
        alt={thumbnail?.alt || 'Post thumbnail'}
        sx={{ width: '100%', boxShadow: 4 }}
      />
    </Container>
  )
}

export default PostThumbnail
