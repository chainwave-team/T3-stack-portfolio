import React from 'react'
import { Transition } from 'react-spring/renderprops'
import PropTypes from 'prop-types'

import { Box } from '../utils/rebass'

const Fade = ({ children }) => (
  <Transition
    items={children}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {show =>
      show &&
      (css => (
        <Box style={css} m={0} p={0}>
          {children}
        </Box>
      ))
    }
  </Transition>
)

Fade.propTypes = {
  children: PropTypes.node.isRequired
}

export default Fade
