import { Theme } from 'theme-ui'

import typography from './typography'
import sizes from './sizes'
import colors from './colors'

const linkStyle = {
  color: 'primary',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 200ms ease',
  ':hover, :focus': {
    textDecoration: 'none',
    color: 'secondary'
  }
}

export const breakpoints = ['640px', '768px', '1024px', '1280px']

export type MyTheme = Theme

const theme: Readonly<MyTheme> = {
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: `"Courier Next", courier, monospace;`, // ? Fira
    heading: `"avenir next", avenir, sans-serif`,
    apple: `'San Francisco Text', 'avenir', sans-serif`,
    mono:
      '"Fira Code",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 700,
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.4,
    heading: 1.125
  },
  colors,
  shadows: [
    '0',
    '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
  ],
  breakpoints,
  sizes: {
    ...sizes,
    container: 1180,
    blog: 780
  },
  buttons: {
    primary: {
      fontWeight: 'bold',
      color: 'primary',
      bg: 'transparent',
      '&:hover': {
        color: 'secondary'
      }
    },
    secondary: {
      fontWeight: 'bold',
      color: 'secondary',
      bg: 'transparent',
      '&:hover': {
        color: 'primary'
      }
    }
  },
  styles: {
    ...typography,
    root: {
      ...typography.root,
      bg: 'background',
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    a: linkStyle,
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    pre: {
      fontFamily: 'mono',
      fontSize: 'inherit'
    },
    // Used for inline <code> in textarea
    code: {
      fontFamily: 'mono',
      '&.inline-code': {
        fontSize: 'text',
        fontFamily: 'code',
        lineHeight: 'body',
        fontWeight: 'body',
        color: 'dracula.green',
        bg: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '0.5rem',
        px: 2,
        py: 1
      }
    },
    // ul: {
    //   padding: 0
    // },
    // li: {
    //   textDecoration: 'none',
    //   listStyle: 'none'
    // },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
}

export default theme
