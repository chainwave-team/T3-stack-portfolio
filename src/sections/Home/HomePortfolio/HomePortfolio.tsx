/** @jsx jsx */
import { jsx } from 'theme-ui'
import loadable from '@loadable/component'
import { useState, FC } from 'react'

import Container from '../../../components/Container'
import Fade from '../../../components/Fade'
import Button from '../../../components/Button'
import HomePortfolioSlider from './HomePortfolioSlider'
import { ProjectList } from '../../../types'

const HomePortfolioOthers = loadable(() => import('./HomePortfolioOthers'))

export interface HomePortfolioProps {
  projects: ProjectList
}

export interface ProjectState {
  featured: ProjectList | []
  others: ProjectList | []
}

const HomePortfolio: FC<HomePortfolioProps> = ({ projects }) => {
  const [displayAll, setDisplayAll] = useState(false)

  // Filter featured projects VS others into two arrays
  const initialState: ProjectState = { featured: [], others: [] }
  const { featured, others } = projects.reduce(
    (prev, curr) =>
      curr.node.data?.isfeatured === 'yes'
        ? { ...prev, featured: [...prev.featured, curr] }
        : { ...prev, others: [...prev.others, curr] },
    initialState
  )

  return (
    <Container id="portfolio" section>
      <Fade>
        <HomePortfolioSlider projects={featured} />

        {displayAll && <HomePortfolioOthers projects={others} />}

        {displayAll || (
          <Button
            sx={{ mt: 4, mx: 'auto', display: 'block' }}
            onClick={() => setDisplayAll(true)}
          >
            Tout afficher
          </Button>
        )}
      </Fade>
    </Container>
  )
}

export default HomePortfolio
