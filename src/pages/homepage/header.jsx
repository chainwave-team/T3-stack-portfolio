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

function SectionHeader({ title, textarea, subTitles, buttonLabel }) {
  return (
    <MediaQuery minWidth={breakpoints[1]}>
      {notSmall => (
        <Flex
          as="section"
          id="top"
          alignItems="center"
          style={{ minHeight: notSmall ? '100vh' : '60vh' }}
        >
          <Container py={6}>
            <MediaQuery minWidth={breakpoints[2]}>
              {large => (
                <Flex mx={-3} justifyContent="space-between">
                  <Flex width={large ? 7 / 12 : 1} px={3} alignItems="center">
                    <Box width="100%">
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
                  </Flex>
                  {large && (
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
                  )}
                </Flex>
              )}
            </MediaQuery>
          </Container>
        </Flex>
      )}
    </MediaQuery>
  )
}

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
