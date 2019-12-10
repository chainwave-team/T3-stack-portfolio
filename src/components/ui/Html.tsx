/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import theme from '../../styles/theme'

const { styles } = theme

export default function Html({ html }: { html?: string }) {
  if (html) {
    // eslint-disable-next-line react/no-danger
    return <Box sx={styles} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
