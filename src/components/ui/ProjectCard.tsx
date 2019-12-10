/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import uuid from 'uuid'

import { PrismicText, PrismicTechTag } from '../../utils/types'
import Html from './Html'

type Props = {
  index: number
  title: PrismicText
  html?: PrismicText
  projectType: PrismicText
  tags: Array<PrismicTechTag>
}

export default function ProjectCard({ title, projectType, tags, html }: Props) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        px: 3,
        mx: [0, 0, -3]
      }}
    >
      <Styled.p sx={{ color: 'cyan' }}>
        {projectType ? projectType.text : ''}
      </Styled.p>
      <Styled.h4>{title && title.text}</Styled.h4>
      <div
        sx={{
          boxShadow: 3,
          bg: 'blue',
          p: 3,
          ml: -3,
          my: 3
        }}
      >
        {html && <Html html={html.html} />}
      </div>
      <Styled.p>
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
    </Flex>
  )
}
