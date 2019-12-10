/** @jsx jsx */
import { ThemeProvider as Theme, Styled, jsx } from 'theme-ui'

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
        <main id="main" sx={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </Styled.root>
    </Theme>
  )
}
