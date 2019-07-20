import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Transition } from 'react-spring/renderprops'

import { Box, Text, Heading, Link } from '../utils/rebass'

function Accordion({ title, content, opened }) {
  const [items, toggleItems] = useState(opened ? [content] : [])
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
        onClick={() => toggleItems(items.length ? [] : [content])}
      >
        {title}
      </Heading>

      <Transition
        items={items}
        from={{ overflow: 'hidden', height: 0, opacity: 0 }}
        enter={{ height: 'auto', opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
      >
        {item => styles => (
          <animated.div style={styles}>
            <Text py={3} px={0} m={0}>
              {item}
            </Text>
          </animated.div>
        )}
      </Transition>
    </Box>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  opened: PropTypes.bool
}

Accordion.defaultProps = {
  opened: false
}

export default Accordion
