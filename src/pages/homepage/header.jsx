import React, { Component } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import MediaQuery from 'react-responsive'

import { Container, Heading, Flex, Button, Box } from '../../utils/rebass'
import { getOptions } from '../../api'
import Html from '../../components/html'
import { breakpoints } from '../../utils/theme'
import SplitWords from '../../components/splitWords'
import Fade from '../../components/fade'

class SectionHeader extends Component {
  state = { loading: true, options: {} }

  componentDidMount() {
    getOptions().then(options =>
      this.setState({
        loading: false,
        options: options.portfolio
      })
    )
  }

  render() {
    const { options, loading } = this.state
    return (
      <MediaQuery minWidth={breakpoints[1]}>
        {matches => (
          <Flex
            as="section"
            id="top"
            flexDirection="column"
            justifyContent="center"
            style={{ minHeight: matches ? '100vh' : '60vh' }}
          >
            {!loading && (
              <Fade>
                <Container py={6}>
                  <Heading as="h2" pb={3} fontSize={[5, 5, 6]}>
                    {options.header_name}
                  </Heading>
                  <Heading as="h1" pb={3} fontSize={[6, 6, 7]}>
                    <SplitWords
                      words={options.header_titres.map(
                        item => item.titre_metier
                      )}
                    />
                  </Heading>
                  <div style={{ maxWidth: '600px' }}>
                    <Html __html={options.header_textarea} />
                  </div>
                  <Box py={3}>
                    {options.label_bouton_contact !== '' && (
                      <Button as={ScrollLink} to="contact" smooth isDynamic>
                        {options.label_bouton_contact}
                      </Button>
                    )}
                  </Box>
                </Container>
              </Fade>
            )}
          </Flex>
        )}
      </MediaQuery>
    )
  }
}

export default SectionHeader
