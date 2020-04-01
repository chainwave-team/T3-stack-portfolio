/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'

import { PrismicProject } from '../types/postsType'
import Mockup from './Mockup'
import Col from './Col'
import ProjectCard from './ProjectCard'

export interface ProjectSlideProps extends PrismicProject {
  inverse?: boolean
}

const ProjectSlide: FC<ProjectSlideProps> = props => {
  const { data, inverse } = props
  const { demo_link, source_link, title, full_screen } = data
  return (
    <article sx={{ ':focus': { outline: 'none' } }}>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: inverse ? 'row-reverse' : 'row'
        }}
      >
        <Col sx={{ width: ['full', 'full', '2/3'] }}>
          <Mockup
            title={title?.text || ''}
            fluid={full_screen?.localFile?.medium?.fluid || null}
            siteUrl={demo_link ? demo_link.url : ''}
            srcUrl={source_link ? source_link.url : ''}
          />
        </Col>
        <Col sx={{ width: ['full', 'full', '1/3'] }}>
          <ProjectCard {...props} />
        </Col>
      </div>
    </article>
  )
}

export default ProjectSlide
