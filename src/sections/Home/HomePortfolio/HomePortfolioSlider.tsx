/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Carousel from '../../../components/Carousel'
import { PrismicProject } from '../../../types/postsType'
import { NodeArrayOf } from '../../../types'

const ProjectSlide = loadable(() => import('../../../components/ProjectSlide'))

export interface HomePortfolioSliderProps {
  projects: NodeArrayOf<PrismicProject>
}

const HomePortfolioSlider: FC<HomePortfolioSliderProps> = ({ projects }) => {
  return (
    <Carousel>
      {projects.map(({ node }) => (
        <ProjectSlide key={node.uid} {...node} />
      ))}
    </Carousel>
  )
}

export default HomePortfolioSlider
