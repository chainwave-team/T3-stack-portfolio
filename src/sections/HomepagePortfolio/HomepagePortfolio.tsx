/** @jsx jsx */
import { jsx } from 'theme-ui'
import loadable from '@loadable/component'
import { useState, FC } from 'react'

import Container from '../../components/tmp/Container'
import Fade from '../../components/Fade'
import Button from '../../components/tmp/Button'
import { ProjectState, ProjectProps } from './types'
import HomepagePortfolioSlider from './HomepagePortfolioSlider'

const HomepagePortfolioOthers = loadable(() =>
  import('./HomepagePortfolioOthers')
)

export type HomepagePortfolioProps = ProjectProps

const HomepagePortfolio: FC<HomepagePortfolioProps> = ({ nodes }) => {
  const [displayAll, setDisplayAll] = useState(false)

  // Filter featured projects VS others into two arrays
  const initialState: ProjectState = { featured: [], others: [] }
  const { featured, others } = nodes.reduce(
    (prev, curr) =>
      curr.data?.isfeatured === 'yes'
        ? { ...prev, featured: [...prev.featured, curr] }
        : { ...prev, others: [...prev.others, curr] },
    initialState
  )

  return (
    <Container id="portfolio" section>
      <Fade>
        <HomepagePortfolioSlider nodes={featured} />

        {displayAll && <HomepagePortfolioOthers nodes={others} />}

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
