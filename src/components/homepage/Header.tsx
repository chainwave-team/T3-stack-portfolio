/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import Html from '../Html'
import Container from '../Container'
import Fade from '../Fade'
import SocialIcons from '../SocialIcons'
import ContactButton from '../ContactButton'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({ textarea, buttonLabel = '' }: Props) {
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
        fontFamily: 'mono'
      }}
    >
      <Container size="blog">
        <Fade>
          <div>
            <Styled.h1 sx={{ my: 4 }}>{job}</Styled.h1>
            <Html
              html={textarea}
              style={{ fontSize: [2, 3], fontFamily: 'mono' }}
            />
            <Flex sx={{ py: 3 }}>
              <ContactButton title={buttonLabel || ''} />
              <div sx={{ px: 3 }}>
                <SocialIcons />
              </div>
            </Flex>
          </div>
        </Fade>
      </Container>
    </Flex>
  )
}
