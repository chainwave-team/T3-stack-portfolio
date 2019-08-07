import React from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { Container, Text, Box } from '../utils/rebass'
import GlobalStyle from '../utils/styles'
import Header from './header'
import theme from '../utils/theme'
import { childrenProps } from '../utils/prop-types'

export default function Layout({ children }) {
  const { options } = useStaticQuery(
    graphql`
      query Layout {
        options: wordpressAcfOptions {
          options {
            portfolio {
              footer_text
            }
          }
        }
      }
    `
  )

  const footerText = options.options.portfolio.footer_text

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
          </Container>
        </Box>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: childrenProps.isRequired
}
