/** @jsx jsx */
import { useRef, useEffect, FC, RefObject } from 'react'
import { jsx } from 'theme-ui'
import Prism from 'prismjs'
import { Global } from '@emotion/core'

import { ProgrammingLang } from './utils'
import dracula from '../../styles/prism-dracula'
import useHover from '../../hooks/useHover'
import PrismCodeToolbar from './PrismCodeToolbar'

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const sx = {
  root: {
    position: 'relative',
    boxShadow: 1,
    bg: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '0.5rem',
    my: 5,
    mx: [0, 0, 0, -4]
  },
  pre: {
    pt: 0,
    pb: 4,
    px: [3, 3, 4],
    overflowX: 'auto',
    maxWidth: '100%'
  }
}

export interface PrismCodeProps {
  code: string
  language?: ProgrammingLang
}

const PrismCode: FC<PrismCodeProps> = ({ code, language = 'markup' }) => {
  const [hoverRef, isHovered] = useHover()
  const codeRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (codeRef?.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [codeRef, code])

  return (
    <div sx={sx.root} ref={hoverRef as RefObject<HTMLDivElement>}>
      <Global styles={dracula} />

      <PrismCodeToolbar
        code={code}
        language={language}
        isCodeHovered={isHovered}
      />

      <pre className="line-numbers" sx={sx.pre}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
}

export default PrismCode
