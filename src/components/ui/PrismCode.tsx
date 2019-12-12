/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from 'theme-ui'
import Prism from 'prismjs'
import { Global, css } from '@emotion/core'

import Html from './Html'

import 'prismjs/components/prism-markup-templating' // Must be first
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-php'

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min'

import dracula from '../../libs/dracula-prismjs'

type Props = {
  code: string
  language?:
    | 'javascript'
    | 'jsx'
    | 'typescript'
    | 'tsx'
    | 'bash'
    | 'yaml'
    | 'json'
    | 'css'
    | 'scss'
    | 'markdown'
    | 'graphql'
    | 'sql'
    | 'php'
    | 'markup'
}

export default function PrismCode({ code, language = 'markup' }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <pre>
      <Global
        styles={css`
          ${dracula};
        `}
      />
      <code className={`language-${language}`}>
        <Html html={code} />
      </code>
    </pre>
  )
}
