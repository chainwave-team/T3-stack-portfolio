/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

import { PrismicTechTag } from '../utils/types'

export interface TagListProps {
  tags?: PrismicTechTag[]
}

const TagList: FC<TagListProps> = ({ tags }) => {
  if (!tags) {
    return null
  }

  return (
    <Styled.p sx={{ m: 0 }}>
      {tags.map(
        tag =>
          tag && (
            <span
              title={tag?.description ? tag.description.text : ''}
              key={uuid()}
              sx={{
                fontFamily: 'mono',
                pr: 3,
                display: 'inline-block'
              }}
            >
              {tag.title.text}
            </span>
          )
      )}
    </Styled.p>
  )
}

export default TagList
