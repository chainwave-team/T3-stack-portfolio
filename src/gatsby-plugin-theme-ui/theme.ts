import { Theme } from 'theme-ui'

import typography from './typography'
import sizes from './sizes'
import colors from './colors'

export { colors }

export const hoverStyle = {
  cursor: 'pointer',
  transition: 'color 200ms ease',
  '&:hover, &:focus': {
    textDecoration: 'none',
    color: 'secondary'
  }
}

const linkStyle = {
  color: 'primary',
  textDecoration: 'none',
  ...hoverStyle
}

export const breakpoints = ['640px', '768px', '1024px', '1280px']

export type MyTheme = Theme

const theme: Readonly<MyTheme> = {
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
  colors,
  shadows: [
    '0',
    '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )',
    'rgba(0, 0, 0, 0.2) 0px 30px 60px -10px, rgba(0, 0, 0, 0.22) 0px 18px 36px -18px'
  ],
  breakpoints,
  sizes,
  layout: {
    container: {
      maxWidth: sizes.container,
      padding: '0 1em'
    },
    blog: {
      maxWidth: sizes.blog,
      padding: '0 1em'
    }
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
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
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
        fontSize: 'body',
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
