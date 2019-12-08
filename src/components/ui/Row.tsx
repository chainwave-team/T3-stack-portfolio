/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'rebass'

import Fade from './fade'

type Props = {
  fade?: boolean
}

const Row = (props: Props) => {
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

  return props.fade ? <Fade>{Component}</Fade> : Component
}

export default Row
