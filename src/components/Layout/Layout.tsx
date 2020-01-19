/** @jsx jsx */
import { ThemeProvider, Styled, jsx } from 'theme-ui'
import { Global } from '@emotion/core'

import 'normalize.css'

import Header from './Header'
import Footer from './Footer'
import { Children } from '../../utils/types'
import { tachyonsDebug, scrollBar } from '../../styles/css'
import theme from '../../styles/theme'
import { fontFaces } from '../../styles/typography'

// Styles (scrollbar & conditional debug CSS)
const debugCSS = true
const isDev: boolean = debugCSS && process.env.NODE_ENV === 'development'

interface LayoutProps {
  path: string
  children: Children
}

export default function Layout({ children, path }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Global styles={{ ...scrollBar, ...fontFaces }} />
        {isDev && <Global styles={tachyonsDebug} />}

        <Header path={path} />
        <main id="main" sx={{ flex: 1 }}>
          <Styled.code>Code</Styled.code>
          {children}
        </main>
        <Footer />
      </Styled.root>
    </ThemeProvider>
  )
}
