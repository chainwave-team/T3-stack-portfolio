/** @jsx jsx */
import { jsx, Flex, Box, useThemeUI } from 'theme-ui'
import { useState, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Headroom from 'react-headroom'
import { useTransition, animated } from 'react-spring'
import { useMediaQuery } from 'react-responsive'
import { useClickAway } from 'react-use'

import { Link } from 'gatsby'
import Menu from './Menu'
import CloseIcon from '../../assets/svg/close.svg'
import MenuIcon from '../../assets/svg/menu.svg'
import Container from '../Container'
import Button from '../Button'

const iconStyle = {
  fill: 'primary',
  position: 'absolute'
}

const Anim = animated.div

type LogoProps = {
  path: string
  onClick: () => void
  siteTitle?: string
}

function Logo({ path, onClick, siteTitle = 'J' }: LogoProps) {
  if (path === '/') {
    return (
      <ScrollLink smooth isDynamic to="main" onClick={onClick}>
        <Button>{siteTitle}</Button>
      </ScrollLink>
    )
  }
  return (
    <Link to="/" onClick={onClick}>
      <Button>{siteTitle}</Button>
    </Link>
  )
}

type Props = {
  path: string
}

export default function Header({ path }: Props) {
  const node = useRef()
  const { theme } = useThemeUI()
  const isLargeScreen = useMediaQuery({ minWidth: theme.breakpoints[1] })
  const [open, setOpen] = useState(false)
  const menuTransitions = useTransition(open, null, {
    from: { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
    enter: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-100%,0)', opacity: 0 }
  })
  const iconTransitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  // outside click
  useClickAway(node, () => setOpen(false))

  return (
    <header
      sx={{
        top: '0',
        left: '0',
        right: '0',
        zIndex: 1,
        width: '100%',
        position: 'absolute'
      }}
      ref={node}
    >
      <Headroom style={{ maxWidth: '100%' }}>
        <div
          sx={{
            bg: 'bg',
            boxShadow: 3
          }}
        >
          <Container>
            <Flex
              sx={{
                py: [3],
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
              }}
              as="nav"
            >
              <Logo path={path} onClick={() => setOpen(false)} />
              {isLargeScreen ? (
                <Menu path={path} />
              ) : (
                <Box
                  role="button"
                  onClick={() => setOpen(!open)}
                  sx={{
                    width: 6,
                    height: 6,
                    right: '0',
                    top: '0',
                    position: 'relative'
                  }}
                >
                  {iconTransitions.map(({ item, key, props }) =>
                    item ? (
                      <Anim key={key} style={props}>
                        <CloseIcon sx={iconStyle} />
                      </Anim>
                    ) : (
                      <Anim key={key} style={props}>
                        <MenuIcon sx={iconStyle} />
                      </Anim>
                    )
                  )}
                </Box>
              )}
            </Flex>
          </Container>
        </div>
        {menuTransitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              sx={{
                zIndex: -1,
                position: 'relative',
                backgroundColor: 'blue'
              }}
              style={{
                ...props
              }}
            >
              <Menu path={path} vertical click={() => setOpen(false)} />
            </animated.div>
          ) : null
        )}
      </Headroom>
    </header>
  )
}
