import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import uniqid from 'uniqid'

import Link from './link'
import { Box, Flex, Card, Text } from '../utils/rebass'

const trimUrl = url => (url !== '' ? url.split('//')[1] : '')
const screenWidth = '720px'
const screenHeight = '450px'
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
const theme = 'dark'

const Mockup = ({ siteUrl, fluid }) => (
  <Box m="auto" width={screenWidth} maxWidth="100%">
    <Screen>
      <Navbar>
        <Flex mr={3}>
          {['#fc605c', '#fdbc40', '#34c749'].map((color, i) => (
            <Card
              key={uniqid(color)}
              bg={color}
              height="8px"
              width="8px"
              mx={i === 1 ? `5px` : `0`}
              borderRadius={6}
            />
          ))}
        </Flex>
        {siteUrl !== '' && (
          <Links to={siteUrl} target="_blank">
            <LinkSpan color={colors[theme].light}>https://</LinkSpan>
            <LinkSpan color={colors[theme].font}>{trimUrl(siteUrl)}</LinkSpan>
          </Links>
        )}
      </Navbar>
      <Scrollable width={1} height="100%">
        <Img fluid={fluid} maxWidth="100%" />
      </Scrollable>
    </Screen>
  </Box>
)

Mockup.propTypes = {
  fluid: PropTypes.objectOf(PropTypes.any).isRequired,
  siteUrl: PropTypes.string.isRequired
}

const Screen = styled(Box)`
  margin: 10px;
  height: ${screenHeight};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${colors[theme].bg};
  overflow: hidden;
`

const Navbar = styled(Flex)`
  width: ${screenWidth};
  height: 30px;
  padding: 11px 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  background-image: ${colors[theme].nav};
`
const Links = styled(Link)`
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`
const LinkSpan = styled(Text).attrs({
  as: 'span',
  m: 0,
  fontFamily: 'apple'
})`
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
`

const Scrollable = styled(Box)`
  overflow: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors[theme].bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors[theme].font};
  }
`

export default Mockup
