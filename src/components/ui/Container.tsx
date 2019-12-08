/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

import { Children } from '../../utils/types'

type Props = {
  section?: boolean
  children?: Children
}

export default function Container({ section, ...props }: Props) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: 'container',
        width: '90%',
        mx: 'auto',
        py: section ? 6 : 0
      }}
    />
  )
}
