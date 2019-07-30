import React from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

import { Container, Flex, Box } from '../../utils/rebass'
import FooterCard from '../../components/footerCard'
import Fade from '../../components/fade'

const SectionFooter = ({ items }) => (
  <Container as="section" id="contact">
    <Box mx={[-3, -3, -3, -4]}>
      <Flex flexWrap="wrap" width="100%">
        {items.map((itemProps, i) => (
          <Flex
            key={uniqid(i)}
            width={[1, 1, 1 / 3]}
            px={[3, 3, 3, 4]}
            py={[3]}
            justifyContent="center"
            flexDirection="column"
            style={{ minHeight: 300 }}
          >
            <Fade>
              <FooterCard {...itemProps} />
            </Fade>
          </Flex>
        ))}
      </Flex>
    </Box>
  </Container>
)

SectionFooter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

SectionFooter.defaultProps = {
  items: []
}

export default SectionFooter
