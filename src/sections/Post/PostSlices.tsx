import React, { Fragment, FC } from 'react'
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
    <>
      {slices.map(slice => {
        const res = (() => {
          switch (slice.slice_type) {
            case 'text':
            case 'quote':
            case 'code':
            case 'image_with_caption':
              return (
                <Fragment key={uuid()}>
                  <AsyncSlice slice={slice} />
                </Fragment>
              )
            default:
              return null
          }
        })()
        return res
      })}
    </>
  )
}

export default PostSlices
