/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

import { PrismicTechTag } from '../utils/types'

const Tag: FC<PrismicTechTag> = ({ title, description }) => {
  if (!title?.text) {
    return null
  }
  return (
    <span
      title={description?.text || ''}
      sx={{
        fontFamily: 'mono',
        pr: 3,
        display: 'inline-block',
        cursor: 'help'
      }}
    >
      {title.text}
    </span>
  )
}

export interface TagListProps {
  tags: PrismicTechTag[]
}

export const TagList: FC<TagListProps> = ({ tags }) => (
  <Styled.p>
    {tags.map(tag => (
      <Tag key={uuid()} {...tag} />
    ))}
  </Styled.p>
)

export default TagList
