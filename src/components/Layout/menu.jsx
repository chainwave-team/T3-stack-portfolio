import React from 'react'
import uuid from 'uuid'
import { Link as ScrollLink } from 'react-scroll'
import { Box, Button, Flex, Text, Link as BaseLink } from 'rebass'

import PropTypes from 'prop-types'
import Link from '../ui/link'

export default function Menu({ links, vertical, click }) {
  return (
    <Flex
      as="ul"
      sx={{
        m: 0,
        alignItems: 'center',
        flexDirection: vertical ? 'column' : 'row',
        py: vertical ? 4 : 0
      }}
    >
      {links.map(({ name, link, target, anchor }, index) => (
        <Text
          as="li"
          key={uuid(index)}
          sx={{
            mx: vertical ? 0 : 2,
            py: vertical ? 3 : 0
          }}
        >
          <BaseLink
            as={anchor ? ScrollLink : Link}
            color="white"
            to={link}
            target={target || ``}
            onClick={() => click()}
            {...(anchor && { smooth: true, isDynamic: true })}
          >
            {name}
          </BaseLink>
        </Text>
      ))}
      <Box ml={vertical ? 0 : 3}>
        <Button
          as={ScrollLink}
          to="contact"
          smooth
          isDynamic
          onClick={() => click()}
        >
          Me contacter
        </Button>
      </Box>
    </Flex>
  )
}

Menu.propTypes = {
  vertical: PropTypes.bool,
  click: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      anchor: PropTypes.bool,
      target: PropTypes.string
    })
  )
}

Menu.defaultProps = {
  vertical: false,
  links: [
    { name: 'Compétences', link: 'skills', anchor: true },
    { name: 'Portfolio', link: 'portfolio', anchor: true },
    { name: 'Blog', link: 'https://wp-headless.fr', target: `_blank` }
  ]
}
