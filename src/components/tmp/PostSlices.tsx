import React, { Fragment } from 'react'
import uuid from 'uuid'
import loadable from '@loadable/component'

import { snakeToPascalCase } from '../../utils/utils'
import { Slice } from '../../utils/types'

interface AsyncSliceProps {
  slice: Slice
}
interface PostSlicesProps {
  slices: Slice[]
}

const AsyncSlice = loadable(({ slice }: AsyncSliceProps) =>
  import(`../../slices/${snakeToPascalCase(slice.slice_type)}`)
)

export default function PostSlices({ slices }: PostSlicesProps) {
  return slices.map(slice => {
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
  })
}
