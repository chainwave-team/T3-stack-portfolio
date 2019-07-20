import React, { Component } from 'react'
import uniqid from 'uniqid'

import { Container, Box, Heading } from '../../utils/rebass'
import Accordion from '../../components/accordion'
import { getOptions } from '../../api'
import Fade from '../../components/fade'

class SectionSkills extends Component {
  state = {
    loading: true,
    data: {}
  }

  componentDidMount() {
    getOptions().then(options =>
      this.setState({
        loading: false,
        data: options.portfolio
      })
    )
  }

  render() {
    const { loading, data } = this.state
    return (
      <Container as="section" id="skills">
        {!loading && (
          <Fade>
            <Box
              bg="blue"
              py={[4, 4, 5, 6]}
              px={[3, 3, 4, 5]}
              width={[1, 1, 2 / 3, 3 / 5]}
              m="auto"
            >
              <Heading lineHeight="1" pb={4}>
                {data.skills_titre}
              </Heading>
              <Box py={3}>
                {data.skills.map(({ titre, content }, i) => (
                  <Accordion
                    key={uniqid(i)}
                    title={titre}
                    content={content}
                    opened={i === 0}
                  />
                ))}
              </Box>
            </Box>
          </Fade>
        )}
      </Container>
    )
  }
}

export default SectionSkills
