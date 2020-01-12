/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'

import { PrismicTechTag } from '../utils/types'

type Props = {
  tags: PrismicTechTag[]
}

export default function TagList({ tags }: Props) {
  return (
    <Styled.p sx={{ m: 0 }}>
      {tags.map(tag => (
        <span
          title={tag.description ? tag.description.text : ''}
          key={uuid()}
          sx={{ pr: 3, display: 'inline-block' }}
        >
          {tag.title.text}
        </span>
      ))}
    </Styled.p>
  )
}
