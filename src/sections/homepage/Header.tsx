/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { Link as ScrollLink } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import { useBreakpointIndex } from '@theme-ui/match-media'

import Row from '../../components/Row'
import Col from '../../components/Col'
import Html from '../../components/Html'
import Container from '../../components/Container'
import CoderSVG from '../../assets/svg/coder.svg'
import Button from '../../components/Button'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({ textarea, buttonLabel = '' }: Props) {
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
            <Styled.h3>{site_name}</Styled.h3>
            <Styled.h2>{job}</Styled.h2>

            <div style={{ maxWidth: '650px' }}>
              <Html html={textarea} />
            </div>
            <Box py={3}>
              <ScrollLink to="contact" smooth isDynamic>
                <Button>{buttonLabel}</Button>
              </ScrollLink>
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
