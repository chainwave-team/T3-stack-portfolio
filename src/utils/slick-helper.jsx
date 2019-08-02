import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import { Box } from './rebass'
import { breakpoints, colors } from './theme'
import Next from '../images/next.svg'
import Back from '../images/back.svg'

const ArrowStyle = styled(Box).attrs({
  fill: 'cyan',
  position: 'absolute',
  top: '50%'
})`
  width: 32px;
  height: 32px;
  margin: 0 -32px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    fill: ${colors.cyan};
    transition: fill 200ms ease;
  }

  svg:hover {
    fill: ${colors.pink};
  }
`

// eslint-disable-next-line
export const NextArrow = ({ className, style, onClick }) => (
  <ArrowStyle
    className={className}
    style={{ ...style, right: 0 }}
    onClick={onClick}
  >
    <Next />
  </ArrowStyle>
)

// eslint-disable-next-line
export const BackArrow = ({ className, style, onClick }) => (
  <ArrowStyle
    className={className}
    style={{ ...style, left: 0 }}
    onClick={onClick}
  >
    <Back />
  </ArrowStyle>
)
