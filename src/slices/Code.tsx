/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from '../components/Container'
import { ProgrammingLang } from '../components/PrismCode/utils'
import PrismCode from '../components/PrismCode'
import Fade from '../components/Fade'

export type TextSliceProps = {
  slice: {
    primary: {
      code?: {
        text: string
        html: string
        raw: Array<{
          label?: ProgrammingLang
        }>
      }
    }
  }
}

export default function Code({ slice }: TextSliceProps) {
  const { code } = slice.primary
  if (!code) return null

  return (
    <Container sx={{ maxWidth: ['full', 'blog'], width: ['full', '100%'] }}>
      <Fade>
        <PrismCode code={code?.text || ''} language={code?.raw[0]?.label} />
      </Fade>
    </Container>
  )
}
