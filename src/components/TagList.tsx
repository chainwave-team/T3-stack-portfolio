/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'

import { PrismicTechTag } from '../utils/types'

const style = {
  root: {
    m: 0
  },
  tag: {
    fontFamily: 'mono',
    pr: 3,
    display: 'inline-block'
  }
}

type Props = {
  tags: PrismicTechTag[]
}

export default function TagList({ tags }: Props) {
  return (
    <Styled.p sx={style.root}>
      {tags.map(tag => (
        <span
          title={tag.description ? tag.description.text : ''}
          key={uuid()}
          sx={style.tag}
        >
          {tag.title.text}
        </span>
      ))}
    </Styled.p>
  )
}
