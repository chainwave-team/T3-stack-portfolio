import PropTypes from 'prop-types'
import React from 'react'
import uniqid from 'uniqid'

import { Text } from '../utils/rebass'

const TagList = ({ technologies }) => (
  <Text>
    {technologies.map(({ name }, i) => (
      <span
        key={uniqid(i)}
        style={{ paddingLeft: i === 0 ? 0 : 10, display: 'inline-block' }}
      >
        {name}
      </span>
    ))}
  </Text>
)

TagList.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired
}

export default TagList
