import PropTypes from 'prop-types'

// Children propTypes
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

export const stylesProps = PropTypes.objectOf(
  PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
)

const propTypes = {
  prismic: {
    link: PropTypes.shape({
      link_type: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string
    }),
    textarea: PropTypes.shape({
      text: PropTypes.string,
      html: PropTypes.string
    })
  }
}

export default propTypes
