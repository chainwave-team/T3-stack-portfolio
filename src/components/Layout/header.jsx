import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Headroom from 'react-headroom'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

import { Flex, Button, Container, Box, Card } from '../../utils/rebass'
import { breakpoints, colors, space } from '../../utils/theme'
import Menu from './menu'
import CloseIcon from '../../images/close.svg'
import MenuIcon from '../../images/menu.svg'

const Icon = styled(Box).attrs({
  fill: colors.cyan,
  position: 'absolute'
})``
const Anim = animated.div

export default function Header({ siteTitle }) {
  const node = useRef()
  const [open, toggle] = useState(false)
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
  const handleClick = e => !node.current.contains(e.target) && toggle(false)
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <Box
      as="header"
      position="absolute"
      width={1}
      style={{ top: '0', left: '0', right: '0', zIndex: 1 }}
      ref={node}
    >
      <MediaQuery minWidth={breakpoints[1]}>
        {matches => (
          <Headroom style={{ maxWidth: '100%' }}>
            <Card bg="darkBlue" boxShadow={3}>
              <Container py={0}>
                <Flex
                  py={[3]}
                  as="nav"
                  justifyContent="space-between"
                  alignItems="center"
                  position="relative"
                >
                  <Button
                    as={ScrollLink}
                    to="main"
                    smooth
                    isDynamic
                    onClick={() => toggle(false)}
                  >
                    {siteTitle}
                  </Button>
                  {matches ? (
                    <Menu click={() => null} />
                  ) : (
                    <Box
                      style={{
                        width: space[4],
                        height: space[4],
                        right: 0,
                        top: 0
                      }}
                      role="button"
                      position="relative"
                      onClick={() => toggle(!open)}
                    >
                      {iconTransitions.map(({ item, key, props }) =>
                        item ? (
                          <Anim key={key} style={props}>
                            <Icon as={CloseIcon} />
                          </Anim>
                        ) : (
                          <Anim key={key} style={props}>
                            <Icon as={MenuIcon} />
                          </Anim>
                        )
                      )}
                    </Box>
                  )}
                </Flex>
              </Container>
            </Card>
            {menuTransitions.map(({ item, key, props }) =>
              item ? (
                <animated.div
                  key={key}
                  style={{
                    ...props,
                    zIndex: -1,
                    position: 'relative',
                    backgroundColor: colors.blue
                  }}
                >
                  <Menu vertical click={() => toggle(false)} />
                </animated.div>
              ) : null
            )}
          </Headroom>
        )}
      </MediaQuery>
    </Box>
  )
}

Header.propTypes = { siteTitle: PropTypes.string }
Header.defaultProps = { siteTitle: `J` }
