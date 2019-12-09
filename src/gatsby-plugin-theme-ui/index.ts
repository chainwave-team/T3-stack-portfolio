import tailwind from './tailwind-theme'

export type Theme = {
  space: Array<number>
  fonts: {
    body: string
    heading: string
    apple: string
  }
  fontSizes: Array<number>
  fontWeights: Array<number>
  lineHeights: {
    body: number
    heading: number
  }
  colors: {
    black: string
    white: string
    grey: Array<string | null>
    cyan: string
    blue: string
    darkBlue: string
    pink: string
  }
  radii: Array<string | number>
  shadows: Array<string | null>
  transitions: Array<number>
  breakpoints: Array<number | string>
  maxWidths: {
    small: number
    medium: number
    large: number
  }
  sizes: {
    small: number
    medium: number
    large: number
    container: number
  }
}

// Base theme
const baseTheme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: `"Courier Next", courier, monospace;`,
    heading: `"avenir next", avenir, sans-serif`,
    apple: `'San Francisco Text', 'avenir', sans-serif`
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    black: `#000000`,
    white: `#ffffff`,
    grey: [
      null,
      `rgba(255, 255, 255, 0.1)`,
      `rgba(255, 255, 255, 0.2)`,
      `rgba(255, 255, 255, 0.3)`,
      `rgba(255, 255, 255, 0.4)`,
      `rgba(255, 255, 255, 0.5)`,
      `rgba(255, 255, 255, 0.6)`,
      `rgba(255, 255, 255, 0.7)`,
      `rgba(255, 255, 255, 0.8)`,
      `rgba(255, 255, 255, 0.9)`,
      `rgba(255, 255, 255, 1)`
    ],

    cyan: `rgb(91, 192, 190)`,
    blue: `rgb(28, 37, 65)`,
    darkBlue: `rgb(11, 19, 43)`,
    pink: `rgb(225, 69, 148)`
  },
  radii: [0, 1, 2, 4, 8, '100%', 9999],
  shadows: [
    '0',
    '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
  ],
  transitions: [0.25, 0.5, 1, 2.5],
  // breakpoints: [640, 832, 960],
  sizes: {
    small: 750,
    medium: 1000,
    large: 1250,
    ...tailwind.sizes,
    container: 1180
  },
  breakpoints: [...tailwind.breakpoints]
  // styles: {
  //   root: {}, h1: {}
  // }
}

export const buttons = {
  primary: {
    color: baseTheme.colors.cyan,
    hoverColor: baseTheme.colors.pink
  }
}

// merge
const theme = { ...baseTheme, buttons }

export default theme
