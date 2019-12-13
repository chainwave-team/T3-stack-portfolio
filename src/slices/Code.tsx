/** @jsx jsx */
import { jsx } from 'theme-ui'

import Container from '../ui/Container.tsx'
import { ProgrammingLangs } from '../ui/PrismCode/utils.tsx'
import PrismCode from '../ui/PrismCode/PrismCode.tsx'
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
