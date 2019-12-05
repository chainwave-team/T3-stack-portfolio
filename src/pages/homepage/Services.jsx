import React, { useState } from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import { Container, Heading, Card } from '../../utils/rebass'
import Fade from '../../components/fade'
import { breakpoints } from '../../utils/theme'
import Accordion from '../../components/accordion'

export default function ServicesSection({ title, items }) {
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
        <Container
          as="section"
          id="skills"
          style={!matches ? { width: `100%` } : {}}
        >
          <Fade>
            <Card
              bg="blue"
              py={[5, 6]}
              px={[4, 5]}
              width={[1, 1, 3 / 4, 3 / 5]}
              m="auto"
              boxShadow={1}
            >
              <Heading lineHeight="1" pb={4}>
                {title}
              </Heading>
              {items.map(({ service_title, service_textarea }, i) => (
                <Accordion
                  key={uniqid(i)}
                  title={service_title}
                  content={service_textarea}
                  open={sections[i].open}
                  toggle={h => toggleClick(i, h)}
                  height={sections[i].height}
                />
              ))}
            </Card>
          </Fade>
        </Container>
      )}
    </MediaQuery>
  )
}

ServicesSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      service_title: PropTypes.string,
      service_textarea: PropTypes.shape({
        text: PropTypes.string,
        html: PropTypes.string
      })
    })
  )
}

ServicesSection.defaultProps = {
  title: '',
  items: [
    {
      service_title: '',
      service_textarea: {
        text: '',
        html: ''
      }
    }
  ]
}
