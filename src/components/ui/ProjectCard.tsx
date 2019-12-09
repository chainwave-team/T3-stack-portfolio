/** @jsx jsx */
import { jsx } from 'theme-ui'
import uuid from 'uuid'
import { Flex, Text, Heading } from 'rebass'

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
      <Text sx={{ color: 'cyan' }}>{projectType ? projectType.text : ''}</Text>
      <Heading>{title && title.text}</Heading>
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
      <Text>
        {tags.map(tag => (
          <span
            title={tag.description ? tag.description.text : ''}
            key={uuid()}
            sx={{ pr: 3, display: 'inline-block' }}
          >
            {tag.title.text}
          </span>
        ))}
      </Text>
    </Flex>
  )
}
