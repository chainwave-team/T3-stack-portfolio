/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Html from '../components/Html'

export type TextSliceProps = {
  slice: { primary: { text: { html: string } } }
}

export default function Text({ slice }: TextSliceProps) {
  return (
    <Container variant="blog">
      <Html html={slice.primary.text.html} />
    </Container>
  )
}
