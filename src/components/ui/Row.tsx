/** @jsx jsx */
import { jsx, Flex, SxProps } from 'theme-ui'

import Fade from './Fade'

type Props = Partial<SxProps> & {
  fade?: boolean
}

const Row = (props: Props) => {
  const { fade } = props
  const Component = (
    <Flex
      {...props}
      sx={{
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
