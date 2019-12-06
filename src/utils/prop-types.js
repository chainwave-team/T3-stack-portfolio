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
  prismic: {},
  models: {}
}

propTypes.prismic = {
  link: PropTypes.shape({
    link_type: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string
  }),
  textarea: PropTypes.shape({
    text: PropTypes.string,
    html: PropTypes.string
  }),
  image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  })
}

propTypes.models.tech_tag = PropTypes.shape({
  title: propTypes.textarea,
  description: propTypes.textarea
})

propTypes.models.project = PropTypes.shape({
  title: propTypes.textarea,
  demo_link: propTypes.prismic.link,
  source_link: propTypes.prismic.link,
  full_screen: propTypes.image,
  html: propTypes.textarea,
  project_type: PropTypes.shape({
    document: PropTypes.arrayOf(
      PropTypes.shape({
        title: propTypes.textarea
      })
    )
  }),
  relations: PropTypes.arrayOf(
    PropTypes.shape({
      tech_tags: PropTypes.shape({
        document: PropTypes.arrayOf(
          PropTypes.shape({
            data: propTypes.models.tech_tag
          })
        )
      })
    })
  )
})

export default propTypes
