import PropTypes from 'prop-types'

// Children proptypes
export const childrenProps = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])

export const imageProps = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: PropTypes.any,
    fixed: PropTypes.any
  }).isRequired
}).isRequired
