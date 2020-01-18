/** @jsx jsx */
import { ThemeProvider, Styled, jsx } from 'theme-ui'
import { Global } from '@emotion/core'

import 'normalize.css'

import Header from './Header'
import Footer from './Footer'
import { Children } from '../../utils/types'
import { tachyonsDebug, scrollBar } from '../../styles/css'
import theme from '../../styles/theme'

// Styles (scrollbar & conditional debug CSS)
const isDev: boolean = process.env.NODE_ENV === 'development'
const style = isDev ? { ...scrollBar, ...tachyonsDebug } : scrollBar

interface LayoutProps {
  path: string
  children: Children
}

export default function Layout({ children, path }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Global styles={style} />
        <Header path={path} />
        <main id="main" sx={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </Styled.root>
    </ThemeProvider>
  )
}
