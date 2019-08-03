import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

import { Container, Heading, Flex, Button, Box } from '../../utils/rebass'
import Html from '../../components/html'
import { breakpoints } from '../../utils/theme'
import SplitWords from '../../components/splitWords'
import Fade from '../../components/fade'
import CoderSVG from '../../images/coder.svg'

const SectionHeader = ({ title, textarea, subTitles, buttonLabel }) => (
  <MediaQuery minWidth={breakpoints[1]}>
    {notSmall => (
      <Flex
        as="section"
        id="top"
        alignItems="center"
        style={{ minHeight: notSmall ? '100vh' : '60vh' }}
      >
        <Container py={6}>
          <Flex mx={-3} justifyContent="space-between" alignItems="center">
            <Box width={[1, 1, 1, 7 / 12]} px={3} alignItems="center">
              <Fade>
                <Heading as="h2" pb={3} fontSize={[5, 5, 6]}>
                  {title}
                </Heading>
              </Fade>
              <Fade>
                <Heading as="h1" pb={4} fontSize={[6, 6, 7]}>
                  <SplitWords words={subTitles} />
                </Heading>
              </Fade>
              <Fade>
                <div style={{ maxWidth: '600px' }}>
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
                    <CoderSVG width="100%" />
                  </Fade>
                </Box>
              </Flex>
            </MediaQuery>
          </Flex>
        </Container>
      </Flex>
    )}
  </MediaQuery>
)

SectionHeader.propTypes = {
  title: PropTypes.string,
  textarea: PropTypes.string,
  subTitles: PropTypes.arrayOf(PropTypes.string),
  buttonLabel: PropTypes.string
}

SectionHeader.defaultProps = {
  title: '',
  textarea: '',
  subTitles: [''],
  buttonLabel: ''
}

export default SectionHeader
