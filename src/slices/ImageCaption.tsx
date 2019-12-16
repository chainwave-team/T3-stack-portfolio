/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Img from 'gatsby-image'
import Container from '../components/Container'
import Fade from '../components/Fade'

export type ImageCaptionSliceProps = {
  slice: {
    slice_label?: 'blog' | 'container' | 'full'
    primary: {
      image?: {
        alt?: string
        localFile?: {
          childImageSharp?: {
            fluid: any
          }
        }
      }
      caption?: string
    }
  }
}

export default function ImageCaption({
  slice: { primary, slice_label }
}: ImageCaptionSliceProps) {
  const { image, caption } = primary
  if (image && image.localFile && image.localFile.childImageSharp) {
    const { fluid } = image.localFile.childImageSharp
    return (
      <Container size={slice_label || 'blog'}>
        <div sx={{ my: 5 }}>
          <Fade>
            <Img fluid={fluid} alt={image.alt || ''} />
            {caption ? (
              <Styled.p sx={{ textAlign: 'center' }}>{caption}</Styled.p>
            ) : null}
          </Fade>
        </div>
      </Container>
    )
  }
  return null
}
