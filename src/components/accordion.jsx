import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'

import { Box, Text, Heading, Link } from '../utils/rebass'

export default function Accordion({ title, content, open, toggle, height }) {
  const ref = useRef(null)

  const getHeight = (o, h) => {
    const tmpHeight = Number.isNaN(h) ? 'auto' : h
    const out = o ? `${tmpHeight}px` : `0`
    return out.toString()
  }

  return (
    <Box>
      <Heading
        style={{ borderBottom: '1px solid', cursor: 'pointer' }}
        as={Link}
        fontSize={[3, 3, 4]}
        py={[3]}
        role="button"
        display="block"
        onClick={() => toggle(ref.current.scrollHeight)}
      >
        {title}
      </Heading>

      <Spring
        from={{ overflow: 'hidden', height: getHeight(!open, height) }}
        to={{ height: getHeight(open, height) }}
      >
        {styles => (
          <animated.div style={styles}>
            <Text ref={ref} py={3} px={0} m={0}>
              {content}
            </Text>
          </animated.div>
        )}
      </Spring>
    </Box>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  height: PropTypes.number
}

Accordion.defaultProps = {
  open: false,
  height: 0
}
