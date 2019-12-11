/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Img from 'gatsby-image'
import Container from '../ui/Container'

export type ImageCaptionSliceProps = {
  slice: {
    primary: {
      image?: {
        alt?: string
        localFile?: {
          childImageSharp?: {
            fluid: any
          }
        }
      }
      image_size: 'blog' | 'container' | 'full'
      caption?: string
    }
  }
}

export default function ImageCaption({ slice }: ImageCaptionSliceProps) {
  const { image, caption, image_size } = slice.primary
  if (image && image.localFile && image.localFile.childImageSharp) {
    const { fluid } = image.localFile.childImageSharp
    return (
      <Container size={image_size}>
        <div sx={{ py: 5 }}>
          <Img fluid={fluid} alt={image.alt || ''} />
          {caption ? (
            <Styled.p sx={{ textAlign: 'center' }}>{caption}</Styled.p>
          ) : null}
        </div>
      </Container>
    )
  }
  return null
}
