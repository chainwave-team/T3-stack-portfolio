import { Theme } from 'theme-ui'

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

const theme: Theme = {
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      backgroundColor: 'background',
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    h1: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 5
    },
    h2: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 4
    },
    h3: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 3
    },
    h4: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 2
    },
    h5: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 1
    },
    h6: {
      color: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 0
    },
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '0.5rem',
        px: 2,
        py: 1
      }
    },
    // ul: {
    //   padding: 0
    // },
    // li: {
    // textDecoration: 'none',
    // listStyle: 'none'
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
const { styles } = theme

export default styles
