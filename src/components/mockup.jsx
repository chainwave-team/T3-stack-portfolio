import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from './link'

const trimUrl = url => (url !== '' ? url.split('//')[1] : '')

const $screenWidth = '580px'
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

const Mockup = ({ imageUrl, siteUrl }) => (
  <Screen>
    <Navbar>
      <CircleList>
        <div />
        <div />
        <div />
      </CircleList>
      {siteUrl !== '' && (
        <Url to={siteUrl} target="_blank">
          <span className="host">https://</span>
          <span className="domain">{trimUrl(siteUrl)}</span>
        </Url>
      )}
    </Navbar>
    <Relative>
      <ScrollBottom />
      <Viewport
        className="viewport"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </Relative>
  </Screen>
)

Mockup.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired
}

const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: ${$screenWidth};
  max-width: 100%;

  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  background-color: ${colors[theme].bg};
  height: 400px;
`

const Navbar = styled.div`
  width: 100%;
  display: flex;
  padding: 11px 10px;
  background-image: ${colors[theme].nav};
`

const CircleList = styled.div`
  display: flex;
  div {
    height: 8px;
    width: 8px;
    border-radius: 50%;

    &:nth-child(1) {
      background-color: #fc605c; // red
    }
    &:nth-child(2) {
      background-color: #fdbc40; // Yellow
      margin: 0 5px;
    }
    &:nth-child(3) {
      background-color: #34c749; // Green
    }
  }
`

const Url = styled(Link)`
  margin: 0 0 0 10px;
  //line-height: 1;
  font-family: 'San Francisco Text', 'avenir';
  font-size: 10px;
  font-weight: 400;
  .host {
    color: ${colors[theme].light};
  }
  .domain {
    color: ${colors[theme].font};
  }
`
const Relative = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`
const ScrollZone = styled.span`
  content: ' ';
  display: block;
  position: absolute;
  width: 100%;
  height: 45%;
  z-index: 5;
`
const ScrollBottom = styled(ScrollZone)`
  bottom: 0;
  cursor: s-resize;
  &:hover + .viewport {
    background-position: 0 100%;
  }
`
const Viewport = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #333;

  /* Animation content */
  transition: background-position 8s;
  background-position: 0 0;
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: n-resize;
  overflow: hidden;
`

export default Mockup
