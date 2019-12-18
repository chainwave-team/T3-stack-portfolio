/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import Prism from 'prismjs'
import { Global } from '@emotion/core'
import { useCopyToClipboard } from 'react-use'

import Html from '../Html'
import Button from '../Button'

import dracula from './dracula-prismjs'
import { ProgrammingLangs, cssByLang, getPrettyName } from './utils'
import { toolbar, pre, wrapper } from './style'

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
import 'prismjs/plugins/line-numbers/prism-line-numbers'

type Props = {
  code: {
    text: string
    html: string
    raw: {
      label?: ProgrammingLangs
    }[]
  }
}

export default function PrismCode({ code }: Props) {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [isHover, setHover] = React.useState(false)
  const language = code.raw[0].label ? code.raw[0].label : 'markup'

  React.useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div
      sx={wrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Global styles={dracula} />
      <div sx={toolbar}>
        <Button
          size="small"
          onClick={() => copyToClipboard(code.text)}
          sx={{
            border: 'none',
            opacity: isHover ? 1 : 0,
            transition: 'opacity 200ms',
            zIndex: 25,
            ':hover': {
              opacity: 1
            }
          }}
        >
          {state.value ? <>Copied!</> : <>Copy</>}
        </Button>

        {language !== 'markup' ? (
          <span sx={{ ...cssByLang(language) }}>{getPrettyName(language)}</span>
        ) : null}
      </div>

      <pre className="line-numbers" sx={pre}>
        <code className={`language-${language}`}>
          <Html html={code.html} />
        </code>
      </pre>
    </div>
  )
}
