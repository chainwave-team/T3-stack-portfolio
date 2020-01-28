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

  // fix fontFamily
  if (style?.fontFamily) {
    CSS = {
      ...CSS,
      p: {
        fontFamily: style.fontFamily
      }
    }
  }

  if (html) {
    /* eslint-disable-next-line react/no-danger */
    return <div sx={CSS} dangerouslySetInnerHTML={{ __html: html }} />
  }
  return null
}
