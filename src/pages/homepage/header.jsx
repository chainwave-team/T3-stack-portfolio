import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

import { Container, Heading, Flex, Button, Box } from '../../utils/rebass'
import Html from '../../components/ui/html'
import { breakpoints } from '../../utils/theme'
import Fade from '../../components/ui/fade'
import CoderSVG from '../../images/coder.svg'

const SectionHeader = ({ textarea, buttonLabel }) => {
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
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Container py={6}>
        <Flex pt={4} mx={-3} justifyContent="space-between" alignItems="center">
          <Box width={[1, 1, 1, 7 / 12]} px={3} alignItems="center">
            <Fade>
              <Heading as="h2" pb={3} fontSize={[5, 5, 6]}>
                {site_name}
              </Heading>
            </Fade>
            <Fade>
              <Heading as="h1" pb={4} fontSize={[5, 6, 7]}>
                {job}
              </Heading>
            </Fade>
            <Fade>
              <div style={{ maxWidth: '650px' }}>
                <Html __html={textarea} />
              </div>
            </Fade>
            <Fade>
              <Box py={3}>
                <Button as={ScrollLink} to="contact" smooth isDynamic>
                  {buttonLabel}
                </Button>
              </Box>
            </Fade>
          </Box>
          <MediaQuery minWidth={breakpoints[2]}>
            <Flex
              width={5 / 12}
              px={3}
              justifyContent="center"
              alignItems="center"
            >
              <Box width="100%" pa={3}>
                <Fade>
                  <CoderSVG width="100%" height="100%" />
                </Fade>
              </Box>
            </Flex>
          </MediaQuery>
        </Flex>
      </Container>
    </Flex>
  )
}

SectionHeader.propTypes = {
  textarea: PropTypes.string,
  buttonLabel: PropTypes.string
}

SectionHeader.defaultProps = {
  textarea: '',
  buttonLabel: ''
}

export default SectionHeader
