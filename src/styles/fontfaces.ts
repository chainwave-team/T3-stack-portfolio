import { css } from '@emotion/core'

import FiraCode from '../assets/fonts/FiraMono-Regular.otf'
import FiraSansRegular from '../assets/fonts/FiraSans-Regular.ttf'
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
    font-family: 'Fira Sans Regular';
    font-style: normal;
    font-weight: 400;
    src: url(${FiraSansRegular}) format('truetype');
  }

  /* Titles */
  @font-face {
    font-family: 'Fira Sans Bold';
    font-style: normal;
    font-weight: 700;
    src: url(${FiraSansBold}) format('truetype');
  }
`

export default fontFaces
