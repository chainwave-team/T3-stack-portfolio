import React, { FC } from 'react'
import { ThemeProvider, Styled } from 'theme-ui'
import { Global } from '@emotion/core'

import 'normalize.css'

import Header from './Header'
import Footer from './Footer'
import { tachyonsDebug, scrollBar } from '../styles/css'
import theme from '../styles/theme'
import { fontFaces } from '../styles/typography'

// Styles (scrollbar & conditional debug CSS)
const debugCSS = false
const isDev: boolean = debugCSS && process.env.NODE_ENV === 'development'

export interface LayoutProps {
  path: string
}

const Layout: FC<LayoutProps> = ({ children, path }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Global styles={fontFaces} />
      <Global styles={scrollBar} />
      {isDev && <Global styles={tachyonsDebug} />}

      <>
        <Header path={path} />

        <main id="main" style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </>
    </Styled.root>
  </ThemeProvider>
)

export default Layout
