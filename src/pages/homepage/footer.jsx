import React, { Component } from 'react'
import uniqid from 'uniqid'

import { getOptions } from '../../api'
import { Container, Flex, Box } from '../../utils/rebass'
import Fade from '../../components/fade'
import FooterCard from '../../components/footerCard'

class SectionFooter extends Component {
  static propTypes = {}

  state = { loading: true, blocks: [] }

  componentDidMount() {
    getOptions().then(options =>
      this.setState({
        loading: false,
        blocks: options.portfolio.footer
      })
    )
  }

  render() {
    const { blocks, loading } = this.state
    return (
      <Container as="section" id="contact">
        {!loading && (
          <Fade>
            <Box mx={[-3, -3, -3, -4]}>
              <Flex flexWrap="wrap" width="100%">
                {blocks &&
                  blocks.map((itemProps, i) => (
                    <Flex
                      key={uniqid(i)}
                      width={[1, 1, 1 / 3]}
                      px={[3, 3, 3, 4]}
                      py={[3]}
                      justifyContent="center"
                      flexDirection="column"
                      style={{ minHeight: 300 }}
                    >
                      <FooterCard {...itemProps} />
                    </Flex>
                  ))}
              </Flex>
            </Box>
          </Fade>
        )}
      </Container>
    )
  }
}

export default SectionFooter
