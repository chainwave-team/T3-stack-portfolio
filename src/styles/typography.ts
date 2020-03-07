import { css } from '@emotion/core'

import FiraCode from '../assets/fonts/FiraMono-Regular.otf'
import FiraSans from '../assets/fonts/FiraSans-Regular.ttf'
import FiraSansMedium from '../assets/fonts/FiraSans-Medium.ttf'
import FiraSansBlack from '../assets/fonts/FiraSans-Black.ttf'
import FiraSansBold from '../assets/fonts/FiraSans-Bold.ttf'

export const fontFaces = css`
  /* Code - Mono */
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url(${FiraCode}) format('woOpenTypeff2');
  }

  /* Body */
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${FiraSans}) format('truetype');
  }
  @font-face {
    font-family: 'Fira Sans Medium';
    font-style: normal;
    font-weight: 500;
    src: url(${FiraSansMedium}) format('truetype');
  }

  /* Titles */
  @font-face {
    font-family: 'Fira Sans Bold';
    font-style: normal;
    font-weight: 700;
    src: url(${FiraSansBold}) format('truetype');
  }
  @font-face {
    font-family: 'Fira Sans Black';
    font-style: normal;
    font-weight: 900;
    src: url(${FiraSansBlack}) format('truetype');
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
  }
}

export default typography
