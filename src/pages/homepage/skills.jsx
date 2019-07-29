import React from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

import { Container, Box, Heading } from '../../utils/rebass'
import Accordion from '../../components/accordion'

const SectionSkills = ({ title, items }) => (
  <Container as="section" id="skills">
    <Box
      bg="blue"
      py={[4, 4, 5, 6]}
      px={[3, 3, 4, 5]}
      width={[1, 1, 2 / 3, 3 / 5]}
      m="auto"
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
            opened={i === 0}
          />
        ))}
      </Box>
    </Box>
  </Container>
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
