/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Carousel from '../../components/Carousel/Carousel'
import { ProjectProps, ProjectNode } from './types'
import Col from '../../components/tmp/Col'
import ProjectCard from '../../components/tmp/ProjectCard'
import { getTagsFromRelation } from '../../utils/utils'

const Mockup = loadable(() => import('../../components/Mockup/Mockup'))

const Slide: FC<ProjectNode> = ({
  data: {
    demo_link,
    source_link,
    title,
    full_screen,
    project_type,
    relations,
    html
  }
}) => (
  <article sx={{ ':focus': { outline: 'none' } }}>
    <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Col sx={{ width: ['full', 'full', '2/3'] }}>
        <Mockup
          title={title?.text || ''}
          fluid={full_screen?.localFile?.childImageSharp?.fluid || null}
          siteUrl={demo_link ? demo_link.url : ''}
          srcUrl={source_link ? source_link.url : ''}
        />
      </Col>
      <Col sx={{ width: ['full', 'full', '1/3'] }}>
        <ProjectCard
          title={title}
          html={html}
          tags={getTagsFromRelation(relations)}
          projectType={project_type?.document[0].data.title}
        />
      </Col>
    </div>
  </article>
)

const HomepagePortfolioSlider: FC<ProjectProps> = ({ nodes }) => {
  return (
    <Carousel>
      {nodes.map(props => (
        <Slide key={props.uid} {...props} />
      ))}
    </Carousel>
  )
}

export default HomepagePortfolioSlider
