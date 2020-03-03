/** @jsx jsx */
import { useRef, useState, useEffect, FC } from 'react'
import { jsx } from 'theme-ui'
import Prism from 'prismjs'
import { Global } from '@emotion/core'
import { useCopyToClipboard } from 'react-use'

import Button from '../tmp/Button'

import { PrismCodeProps, cssByLang, getPrettyName } from './utils'
import { toolbar, pre, wrapper, dracula } from './style'

const PrismCode: FC<PrismCodeProps> = ({ code }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [isHover, setHover] = useState(false)
  const codeRef = useRef<HTMLPreElement>(null)

  const language = code?.raw[0]?.label || 'markup'

  const handleClick = () => {
    copyToClipboard(code.text)
  }

  useEffect(() => {
    if (codeRef?.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [codeRef])

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
          onClick={handleClick}
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
          {state.value ? <span>Copié!</span> : <span>Copier</span>}
        </Button>

        {language !== 'markup' ? (
          <span sx={{ ...cssByLang(language) }}>{getPrettyName(language)}</span>
        ) : null}
      </div>

      <pre className="line-numbers" sx={pre}>
        <code ref={codeRef} className={`language-${language}`}>
          {code.text.trim()}
        </code>
      </pre>
    </div>
  )
}

export default PrismCode
