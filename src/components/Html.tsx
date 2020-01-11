/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

export default function Html({ html }: { html?: string }) {
  const { theme } = useThemeUI()
  if (html) {
    /* eslint-disable-next-line react/no-danger */
    return <div sx={theme.styles} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
