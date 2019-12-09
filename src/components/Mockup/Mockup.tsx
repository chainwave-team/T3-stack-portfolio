/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Box } from 'rebass'

import GithubCorner from '../ui/GithubCorner'
import ScrollSVG from '../../images/arrows-v-alt.svg'
import styled from '../../utils/styled'
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
      <Screen bg={colors[colorTheme].bg}>
        <Navbar theme={colorTheme} url={siteUrl} screenWidth={screen.width} />
        <ScrollWrap>
          {srcUrl && <GithubCorner url={srcUrl} />}
          <ScrollSVG />

          <Scrollable>
            <img
              src={fluid.src}
              srcSet={fluid.srcSet}
              width="100%"
              height="auto"
              alt=""
            />
          </Scrollable>
        </ScrollWrap>
      </Screen>
    </Box>
  )
}

const move = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-1em); }
  100% { transform: translateY(0); }
`
const Screen = styled(Box)`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
`

const ScrollWrap = styled(Box)`
  position: relative;
  height: 450px;
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

const Scrollable = styled.div({
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
})

export default Mockup
