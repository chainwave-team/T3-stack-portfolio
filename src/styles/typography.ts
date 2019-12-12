import dracula from '@theme-ui/prism/presets/dracula'

const typography = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    bg: 'bg'
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body'
  },
  h1: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: [6, 7],
    mt: 2
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: [3, 4, 5, 7],
    mt: 2
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: [4, 5],
    mt: 3
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: [3, 4, 5, 7]
  },
  h5: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: [2, 3]
  },
  h6: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 2,
    fontSize: [1, 2]
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    bg: 'black',
    my: 4,
    mx: -4,
    px: 4,
    py: 3
    // code: {
    //   color: 'inherit'
    // }
  },
  code: {
    // ...dracula,
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3
  }
}

export default typography
