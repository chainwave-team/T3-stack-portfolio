/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Carousel from '../../components/Carousel'
import Col from '../../components/Col'
import ProjectCard from '../../components/ProjectCard'
import { getTagsFromRelation } from '../../utils'
import { PrismicProject, ProjectList } from '../../types'

const Mockup = loadable(() => import('../../components/Mockup'))

const Slide: FC<PrismicProject> = ({
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

export interface HomepagePortfolioSliderProps {
  projects: ProjectList
}

const HomepagePortfolioSlider: FC<HomepagePortfolioSliderProps> = ({
  projects
}) => {
  return (
    <Carousel>
      {projects.map(({ node }) => (
        <Slide key={node.uid} {...node} />
      ))}
    </Carousel>
  )
}

export default HomepagePortfolioSlider
