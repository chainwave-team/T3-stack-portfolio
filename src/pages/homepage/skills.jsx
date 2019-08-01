import React from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { Container, Box, Heading, Card } from '../../utils/rebass'
import Accordion from '../../components/accordion'
import Fade from '../../components/fade'
import { breakpoints } from '../../utils/theme'

const SectionSkills = ({ title, items }) => (
  <MediaQuery minWidth={breakpoints[1]}>
    {matches => (
      <Container as="section" id="skills" width={matches && `100%`}>
        <Fade>
          <Card
            bg="blue"
            py={[5, 5, 5, 6]}
            px={[4, 4, 4, 5]}
            width={[1, 1, 2 / 3, 3 / 5]}
            m="auto"
            boxShadow={1}
          >
            <Heading lineHeight="1" pb={4}>
              {title}
            </Heading>
            <Box py={3}>
              {items.map(({ titre, content }, i) => (
                <Accordion
                  key={uniqid(i)}
                  title={titre}
                  content={content}
                  defaultOpen={i === 0}
                />
              ))}
            </Box>
          </Card>
        </Fade>
      </Container>
    )}
  </MediaQuery>
)

SectionSkills.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
}

SectionSkills.defaultProps = {
  title: '',
  items: [{ titre: '', content: '' }]
}

export default SectionSkills
