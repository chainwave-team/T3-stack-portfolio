import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors, fontSizes } from '../utils/theme'

const wysiwyg = css`
  /*
  The following styles are applied 
  only when we have a wysiwyg
   */
  .wysiwyg h1,
  .wysiwyg h2,
  .wysiwyg p {
    color: ${colors.black};
  }

  .wysiwyg h1 {
    font-size: ${fontSizes[5]};
  }

  .wysiwyg h2 {
    font-size: ${fontSizes[4]};
  }
`
const HTML = styled.div`
  ${wysiwyg}
`

const Html = ({ __html }) => <HTML dangerouslySetInnerHTML={{ __html }} />

Html.propTypes = {
  __html: PropTypes.string.isRequired
}

export default Html
