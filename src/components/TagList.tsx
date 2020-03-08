/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC } from 'react'

import { PrismicTechTag } from '../types'

const Tag: FC<PrismicTechTag> = ({ data }) => {
  if (!data?.title?.text) {
    return null
  }
  return (
    <span
      title={data?.description?.text || ''}
      sx={{
        fontFamily: 'mono',
        pr: 3,
        display: 'inline-block',
        cursor: 'help'
      }}
    >
      {data.title.text}
    </span>
  )
}

export interface TagListProps {
  before?: any
  tags?: PrismicTechTag[]
}

export const TagList: FC<TagListProps> = ({ tags, before = '' }) => (
  <Styled.p>
    {!!before && before}
    {tags && tags.length > 0 && tags.map(tag => <Tag key={tag.uid} {...tag} />)}
  </Styled.p>
)

export default TagList
