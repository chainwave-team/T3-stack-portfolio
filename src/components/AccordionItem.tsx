/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useRef, ReactNode } from 'react'
import { animated, useSpring, config } from 'react-spring'

export interface ToggleAttr {
  height: number
  index: number
}

export interface Props {
  index: number
  title: ReactNode
  toggle?: (arg0: ToggleAttr) => void
  open?: boolean
  height?: number
  content: ReactNode
}

export default function AccordionItem({
  title,
  content,
  open = false,
  toggle,
  height = 0,
  index
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

  const handleClick = () =>
    toggle && toggle({ height: ref?.current?.scrollHeight || 0, index })

  return (
    <Box onClick={handleClick}>
      {title}
      <animated.div ref={ref} style={{ overflow: 'hidden', ...props }}>
        {content}
      </animated.div>
    </Box>
  )
}
