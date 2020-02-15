/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui'
import uuid from 'uuid'
import { Link as ScrollLink } from 'react-scroll'

import { FC } from 'react'
import Link from '../Link'
import ContactButton from '../ContactButton'

interface MenuItem {
  name: string
  link: string
  target?: string
  anchor?: boolean
}

export interface MenuProps {
  path: string
  vertical?: boolean
  click?: () => void
}

const Menu: FC<MenuProps> = ({ vertical = false, click, path }) => {
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

  const handleClick = () => {
    if (typeof click !== 'undefined') {
      click()
    }
  }

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
          to: link,
          onClick: handleClick,
          sx: {
            mx: vertical ? 0 : 2,
            py: vertical ? 3 : 0,
            color: 'white'
          }
        }

        if (anchor) {
          const anchorProps = { ...props, smooth: true, isDynamic: true }
          return (
            <Styled.a {...anchorProps} as={ScrollLink}>
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
        <ContactButton onClick={handleClick} />
      </Box>
    </Flex>
  )
}

export default Menu
