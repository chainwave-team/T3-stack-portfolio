import React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Container, Text, Box } from '../utils/rebass'
import GlobalStyle from '../utils/styles'
import Header from './header'
import theme from '../utils/theme'
import { childrenProps } from '../utils/prop-types'

export default function Layout({ children }) {
  const { home } = useStaticQuery(
    graphql`
      query Layout {
        home: wordpressPage(wordpress_id: { eq: 765 }) {
          acf {
            footer_text
            footer_small
          }
        }
      }
    `
  )

  const { footer_text: footerText, footer_small: footerSmall } = home.acf

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <main id="main">{children}</main>
        <Box as="footer" style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}>
          <Container py={0}>
            <Text m={0} py={[3, 3, 4]} textAlign="center">
              {footerText}
            </Text>
            <Text m={0} py={[3]} textAlign="center">
              <small>{footerSmall}</small>
            </Text>
          </Container>
        </Box>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: childrenProps.isRequired
}
