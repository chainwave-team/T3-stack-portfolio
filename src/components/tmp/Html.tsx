/** @jsx jsx */
import { jsx, useThemeUI, SxStyleProp } from 'theme-ui'

type Props = {
  html?: string
  style?: SxStyleProp
}

export default function Html({ html, style }: Props) {
  const { theme } = useThemeUI()
  let CSS = {
    ...theme.styles,
    ...style
  }

  let p = {}
  if (style?.fontFamily) {
    p = { ...p, fontFamily: style.fontFamily }
  }
  if (style?.fontSize) {
    p = { ...p, fontSize: style.fontSize }
  }
  if (style?.color) {
    p = { ...p, color: style.color }
  }

  if (p) {
    CSS = { ...CSS, p }
  }

  if (html) {
    /* eslint-disable-next-line react/no-danger */
    return <div sx={CSS} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
