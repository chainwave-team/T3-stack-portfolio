/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui'
import uuid from 'uuid'
import { Link as ScrollLink } from 'react-scroll'

import Link from '../components/Link'
import Button from '../components/Button'

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

// ? Move this logic in Link Component ?
type linkType = {
  key: string
  sx: any
  to: string
  onClick: () => void
  as: any
  smooth?: boolean
  isDynamic?: boolean
  target?: string
}

export default function Menu({ links, vertical, click }: Props) {
  return (
    <Flex
      sx={{
        m: 0,
        alignItems: 'center',
        flexDirection: vertical ? 'column' : 'row',
        py: vertical ? 4 : 0
      }}
    >
      {links &&
        links.map(({ name, link, target, anchor = false }, index) => {
          const props: linkType = {
            key: uuid(),
            sx: {
              mx: vertical ? 0 : 2,
              py: vertical ? 3 : 0,
              color: 'white'
            },
            to: link,
            onClick: () => click(),
            as: anchor ? ScrollLink : Link
          }

          if (anchor) {
            props.smooth = true
            props.isDynamic = true
          } else {
            props.target = target || ''
          }
          return <Styled.a {...props}>{name}</Styled.a>
        })}
      <Box sx={{ ml: vertical ? 0 : 3 }}>
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
