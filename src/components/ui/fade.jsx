import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import { Spring, config } from 'react-spring/renderprops'
import { Box } from 'rebass'

const Fade = ({ children }) => (
  <VisibilitySensor partialVisibility delay={300}>
    {({ isVisible }) => (
      <Spring
        to={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'translate3d(0, 0, 0) scale(1) skew(0, 0)'
            : 'translate3d(0, -10%, 0) scale(0.5) skew(5deg, 3deg)'
        }}
        config={config.gentle}
      >
        {css => (
          <Box style={css} m={0} p={0}>
            {children}
          </Box>
        )}
      </Spring>
    )}
  </VisibilitySensor>
)

Fade.propTypes = {
  children: PropTypes.node.isRequired
}

export default Fade
