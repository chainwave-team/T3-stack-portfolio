import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../utils/styles'
import Header from './header'
import Footer from './Footer'
import theme from '../../utils/theme'
import { childrenProps } from '../../utils/prop-types'

export default function Layout({ children }) {
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

Layout.propTypes = {
  children: childrenProps.isRequired
}
