/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'

import { FC } from 'react'
import Html from './Html'
import TagList from './TagList'
import { PrismicText } from '../types/prismicField'
import { PrismicTechTag } from '../types/postsType'

const style = {
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    px: 3,
    mx: [0, 0, -3]
  },
  category: {
    color: 'primary',
    fontFamily: 'mono'
  },
  title: {
    mt: 2
  },
  html: {
    boxShadow: 3,
    bg: 'blue',
    p: 3,
    ml: -3,
    my: 3
  },
  tags: {
    my: 3
  }
}

export interface ProjectCardProps {
  title: PrismicText
  html?: PrismicText
  projectType?: PrismicText
  tags?: PrismicTechTag[]
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  projectType,
  tags,
  html
}) => {
  return (
    <Flex sx={style.root}>
      <Styled.p sx={style.category}>
        {projectType ? projectType.text : ''}
      </Styled.p>
      <Styled.h2 as="h3" sx={style.title}>
        {title && title.text}
      </Styled.h2>
      <div sx={style.html}>{html && <Html html={html.html} />}</div>
      <div sx={style.tags}>{tags && <TagList tags={tags} />}</div>
    </Flex>
  )
}

export default ProjectCard
