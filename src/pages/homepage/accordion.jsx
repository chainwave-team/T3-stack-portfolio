import React, { useState } from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Container, Box, Heading, Card } from '../../utils/rebass'
import Fade from '../../components/fade'
import { breakpoints } from '../../utils/theme'
import Accordion from '../../components/accordion'

export default function SectionAccordion({ title, items }) {
  const initialsState = []
  items.forEach((_, i) => {
    initialsState.push({ key: i + 1, height: 0, open: false })
  })

  const [sections, toggle] = useState(initialsState)

  function toggleClick(index, h) {
    const isIt = i => i === index + 1
    toggle(state =>
      state.map(el => ({
        ...el,
        height: isIt(el.key) ? h : 0,
        open: isIt(el.key) && !el.open
      }))
    )
  }

  return (
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
                    open={sections[i].open}
                    toggle={h => toggleClick(i, h)}
                    height={sections[i].height}
                  />
                ))}
              </Box>
            </Card>
          </Fade>
        </Container>
      )}
    </MediaQuery>
  )
}

SectionAccordion.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
}

SectionAccordion.defaultProps = {
  title: '',
  items: [{ titre: '', content: '' }]
}
