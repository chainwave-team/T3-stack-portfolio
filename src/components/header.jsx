import PropTypes from 'prop-types'
import React from 'react'
import uniqid from 'uniqid'
import { Link as ScrollLink } from 'react-scroll'
import Headroom from 'react-headroom'

import { Flex, Button, Container, Text, Box, Card } from '../utils/rebass'
import Link from './link'

const linkStyle = { color: 'white' }

const Header = ({ siteTitle, links }) => (
  <Box as="section" position="relative">
    <Box position="absolute" width={1}>
      <Headroom>
        <Card width={1} bg="darkBlue" boxShadow={3}>
          <Container py={0}>
            <Flex
              py={[2]}
              as="nav"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Button as={ScrollLink} to="main" smooth isDynamic>
                  {siteTitle}
                </Button>
              </Box>
              <Flex as="ul" alignItems="center">
                {links.map(({ name, link, target, anchor }, index) => (
                  <Text as="li" key={uniqid(index)} mx={2}>
                    {anchor ? (
                      <ScrollLink style={linkStyle} to={link} smooth isDynamic>
                        {name}
                      </ScrollLink>
                    ) : (
                      <Link to={link} style={linkStyle} target={target || ``}>
                        {name}
                      </Link>
                    )}
                  </Text>
                ))}
                <Box ml={3}>
                  <Button as="a" target="_blank" to="#contact">
                    Me contacter
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Card>
      </Headroom>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      anchor: PropTypes.bool,
      target: PropTypes.string
    })
  )
}

Header.defaultProps = {
  siteTitle: `J`,
  links: [
    { name: 'Compétences', link: 'skills', anchor: true },
    { name: 'Portfolio', link: 'portfolio', anchor: true },
    { name: 'Blog', link: 'https://wp-headless.fr', target: `_blank` }
  ]
}

export default Header
