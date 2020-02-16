/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

import { PrismicTechTag, PrismicRelationsOfTechTags } from '../utils/types'
import { getTagsFromRelation } from '../utils/utils'

// This component works with "tags" OR with "relations (of tags)"
export interface TagListProps {
  tags?: PrismicTechTag[]
  relations?: PrismicRelationsOfTechTags
}

const TagList: FC<TagListProps> = ({ relations, tags }) => {
  let myTags: PrismicTechTag[] = []

  if (!relations && !tags) {
    return null
  }

  if (tags) {
    myTags = tags
  } else if (relations) {
    myTags = getTagsFromRelation(relations)
  }

  if (!myTags) {
    return null
  }

  return (
    <Styled.p sx={{ m: 0 }}>
      {myTags.map(
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
