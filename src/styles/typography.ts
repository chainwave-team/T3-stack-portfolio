import { css } from '@emotion/core'

import FiraCode from '../assets/fonts/FiraMono-Regular.otf'

export const fontFaces = css`
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${FiraCode}) format('woOpenTypeff2');
  }
`

const typography = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body'
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
    mt: 2,
    fontSize: [6, 7],
    mb: 2
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mt: 5,
    fontSize: [5, 6],
    mb: 3
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mt: 4,
    fontSize: [4, 5],
    mb: 3
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 2,
    fontSize: [3, 4]
  },
  h5: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 2,
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
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3
  }
}

export default typography
