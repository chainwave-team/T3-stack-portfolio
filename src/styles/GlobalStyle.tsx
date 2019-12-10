import React from 'react'
import { Global, css } from '@emotion/core'

import normalize from './normalize'
import tachyonsDebug from './tachyons-debug'
import theme from './theme'

const { colors } = theme

const isDev: boolean = process.env.NODE_ENV === 'development'

export default () => (
  <Global
    styles={css`
      ${normalize};
      ${!isDev && tachyonsDebug};

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
        transition: background 200ms;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.pink};
        transition: background 200ms;
      }
    `}
  />
)
