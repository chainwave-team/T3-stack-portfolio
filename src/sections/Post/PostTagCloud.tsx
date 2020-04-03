/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { FC } from 'react'

import { NodeArrayOf } from '../../types'
import Link from '../../components/Link'
import { ForTemplatePostTag } from '../../types/templates'

export interface PostTagCloudProps {
  tags: NodeArrayOf<ForTemplatePostTag>
}

const PostTagCloud: FC<PostTagCloudProps> = ({ tags }) => {
  const hasTags = tags && tags.length > 0

  if (!hasTags) {
    return null
  }

  return (
    <div sx={{ backgroundColor: 'black', py: 4 }}>
      <Container>
        <Styled.h3 sx={{ textAlign: 'center' }}>
          Parcourir tous les sujets du blog
        </Styled.h3>
        <div
          sx={{
            p: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {tags.map(({ node }) => {
            const title = node?.data?.title?.text
            if (!title) {
              return null
            }
            return (
              <div
                key={node.uid}
                sx={{
                  px: 0,
                  my: 2,
                  mx: 0,
                  fontSize: 1,
                  fontFamily: 'mono'
                }}
              >
                <span sx={{ px: 3 }}>•</span>
                <Link to={`/blog/tags/${node.uid}`}>
                  {title}
                  <span sx={{ color: 'text', fontSize: 0 }}>
                    {` (${node.count})`}
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default PostTagCloud
