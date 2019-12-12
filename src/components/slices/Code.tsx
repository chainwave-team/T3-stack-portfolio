/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from '../ui/Container'
import PrismCode from '../ui/PrismCode'

export type TextSliceProps = {
  slice: {
    primary: {
      code: {
        html?: string
      }
    }
    slice_label?: string
  }
}

export default function Code({ slice }: TextSliceProps) {
  const code = slice.primary.code.html || ''
  const language = slice.slice_label || 'markup'

  return (
    <Container sx={{ maxWidth: 'blog' }}>
      <PrismCode
        code={code}
        language={language}
        plugins="line-numbers copy-to-clipboard"
      />
    </Container>
  )
}
