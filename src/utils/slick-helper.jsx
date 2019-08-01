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
export const Arrow = ({ style, sideCss, children, ...rest }) => (
  <MediaQuery minWidth={breakpoints[1]}>
    {matches =>
      matches ? (
        <ArrowStyle {...rest} style={{ ...style, ...sideCss }}>
          {children}
        </ArrowStyle>
      ) : null
    }
  </MediaQuery>
)

export const settings = {
  dots: false,
  autoplay: true,
  arrows: true,
  infinite: true,
  lazyLoad: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <Arrow sideCss={{ right: 0 }}>
      <Next />
    </Arrow>
  ),
  prevArrow: (
    <Arrow sideCss={{ left: 0 }}>
      <Back />
    </Arrow>
  )
}
