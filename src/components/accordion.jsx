import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'

import { Box, Text, Heading, Link } from '../utils/rebass'

export default function Accordion({ title, content, defaultOpen }) {
  const [open, toggle] = useState(defaultOpen)
  const [height, setHeight] = useState(0)

  const ref = useRef(null)

  return (
    <Box>
      <Heading
        style={{
          borderBottom: '1px solid',
          cursor: 'pointer',
          display: 'block'
        }}
        as={Link}
        fontSize={[3, 3, 4]}
        py={[3]}
        role="button"
        onClick={() => {
          toggle(!open)
          setHeight(ref.current.scrollHeight)
        }}
      >
        {title}
      </Heading>

      <Spring
        from={{
          overflow: 'hidden',
          height: 0
        }}
        to={{ height: open ? height || 'auto' : 0 }}
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
  defaultOpen: PropTypes.bool
}

Accordion.defaultProps = {
  defaultOpen: false
}
