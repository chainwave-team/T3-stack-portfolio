/** @jsx jsx */
import { ThemeProvider as Theme, Styled, jsx, useThemeUI } from 'theme-ui'

import GlobalStyle from '../styles/Global'
import Header from './Header'
import Footer from './Footer'
import { Children } from '../utils/types'

export default function Layout({ children }: { children: Children }) {
  const { theme } = useThemeUI()
  return (
    <Theme theme={theme}>
      <Styled.root>
        <GlobalStyle />
        <Header />
        <main id="main" sx={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </Styled.root>
    </Theme>
  )
}
