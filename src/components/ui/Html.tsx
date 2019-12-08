import React from 'react'

import styled from '../../utils/styled'

const HTML = styled.div`
  .wysiwyg h1,
  .wysiwyg h2,
  .wysiwyg p {
    color: ${props => props.theme.colors.black};
  }

  .wysiwyg h1 {
    font-size: ${props => props.theme.fontSizes[5]};
  }

  .wysiwyg h2 {
    font-size: ${props => props.theme.fontSizes[4]};
  }
`

export default function({ html }: { html: string }) {
  return <HTML dangerouslySetInnerHTML={{ __html: html }} />
}
