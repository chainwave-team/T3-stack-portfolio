import React from 'react'
import { Global, css } from '@emotion/core'

import normalize from './normalize'
import tachyonsDebug from './tachyons-debug'
import theme from '../gatsby-plugin-theme-ui'

const { colors, fonts } = theme

const isDev: boolean = process.env.NODE_ENV === 'development'

export default () => (
  <Global
    styles={css`
      ${normalize};
      ${isDev && tachyonsDebug};

      html {
        font-size: 62.5%;
        overflow-x: hidden;
      }

      body {
        font-size: 1.6em;
        line-height: 1.2;
        font-family: ${fonts.body};
        font-weight: 400;
        color: ${colors.white};
        background-color: ${colors.darkBlue};
        overflow-x: hidden;
      }

      ul {
        padding: 0;
      }
      li {
        text-decoration: none;
        list-style: none;
      }

      a,
      button {
        cursor: pointer;
        text-decoration: none;
        color: ${colors.cyan};
        transition: color 200ms ease;

        &:hover,
        &:focus {
          color: ${colors.pink};
        }
      }

      /* Custom ScrollBar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: ${colors.darkBlue};
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${colors.blue};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.pink};
      }
    `}
  />
)
