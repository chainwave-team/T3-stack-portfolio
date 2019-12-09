/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as ScrollLink } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import { Heading, Flex, Button, Box } from 'rebass'
import { useBreakpointIndex } from '@theme-ui/match-media'

import Row from '../../components/ui/Row'
import Col from '../../components/ui/Col'
import Html from '../../components/ui/Html'
import Container from '../../components/ui/Container'
import Fade from '../../components/ui/Fade'
import CoderSVG from '../../images/coder.svg'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({
  textarea = '',
  buttonLabel = ''
}: Props) {
  const mediaIndex = useBreakpointIndex()
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
        <Row fade sx={{ pt: 4 }}>
          <Col sx={{ width: ['full', 'full', 'full', '7/12'] }}>
            <Heading
              as="h2"
              sx={{
                pb: 3,
                fontSize: [5, 5, 6]
              }}
            >
              {site_name}
            </Heading>
            <Heading
              as="h1"
              sx={{
                pb: 4,
                fontSize: [5, 6, 7]
              }}
            >
              {job}
            </Heading>
            <div style={{ maxWidth: '650px' }}>
              <Html html={textarea} />
            </div>
            <Box py={3}>
              <Button as={ScrollLink} to="contact" smooth isDynamic>
                {buttonLabel}
              </Button>
            </Box>
          </Col>
          {mediaIndex > 2 ? (
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
          ) : null}
        </Row>
      </Container>
    </Flex>
  )
}
