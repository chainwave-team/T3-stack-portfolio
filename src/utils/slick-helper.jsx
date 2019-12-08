import React from 'react'
import { Box } from 'rebass'

import styled from './styled'

import Next from '../images/next.svg'
import Back from '../images/back.svg'

const ArrowStyle = styled(Box)`
  width: 32px;
  height: 32px;
  margin: 0 -32px;
  fill: ${props => props.theme.colors.cyan};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    display: none;
    ${props => props.theme.mediaQueries.medium} {
      display: block;
    }
    fill: ${props => props.theme.colors.cyan};
    transition: fill 200ms ease;
  }

  svg:hover {
    fill: ${props => props.theme.colors.pink};
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
