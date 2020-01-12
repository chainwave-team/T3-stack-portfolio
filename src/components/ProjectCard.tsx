/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'

import { PrismicText, PrismicTechTag } from '../utils/types'
import Html from './Html'
import TagList from './TagList'

type Props = {
  index: number
  title: PrismicText
  html?: PrismicText
  projectType: PrismicText
  tags: PrismicTechTag[]
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
      <Styled.p sx={{ color: 'primary' }}>
        {projectType ? projectType.text : ''}
      </Styled.p>
      <Styled.h3>{title && title.text}</Styled.h3>
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
      <div sx={{ my: 3 }}>
        <TagList tags={tags} />
      </div>
    </Flex>
  )
}
