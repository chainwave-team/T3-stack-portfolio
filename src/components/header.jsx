import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Headroom from 'react-headroom'
import MediaQuery from 'react-responsive'
import { Transition } from 'react-spring/renderprops'
import styled from 'styled-components'

import { Flex, Button, Container, Box, Card } from '../utils/rebass'
import { breakpoints, colors, space } from '../utils/theme'
import Menu from './menu'
import CloseIcon from '../images/close.svg'
import MenuIcon from '../images/menu.svg'

const Icon = styled(Box).attrs({
  width: space[4],
  height: space[4],
  fill: colors.cyan
})``

function Header({ siteTitle }) {
  const node = useRef()
  const [open, toggle] = useState(false)
  const handleItemClick = () => toggle(false)

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
      zIndex={1}
      width={1}
      style={{ top: '0', left: '0', right: '0' }}
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
                      <Transition
                        items={open}
                        from={{
                          opacity: 0,
                          right: 0,
                          top: 0,
                          position: 'absolute'
                        }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}
                      >
                        {toggled =>
                          toggled
                            ? props => <Icon as={CloseIcon} style={props} />
                            : props => <Icon as={MenuIcon} style={props} />
                        }
                      </Transition>
                    </Box>
                  )}
                </Flex>
              </Container>
            </Card>

            <Transition
              items={open && !matches}
              from={{
                transform: 'translate3d(0,-100%,0)',
                opacity: 0,
                zIndex: -1,
                position: 'relative'
              }}
              enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
              leave={{ transform: 'translate3d(0,-100%,0)', opacity: 0 }}
            >
              {show =>
                show &&
                (props => (
                  <div style={props}>
                    <Card bg="blue">
                      <Container py={0}>
                        <Menu vertical click={() => handleItemClick()} />️
                      </Container>
                    </Card>
                  </div>
                ))
              }
            </Transition>
          </Headroom>
        )}
      </MediaQuery>
    </Box>
  )
}

Header.propTypes = { siteTitle: PropTypes.string }
Header.defaultProps = { siteTitle: `J` }

export default Header
