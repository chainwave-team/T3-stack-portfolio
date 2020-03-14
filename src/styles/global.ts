import { css } from '@emotion/core'

import { colors } from '../gatsby-plugin-theme-ui/theme'

export const globalStyle = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-size: inherit;
    font-display: block;
  }

  body {
    margin: 0;
    height: 100%;
  }

  a:focus,
  button:focus {
    outline: none;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
    transition: color 200ms ease;
  }

  article {
    word-break: break-word;
  }

  .underline {
    text-decoration: underline;
  }
`

export const scrollBar = css`
  /* Custom ScrollBar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.background};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.blue};
    transition: background 200ms;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.secondary};
    transition: background 200ms;
  }
`
