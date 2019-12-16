/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { keyframes } from '@emotion/core'

import GithubCorner from '../GithubCorner'
import ScrollSVG from '../../assets/svg/arrows-v-alt.svg'
import Navbar from './Navbar'
import { colors, screen } from './config'

const ScrollIconSize = 32

const getTheme = (index: number) => (index % 2 === 0 ? 'dark' : 'light')

type Props = {
  index: number
  fluid: any
  siteUrl?: string
  srcUrl?: string
}

// ? Move into 'animations' files ?
const move = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-1em); }
  100% { transform: translateY(0); }
`

const Mockup = ({ siteUrl = '', fluid, index, srcUrl = '' }: Props) => {
  const colorTheme = getTheme(index)
  return (
    <Box
      sx={{
        m: 'auto',
        width: screen.width,
        maxWidth: '100%'
      }}
    >
      <div
        sx={{
          boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
          borderRadius: '5px',
          overflow: 'hidden',
          color: colors[colorTheme].bg
        }}
      >
        <Navbar theme={colorTheme} url={siteUrl} screenWidth={screen.width} />
        <div
          sx={{
            position: 'relative',
            height: '450px',
            '& > svg': {
              opacity: '1',
              transition: 'opacity 200ms',
              position: 'absolute',
              top: '85%',
              left: `calc(50% - (${ScrollIconSize}px / 2))`,
              transform: 'translate(-100%)',
              zIndex: '5',
              fill: 'primary',
              height: `${ScrollIconSize}px`,
              width: `${ScrollIconSize}px`,
              animation: `${move} 200s ease-out infinite`
            },
            '&:hover > svg': {
              opacity: '0'
            }
          }}
        >
          {srcUrl && <GithubCorner url={srcUrl} />}
          <ScrollSVG />

          <div
            sx={{
              width: '100%',
              maxWidth: '100%',
              overflow: 'auto',
              overflowX: 'hidden',
              position: 'relative',
              height: '450px',
              '::-webkit-scrollbar': {
                width: '2px'
              },
              '::-webkit-scrollbar-track': {
                background: colors.light.bg
              },
              '::-webkit-scrollbar-thumb': {
                background: colors.light.font
              }
            }}
          >
            <img
              src={fluid.src}
              srcSet={fluid.srcSet}
              width="100%"
              height="auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Mockup
