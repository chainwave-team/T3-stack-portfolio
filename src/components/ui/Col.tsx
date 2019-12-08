/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from 'rebass'

// type Props = {
//     fade?: boolean
// }

const Col = props => (
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
