/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

export default function Container(props) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: 'container',
        width: '90%',
        mx: 'auto'
      }}
    />
  )
}
