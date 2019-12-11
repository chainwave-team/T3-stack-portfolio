import typography from './typography'
import sizes from './sizes'
import colors from './colors'
import { themeType } from './themeType'

const linkStyle = {
  color: 'cyan',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 200ms ease',
  ':hover, :focus': {
    textDecoration: 'none',
    color: 'secondary'
  }
}

const theme: themeType = {
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: `"Courier Next", courier, monospace;`, // ? Fira
    heading: `"avenir next", avenir, sans-serif`,
    apple: `'San Francisco Text', 'avenir', sans-serif`,
    code: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace' // TODO : Fira
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px'
  ],
  fontWeights: {
    thin: '200',
    normal: '400',
    bold: '700',
    body: '400',
    heading: '700'
  },
  lineHeights: {
    body: 1.4,
    heading: 1.125
  },
  colors,
  radii: [0, 1, 2, 4, 8, 9999],
  shadows: [
    '0',
    '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
  ],
  transitions: [0.25, 0.5, 1, 2.5],
  breakpoints: ['640px', '768px', '1024px', '1280px'],
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
    }
  },
  styles: {
    ...typography,
    root: {
      ...typography.root,
      bg: 'darkBlue',
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    a: linkStyle,
    button: linkStyle,

    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
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
