/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes, css } from '@emotion/core'
import Img from 'gatsby-image'
import { FC, RefObject } from 'react'

import GithubCorner from '../GithubCorner'
import ScrollSVG from '../../assets/svg/arrows-v-alt.svg'
import MockupNavbar from './MockupNavbar'
import { colors } from './MockupColors'
import useHover from '../../hooks/useHover'

const ScrollIconSize = 32

const move = keyframes`
  from, to { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -0.5em, 0); }
`

const style = {
  browser: {
    width: 'auto',
    maxWidth: '100%',
    boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    overflow: 'hidden',
    color: colors.dark.bg,
    bg: 'black'
  },
  screen: {
    position: 'relative',
    height: ['300px', '350px', '400px', '450px']
  },
  scrollIcon: {
    position: 'absolute',
    top: '85%',
    left: `calc(50% - (${ScrollIconSize}px / 2))`,
    zIndex: 10,
    '& > svg': {
      opacity: '1',
      transition: 'opacity 200ms',
      zIndex: '5',
      fill: 'primary',
      height: `${ScrollIconSize}px`,
      width: `${ScrollIconSize}px`
    }
  },
  scrollArea: {
    width: '100%',
    maxWidth: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
    '::-webkit-scrollbar': {
      width: '2px'
    },
    '::-webkit-scrollbar-track': {
      background: colors.light.bg
    },
    '::-webkit-scrollbar-thumb': {
      background: colors.light.font
    }
  }
}

export interface MockupProps {
  fluid: any
  title: string
  siteUrl?: string
  srcUrl?: string
}

const Mockup: FC<MockupProps> = ({
  fluid,
  title = '',
  siteUrl = '',
  srcUrl = ''
}) => {
  const [hoverRef, isHovered] = useHover()
  return (
    <div sx={style.browser}>
      <MockupNavbar theme="dark" url={siteUrl} />
      <div sx={style.screen} ref={hoverRef as RefObject<HTMLDivElement>}>
        {srcUrl && <GithubCorner url={srcUrl} />}
        <div
          sx={{ ...style.scrollIcon, opacity: isHovered ? 0 : 1 }}
          css={css`
            animation: ${move} 1200ms ease-out infinite;
          `}
        >
          <ScrollSVG />
        </div>
        <div sx={style.scrollArea}>
          <Img fadeIn fluid={fluid} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Mockup
