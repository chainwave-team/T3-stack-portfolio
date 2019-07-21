import { createGlobalStyle } from 'styled-components'

import normalize from './normalize'
import tachyonsDebug from './tachyons-debug'
import { colors, fonts, transitions } from './theme'

export const isDev = process.env.NODE_ENV === 'development'

const GlobalStyle = createGlobalStyle`

  ${normalize};
  ${isDev && tachyonsDebug};  

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-size: 1.5em;
    line-height: 1.2;
    font-family: ${fonts.text};
    font-weight: 400;
    color: ${colors.white};
    background-color: ${colors.darkBlue};
    overflow-x: hidden;
  }
  
  ul { padding: 0;}
  li { text-decoration: none; list-style: none;}
  
  a, button {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.cyan};
    transition: all ${transitions[0]} ease-in-out;
  
    &:hover,
    &:focus {
      color: ${colors.pink};
    }
  }
`

export default GlobalStyle
