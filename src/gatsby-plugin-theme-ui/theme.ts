import { Theme } from 'theme-ui'

import variants from './variants'
import styles, { hoverStyle } from './styles'
import sizes from './sizes'
import colors from './colors'

const breakpoints = ['640px', '768px', '1024px', '1280px']

const theme: Readonly<Theme> = {
  radii: [0],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: `'Fira Sans Regular','SF Pro Display','-apple-system','BlinkMacSystemFont','San Francisco','Helvetica Neue','Helvetica','Ubuntu','Roboto','Noto','Segoe UI','Arial',sans-serif`,
    heading: `"Fira Sans Bold","avenir next", avenir, sans-serif`,
    mono: `"Fira Code",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: [14, 16, 20, 24, 36, 48, 64, 80, 96],
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 700,
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125
  },
  shadows: [
    '0',
    '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )',
    'rgba(0, 0, 0, 0.2) 0px 30px 60px -10px, rgba(0, 0, 0, 0.22) 0px 18px 36px -18px'
  ],
  colors,

  breakpoints,
  sizes,
  ...variants,
  styles
}

export default theme

export { colors, hoverStyle, breakpoints }
