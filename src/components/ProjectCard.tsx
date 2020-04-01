/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'

import { FC } from 'react'
import Html from './Html'
import TagList from './TagList'
import { PrismicProject } from '../types/postsType'
import Link from './Link'
import { External, Github } from './Icons'
import { getTagsFromRelation } from '../utils'

const style = {
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
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
  },
  links: {
    position: 'absolute',
    p: 2,
    top: 0
  },
  iconLink: {
    mr: [2, 2, 3, 3],
    '& path': {
      fill: 'white',
      transition: 'fill 200ms'
    },
    '&:hover path': { fill: 'secondary' }
  }
}

export interface ProjectCardProps extends PrismicProject {
  inverse?: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({
  data: { title, relations, project_type, html, demo_link, source_link },
  inverse
}) => {
  const align = inverse ? 'right' : 'left'
  const tags = getTagsFromRelation(relations)
  const projectType = project_type?.document[0].data.title

  const linksPosition = !inverse ? { right: 0 } : { left: 0 }

  return (
    <Flex sx={{ ...style.root, textAlign: align as string }}>
      <Flex sx={{ ...style.links, ...linksPosition }}>
        {demo_link?.url && (
          <Link
            sx={style.iconLink}
            to={demo_link?.url}
            target="_blank"
            title="Voir le site"
          >
            <External size={20} />
          </Link>
        )}
        {source_link?.url && (
          <Link
            sx={style.iconLink}
            to={source_link?.url}
            target="_blank"
            title="Voir le code"
          >
            <Github size={20} />
          </Link>
        )}
      </Flex>
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
