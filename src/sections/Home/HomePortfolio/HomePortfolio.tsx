/** @jsx jsx */
import { jsx, Styled, AspectRatio, Grid, Flex, Container } from 'theme-ui'
import { FC, Fragment } from 'react'
import { size, position, rgba } from 'polished'
import Img from 'gatsby-image'

import Fade from '../../../components/Fade'
import Button from '../../../components/Button'
import { NodeArrayOf } from '../../../types'
import { PrismicProject } from '../../../types/postsType'
import Link from '../../../components/Link'

const style = {
  ratio: {
    overflow: 'hidden'
  },
  last: {
    ...size('100%', '100%'),
    ...position('absolute', 0, 0, 0, 0),
    zIndex: 1,
    backgroundColor: rgba('black', 0.75),
    justifyContent: 'center',
    alignItems: 'center',
    '& span': {
      fontFamily: 'mono',
      fontSize: 3
    }
  }
}

export interface HomePortfolioProps {
  projects: NodeArrayOf<PrismicProject>
}

const HomePortfolio: FC<HomePortfolioProps> = ({ projects }) => {
  const firstProject = projects[0]
  const rest = projects.slice(1, 4)
  const link = '/portfolio'
  const ratio = 16 / 10
  const columnGap = 3

  return (
    <Container id="portfolio" variant="medium" sx={{ my: 7 }}>
      <Fade>
        <Styled.h2 sx={{ mb: 4, textAlign: 'center' }}>
          Projets en avant
        </Styled.h2>

        <Grid gap={columnGap} columns={[1, '3fr 1fr']} sx={{ py: 4 }}>
          <AspectRatio ratio={ratio} sx={style.ratio}>
            <Link to={link}>
              <Img
                key={firstProject.node.uid}
                fluid={
                  firstProject.node.data.full_screen?.localFile?.medium.fluid
                }
                alt={firstProject.node.data.title.text}
              />
            </Link>
          </AspectRatio>
          <Grid gap={columnGap} columns={[3, 1]}>
            {rest.map(({ node }, i: number) => (
              <AspectRatio ratio={ratio} key={node.uid} sx={style.ratio}>
                <Link to={link}>
                  <Fragment>
                    {i === 2 && (
                      <Flex sx={style.last}>
                        <span>+16</span>
                      </Flex>
                    )}
                    <Img
                      key={node.uid}
                      fluid={node.data.full_screen?.localFile?.small.fluid}
                      alt={node.data.title.text}
                    />
                  </Fragment>
                </Link>
              </AspectRatio>
            ))}
          </Grid>
        </Grid>

        <Flex sx={{ justifyContent: 'center', py: 4, alignItems: 'center' }}>
          <Link to={link}>
            <Button>Tout voir</Button>
          </Link>
        </Flex>
      </Fade>
    </Container>
  )
}

export default HomePortfolio
