/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

const Row: FC = props => {
  return (
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
}

export default Row
