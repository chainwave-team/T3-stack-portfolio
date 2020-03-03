/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from '../components/tmp/Container'
import { PrismCodeProps } from '../components/PrismCode/utils'
import PrismCode from '../components/PrismCode'
import Fade from '../components/tmp/Fade'

export type TextSliceProps = {
  slice: {
    primary: PrismCodeProps
  }
}

export default function Code({ slice }: TextSliceProps) {
  const { code } = slice.primary
  if (!code) return null

  return (
    <Container sx={{ maxWidth: ['full', 'blog'], width: ['full', '100%'] }}>
      <Fade>
        <PrismCode code={code} />
      </Fade>
    </Container>
  )
}
