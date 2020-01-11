/** @jsx jsx */
import { jsx, Flex, Box, Styled, useThemeUI } from 'theme-ui'
import { Link as ScrollLink } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import Row from '../../components/Row'
import Col from '../../components/Col'
import Html from '../../components/Html'
import Container from '../../components/Container'
import CoderSVG from '../../assets/svg/coder.svg'
import Button from '../../components/Button'
import Fade from '../../components/Fade'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({ textarea, buttonLabel = '' }: Props) {
  const { theme } = useThemeUI()
  const isLarge = useMediaQuery({ minWidth: theme.breakpoints[2] })
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
  const { job, site_name } = prismicOptions.data

  return (
    <Flex
      as="section"
      id="top"
      sx={{
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container section>
        <Fade>
          <Row sx={{ pt: 4 }}>
            <Col sx={{ width: ['full', 'full', 'full', '7/12'] }}>
              <Styled.h3>{site_name}</Styled.h3>
              <Styled.h2>{job}</Styled.h2>

              <div style={{ maxWidth: '650px' }}>
                <Html html={textarea} />
              </div>
              <Box sx={{ py: 3 }}>
                <ScrollLink to="contact" smooth isDynamic>
                  <Button>{buttonLabel}</Button>
                </ScrollLink>
              </Box>
            </Col>
            {isLarge && (
              <Col
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ width: 'full' }}>
                  <CoderSVG width="100%" height="100%" />
                </Box>
              </Col>
            )}
          </Row>
        </Fade>
      </Container>
    </Flex>
  )
}
