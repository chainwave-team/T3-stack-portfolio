/** @jsx jsx */
import { jsx } from 'theme-ui'

import theme from '../../styles/theme'

const { styles } = theme

export default function Html({ html }: { html?: string }) {
  if (html) {
    // eslint-disable-next-line react/no-danger
    return <div sx={styles} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
