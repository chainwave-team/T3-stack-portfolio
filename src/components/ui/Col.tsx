/** @jsx jsx */
import { jsx } from 'theme-ui'

const Col = (props: any) => (
  <div
    {...props}
    sx={{
      py: 3,
      px: 3,
      width: ['full', 'auto'],
      boxSizing: 'border-box'
    }}
  />
)

export default Col
