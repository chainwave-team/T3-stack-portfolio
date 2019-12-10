/** @jsx jsx */
import { jsx, Box, SxProps } from 'theme-ui'

const Col = (props: Partial<SxProps>) => (
  <Box
    {...props}
    sx={{
      my: 3,
      px: 3,
      width: ['full', 'auto']
    }}
  />
)

export default Col
