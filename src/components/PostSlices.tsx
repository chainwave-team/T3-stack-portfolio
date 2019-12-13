import React, { Fragment } from 'react'
import uuid from 'uuid'

import Text from '../slices/Text'
import Code from '../slices/Code'
import Quote from '../slices/Quote'
import ImageCaption from '../slices/ImageCaption'
import { Slice } from '../utils/types'

type Props = {
  slices: Array<Slice>
}

export default function PostSlices({ slices }: Props) {
  return slices.map(slice => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <Fragment key={uuid()}>
              <Text slice={slice} />
            </Fragment>
          )

        case 'quote':
          return (
            <Fragment key={uuid()}>
              <Quote slice={slice} />
            </Fragment>
          )

        case 'code':
          return (
            <Fragment key={uuid()}>
              <Code slice={slice} />
            </Fragment>
          )

        case 'image_with_caption':
          return (
            <Fragment key={uuid()}>
              <ImageCaption slice={slice} />
            </Fragment>
          )

        default:
          return null
      }
    })()
    return res
  })
}
