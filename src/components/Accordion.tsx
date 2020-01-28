/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'
import { useRef } from 'react'
import { animated, useSpring, config } from 'react-spring'

import Html from './Html'
import { ServicesStatus } from '../utils/types'

type Props = {
  status: ServicesStatus
  title?: string
  toggle: (height: number) => void
  open?: boolean
  height?: number
  content?: {
    html?: string
  }
}

export default function Accordion({
  title,
  status,
  content,
  open = false,
  toggle,
  height = 0
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const getHeight = (o: boolean, h: number) => {
    const tmpHeight = Number.isNaN(h) || typeof h === 'undefined' ? 'auto' : h
    return o ? tmpHeight : 0
  }

  const props = useSpring({
    from: { height: getHeight(!open, height) },
    to: { height: getHeight(open, height) },
    config: config.gentle
  })

  return (
    <Box>
      <Styled.a
        sx={{
          borderBottom: '1px solid',
          py: 3,
          width: '100%',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        onClick={() => toggle(ref.current.scrollHeight)}
      >
        <Styled.h4 sx={{ m: 0 }}>{title}</Styled.h4>
        {status === 'soon' && (
          <Styled.p sx={{ color: 'secondary', fontFamily: 'mono', m: 0 }}>
            Prochainement !
          </Styled.p>
        )}
        {status === 'new' && (
          <Styled.p sx={{ color: 'secondary', fontFamily: 'mono', m: 0 }}>
            New !
          </Styled.p>
        )}
      </Styled.a>

      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div ref={ref} sx={{ py: 2 }}>
          {content ? <Html html={content.html} /> : null}
        </div>
      </animated.div>
    </Box>
  )
}
