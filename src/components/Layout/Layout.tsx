import React from 'react'
import { ThemeProvider as Theme, Styled } from 'theme-ui'

import GlobalStyle from '../../styles/GlobalStyle'
import Header from './Header'
import Footer from './Footer'
import theme from '../../styles/theme'
import { Children } from '../../utils/types'

export default function Layout({ children }: { children: Children }) {
  return (
    <Theme theme={theme}>
      <Styled.root>
        <GlobalStyle />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </Styled.root>
    </Theme>
  )
}
