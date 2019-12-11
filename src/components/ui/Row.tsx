/** @jsx jsx */
import { jsx } from 'theme-ui'

import Fade from './Fade'

type Props = {
  fade?: boolean
}

const Row = (props: Props) => {
  const { fade } = props
  const Component = (
    <div
      {...props}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        mx: -3
      }}
    />
  )

  return fade ? <Fade>{Component}</Fade> : Component
}

export default Row
