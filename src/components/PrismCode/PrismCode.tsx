/** @jsx jsx */
import { useRef, useEffect, FC, RefObject } from 'react'
import { jsx } from 'theme-ui'
import Prism from 'prismjs'
import { Global } from '@emotion/core'
import { useCopyToClipboard } from 'react-use'

import { cssByLang, getPrettyName, ProgrammingLang, ButtonCopy } from './utils'
import { toolbar, pre, wrapper } from './style'
import dracula from '../../styles/prism-dracula'
import useHover from '../../hooks/useHover'

export interface PrismCodeProps {
  code: string
  language?: ProgrammingLang
}

const PrismCode: FC<PrismCodeProps> = ({ code, language = 'markup' }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [hoverRef, isHovered] = useHover()
  const codeRef = useRef<HTMLPreElement>(null)

  const handleClick = () => {
    copyToClipboard(code)
  }

  useEffect(() => {
    if (codeRef?.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [codeRef, code])

  return (
    <div sx={wrapper} ref={hoverRef as RefObject<HTMLDivElement>}>
      <Global styles={dracula} />
      <div sx={toolbar}>
        <ButtonCopy
          isHover={isHovered}
          value={state.value}
          onClick={handleClick}
        />

        {language !== 'markup' ? (
          <span sx={{ ...cssByLang(language) }}>{getPrettyName(language)}</span>
        ) : null}
      </div>

      <pre className="line-numbers" sx={pre}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
}

export default PrismCode
