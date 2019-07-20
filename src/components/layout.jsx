import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { Container, Text, Box } from '../utils/rebass'
import GlobalStyle from '../utils/styles'
import Header from './header'
import theme from '../utils/theme'
import { getOptions } from '../api'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = { loading: true, options: {} }

  componentDidMount() {
    getOptions().then(options =>
      this.setState({
        loading: false,
        options
      })
    )
  }

  render() {
    const { children } = this.props
    const { loading, options } = this.state

    return (
      <ThemeProvider theme={theme}>
        <main id="main">
          {!loading && (
            <>
              <GlobalStyle />
              <Header />
              <main>{children}</main>
              <Box
                as="footer"
                style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
              >
                <Container py={0}>
                  <Text m={0} py={[3, 3, 4]} textAlign="center">
                    {options.portfolio.footer_text}
                  </Text>
                </Container>
              </Box>
            </>
          )}
        </main>
      </ThemeProvider>
    )
  }
}

export default Layout
