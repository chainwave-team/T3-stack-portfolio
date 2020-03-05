/** @jsx jsx */
import { jsx, useThemeUI, SxStyleProp } from 'theme-ui'
import { FC } from 'react'

export interface HtmlProps {
  html?: string
  style?: SxStyleProp
}

const Html: FC<HtmlProps> = ({ html = '', style = {} }) => {
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

export default Html
