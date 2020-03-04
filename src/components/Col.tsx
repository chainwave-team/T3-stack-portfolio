/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

const Col: FC = props => (
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
