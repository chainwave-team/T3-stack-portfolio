/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui'
import uuid from 'uuid'
import { Link as ScrollLink } from 'react-scroll'

import Link from '../components/Link'
import Button from '../components/Button'

type MenuItem = {
  name: string
  link: string
  target?: string
  anchor?: boolean
}

type Props = {
  path: string
  vertical?: boolean
  click?: () => void
}

export default function Menu({ vertical = false, click, path }: Props) {
  const isHome = path === '/'
  const menu: MenuItem[] = [
    {
      name: 'Compétences',
      link: isHome ? 'skills' : '/#skills',
      anchor: isHome
    },
    {
      name: 'Portfolio',
      link: isHome ? 'portfolio' : '/#portfolio',
      anchor: isHome
    },
    { name: 'Blog', link: '/blog' }
  ]

  return (
    <Flex
      sx={{
        m: 0,
        alignItems: 'center',
        flexDirection: vertical ? 'column' : 'row',
        py: vertical ? 4 : 0
      }}
    >
      {menu.map(({ name, link, target = '', anchor = false }) => {
        const props = {
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
          return (
            <Styled.a {...props} as={ScrollLink} smooth isDynamic>
              {name}
            </Styled.a>
          )
        }
        return (
          <Link {...props} target={target || ''}>
            {name}
          </Link>
        )
      })}
      <Box sx={{ ml: vertical ? 0 : 3 }}>
        <Link to="/contact" onClick={() => click()}>
          <Button>Me contacter</Button>
        </Link>
      </Box>
    </Flex>
  )
}
