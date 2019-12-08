import React from 'react'
import { ThemeProvider } from 'theme-ui'

import GlobalStyle from '../../utils/GlobalStyle'
import Header from './Header'
import Footer from './Footer'
import theme from '../../gatsby-plugin-theme-ui'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}
