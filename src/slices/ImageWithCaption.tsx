/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { FC } from 'react'

import Fade from '../components/Fade'
import { ContainerSize } from '../types'
import ImageZoom from '../components/ImageZoom'
import { PrismicImage } from '../types/prismicField'

export interface ImageCaptionSliceProps {
  slice: {
    slice_label?: ContainerSize
    primary: {
      image?: PrismicImage
      caption?: string
    }
  }
}

const ImageWithCaption: FC<ImageCaptionSliceProps> = ({ slice }) => {
  const { primary, slice_label: label } = slice
  const { image, caption } = primary
  const imageUrl = image?.localFile?.childImageSharp?.fluid?.src

  return imageUrl ? (
    <Container variant={label || 'blog'}>
      <div sx={{ my: 5 }}>
        <Fade>
          <ImageZoom src={imageUrl} alt={image?.alt} />

          {caption ? (
            <Styled.p sx={{ textAlign: 'center' }}>{caption}</Styled.p>
          ) : null}
        </Fade>
      </div>
    </Container>
  ) : null
}

export default ImageWithCaption
