/** @jsx jsx */
import { jsx } from 'theme-ui'
import uuid from 'uuid'
import { Link as ScrollLink } from 'react-scroll'
import { Box, Button, Flex, Text } from 'rebass'

import Link from '../ui/Link'

type MenuItem = {
  name: string
  link: string
  target?: string | null
  anchor?: boolean
}

type Props = {
  links: Array<MenuItem>
  vertical?: boolean
  click: () => void
}

export default function Menu({ links, vertical, click }: Props) {
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
      {links &&
        links.map(({ name, link, target, anchor = false }, index) => (
          <Text
            as="li"
            key={uuid(index)}
            sx={{
              mx: vertical ? 0 : 2,
              py: vertical ? 3 : 0,
              '& > *': {
                color: 'white'
              }
            }}
          >
            {anchor ? (
              <ScrollLink to={link} onClick={() => click()} smooth isDynamic>
                {name}
              </ScrollLink>
            ) : (
              <Link to={link} target={target || ``} onClick={() => click()}>
                {name}
              </Link>
            )}
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

Menu.defaultProps = {
  vertical: false,
  links: [
    { name: 'Compétences', link: 'skills', anchor: true },
    { name: 'Portfolio', link: 'portfolio', anchor: true },
    { name: 'Blog', link: 'https://wp-headless.fr', target: `_blank` }
  ]
}
