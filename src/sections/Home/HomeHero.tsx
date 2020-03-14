/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { FC } from 'react'

import Container from '../../components/Container'
import Fade from '../../components/Fade'
import SocialIcons from '../../components/SocialIcons'
import ContactButton from '../../components/ContactButton'

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
      <Container size="blog">
        <Fade>
          <div>
            <Styled.h1>{job}</Styled.h1>
            <Styled.h3 sx={{ color: 'muted' }}>{textarea}</Styled.h3>

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
