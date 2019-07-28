import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import MediaQuery from 'react-responsive'
import PropTypes from 'prop-types'

import { Container, Heading, Flex, Button, Box } from '../../utils/rebass'
import Html from '../../components/html'
import { breakpoints } from '../../utils/theme'
import SplitWords from '../../components/splitWords'

const SectionHeader = ({ title, textarea, subTitles, buttonLabel }) => (
  <MediaQuery minWidth={breakpoints[1]}>
    {matches => (
      <Flex
        as="section"
        id="top"
        flexDirection="column"
        justifyContent="center"
        style={{ minHeight: matches ? '100vh' : '60vh' }}
      >
        <Container py={6}>
          <Heading as="h2" pb={3} fontSize={[5, 5, 6]}>
            {title}
          </Heading>
          <Heading as="h1" pb={3} fontSize={[6, 6, 7]}>
            <SplitWords words={subTitles} />
          </Heading>
          <div style={{ maxWidth: '600px' }}>
            <Html __html={textarea} />
          </div>
          <Box py={3}>
            <Button as={ScrollLink} to="contact" smooth isDynamic>
              {buttonLabel}
            </Button>
          </Box>
        </Container>
      </Flex>
    )}
  </MediaQuery>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  subTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonLabel: PropTypes.string.isRequired
}

export default SectionHeader
