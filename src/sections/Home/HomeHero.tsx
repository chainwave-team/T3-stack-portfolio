/** @jsx jsx */
import { jsx, Flex, Styled, Container } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { FC } from 'react'

import Fade from '../../components/Fade'
import SocialIcons from '../../components/SocialIcons'
import ContactButton from '../../components/ContactButton'
import Link from '../../components/Link'

export interface HomeHeroProps {
  textarea?: string
  buttonLabel?: string
}

const HomeHero: FC<HomeHeroProps> = ({ textarea, buttonLabel = '' }) => {
  const { prismicOptions } = useStaticQuery(
    graphql`
      query HomepageHeader {
        prismicOptions(lang: { eq: "fr-fr" }) {
          data {
            job
            site_name
          }
        }
      }
    `
  )
  const { job } = prismicOptions.data

  return (
    <Flex
      as="section"
      id="top"
      sx={{
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'mono',
        py: 6
      }}
    >
      <Container variant="blog">
        <Fade>
          <div>
            <Styled.h1>{job}</Styled.h1>
            <Styled.h3 as="h2" sx={{ color: 'muted' }}>
              {textarea}
            </Styled.h3>
            <Styled.p as="p" sx={{ color: 'secondary', fontSize: 2 }}>
              ● Actuellement en Freelance chez
              {` `}
              <Link
                to="https://www.chefclub.tv/fr/"
                sx={{ color: 'secondary', fontWeight: 'bold' }}
              >
                @Chefclub
              </Link>
            </Styled.p>

            <Flex sx={{ py: 3, flexWrap: 'wrap' }}>
              <div sx={{ mb: 3 }}>
                <ContactButton title={buttonLabel || ''} />
              </div>
              <div sx={{ px: 3, mb: 3 }}>
                <SocialIcons />
              </div>
            </Flex>
          </div>
        </Fade>
      </Container>
    </Flex>
  )
}

export default HomeHero
