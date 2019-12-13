/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from '../components/Container'
import { ProgrammingLangs } from '../components/PrismCode/utils'
import PrismCode from '../components/PrismCode/PrismCode'
import Fade from '../components/Fade'

export type TextSliceProps = {
  slice: {
    primary: {
      code?: {
        html: string
        text: string
        raw: {
          label?: ProgrammingLangs
        }[]
      }
    }
  }
}

export default function Code({ slice }: TextSliceProps) {
  const { code } = slice.primary
  if (!code) return null

  return (
    <Container sx={{ maxWidth: 'blog' }}>
      <Fade>
        <PrismCode code={code} />
      </Fade>
    </Container>
  )
}
