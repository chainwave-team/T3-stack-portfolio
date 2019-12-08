import React from 'react'
import { keyframes } from '@emotion/core'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { Box, Flex, Card, Text } from 'rebass'

import Link from './link'
import GithubCorner from './GithubCorner'
import ScrollSVG from '../../images/arrows-v-alt.svg'
import styled from '../../utils/styled'

const trimUrl = url => (url !== '' ? url.split('//')[1] : '')
const screenWidth = '720px'
const screenHeight = '450px'
const ScrollIconSize = 32
const colors = {
  dark: {
    bg: '#252525',
    nav: 'linear-gradient(180deg, #1a1a1a 0%, #151515 100%)',
    font: '#ffffff',
    light: '#afafaf'
  },
  light: {
    bg: '#f4f6f9',
    nav: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
    font: '#363636',
    light: '#858585'
  }
}

const getTheme = index => (index % 2 === 0 ? 'dark' : 'light')

const Mockup = ({ siteUrl, fluid, index, title, srcUrl }) => {
  const colorTheme = getTheme(index)
  return (
    <Box m="auto" width={screenWidth} maxWidth="100%">
      <Screen bg={colors[colorTheme].bg}>
        <Navbar style={{ backgroundImage: colors[colorTheme].nav }}>
          <Flex mr={3}>
            {['#fc605c', '#fdbc40', '#34c749'].map((color, i) => (
              <Card
                key={uuid(color)}
                bg={color}
                height="8px"
                width="8px"
                mx={i === 1 ? `5px` : `0`}
                borderRadius={6}
              />
            ))}
          </Flex>
          {siteUrl && siteUrl !== '' && (
            <Links to={siteUrl} target="_blank">
              <LinkSpan as="span" color={colors[colorTheme].light}>
                https://
              </LinkSpan>
              <LinkSpan as="span" color={colors[colorTheme].font}>
                {trimUrl(siteUrl)}
              </LinkSpan>
            </Links>
          )}
        </Navbar>
        <ScrollWrap position="relative">
          {srcUrl !== '' && <GithubCorner url={srcUrl} />}
          <ScrollSVG />

          <Scrollable width={1} maxHeight="100%">
            <img
              src={fluid.src}
              srcSet={fluid.srcSet}
              width="100%"
              height="auto"
              alt={title}
            />
          </Scrollable>
        </ScrollWrap>
      </Screen>
    </Box>
  )
}

Mockup.propTypes = {
  fluid: PropTypes.objectOf(PropTypes.any).isRequired,
  siteUrl: PropTypes.string.isRequired,
  srcUrl: PropTypes.string,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

Mockup.defaultProps = {
  srcUrl: ''
}

const move = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-1em); }
  100% { transform: translateY(0); }
`
const Screen = styled(Box)`
  margin: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
`
const Navbar = styled(Flex)`
  width: ${props => props.theme.screenWidth};
  height: 30px;
  padding: 11px 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
`
const Links = styled(Link)`
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`
const LinkSpan = styled(Text)`
  margin: 0;
  font-family: ${props => props.theme.fonts.apple};
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
`
const ScrollWrap = styled(Box)`
  & > svg {
    opacity: 1;
    transition: opacity 200ms;
    position: absolute;
    top: 85%;
    left: calc(50% - (${ScrollIconSize}px / 2));
    transform: translate(-100%);
    z-index: 5;
    fill: ${props => props.theme.colors.cyan};
    height: ${ScrollIconSize}px;
    width: ${ScrollIconSize}px;
    animation: ${move} ${props => props.theme.transitions[3]}s ease-out infinite;
  }
  &:hover > svg {
    opacity: 0;
  }
`

const Scrollable = styled(Box)`
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  height: ${screenHeight};
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.light.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.light.font};
  }
`

export default Mockup
