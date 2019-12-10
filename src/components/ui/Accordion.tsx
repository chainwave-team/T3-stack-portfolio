/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'
import { useRef } from 'react'
import { animated, useSpring, config } from 'react-spring'

import Html from './Html'

type Props = {
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
  content,
  open = false,
  toggle,
  height = 0
}: Props) {
  const ref = useRef(null)

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
      <Styled.h4>
        <Styled.a
          sx={{
            borderBottom: '1px solid',
            display: 'block',
            py: 3,
            color: 'white'
          }}
          onClick={() => toggle(ref.current.scrollHeight)}
        >
          {title}
        </Styled.a>
      </Styled.h4>

      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div ref={ref} sx={{ py: 2 }}>
          {content ? <Html html={content.html} /> : null}
        </div>
      </animated.div>
    </Box>
  )
}
