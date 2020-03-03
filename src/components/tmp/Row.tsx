/** @jsx jsx */
import { jsx } from 'theme-ui'

const Row = (props: any) => {
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
