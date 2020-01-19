/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import Row from '../../components/Row'
import Col from '../../components/Col'
import Html from '../../components/Html'
import Container from '../../components/Container'
import CoderSVG from '../../assets/svg/coder.svg'
import Button from '../../components/Button'
import Fade from '../../components/Fade'
import SocialIcons from '../../components/SocialIcons'
import { breakpoints } from '../../styles/theme'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({ textarea, buttonLabel = '' }: Props) {
  const isLarge = useMediaQuery({ minWidth: breakpoints[2] })
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
        minHeight: '100vh'
      }}
    >
      <Container section size="blog">
        <Fade>
          <Row sx={{ pt: 4 }}>
            <Col sx={{ width: ['full', 'full', 'full', 'full'] }}>
              {/* <Styled.h2 sx={{ my: 4 }}>{site_name}</Styled.h2> */}
              <Styled.h1 sx={{ my: 4 }}>{job}</Styled.h1>

              <div style={{ maxWidth: '650px' }}>
                <Html html={textarea} style={{ fontSize: [3, 4] }} />
              </div>

              <Flex sx={{ py: 3 }}>
                <Link to="/contact">
                  <Button>{buttonLabel}</Button>
                </Link>
                <div sx={{ px: 3 }}>
                  <SocialIcons />
                </div>
              </Flex>
            </Col>
            {isLarge && false && (
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
