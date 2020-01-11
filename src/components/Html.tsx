/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

type Props = {
  html?: string
  style?: React.CSSProperties
}

export default function Html({ html, style }: Props) {
  const { theme } = useThemeUI()
  const CSS = {
    ...theme.styles,
    ...style
  }
  if (html) {
    /* eslint-disable-next-line react/no-danger */
    return <div sx={CSS} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
