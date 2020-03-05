/** @jsx jsx */
import { FC } from 'react'
import { jsx } from 'theme-ui'
import uuid from 'uuid'
import loadable from '@loadable/component'

import { snakeToPascalCase } from '../../utils/utils'
import { Slice } from '../../utils/types'

interface AsyncSliceProps {
  slice: Slice
}
interface PostSlicesProps {
  slices?: Slice[]
}

const AsyncSlice = loadable(({ slice }: AsyncSliceProps) =>
  import(`../../slices/${snakeToPascalCase(slice.slice_type)}`)
)

const PostSlices: FC<PostSlicesProps> = ({ slices }) => {
  if (!slices || slices.length <= 0) {
    return null
  }

  return (
    <div sx={{ my: 4 }}>
      {slices.map(slice => (
        <AsyncSlice key={uuid()} slice={slice} />
      ))}
    </div>
  )
}

export default PostSlices
