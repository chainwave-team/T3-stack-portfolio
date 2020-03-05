/** @jsx jsx */
import { jsx } from 'theme-ui'
import Html from '../components/Html'
import Container from '../components/Container'

export type TextSliceProps = {
  slice: { primary: { text: { html: string } } }
}

export default function Text({ slice }: TextSliceProps) {
  return (
    <Container sx={{ maxWidth: 'blog' }}>
      <Html html={slice.primary.text.html} />
    </Container>
  )
}
