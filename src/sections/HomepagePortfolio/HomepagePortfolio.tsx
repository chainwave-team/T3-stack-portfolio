/** @jsx jsx */
import { jsx } from 'theme-ui'
import loadable from '@loadable/component'
import { useState, FC } from 'react'

import Container from '../../components/Container'
import Fade from '../../components/Fade'
import Button from '../../components/Button'
import HomepagePortfolioSlider from './HomepagePortfolioSlider'
import { ProjectList } from '../../types'

const HomepagePortfolioOthers = loadable(() =>
  import('./HomepagePortfolioOthers')
)

export interface HomepagePortfolioProps {
  projects: ProjectList
}

export interface ProjectState {
  featured: ProjectList | []
  others: ProjectList | []
}

const HomepagePortfolio: FC<HomepagePortfolioProps> = ({ projects }) => {
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
        <HomepagePortfolioSlider projects={featured} />

        {displayAll && <HomepagePortfolioOthers projects={others} />}

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

export default HomepagePortfolio
