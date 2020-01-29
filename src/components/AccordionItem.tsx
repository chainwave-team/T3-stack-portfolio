/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { useRef, ReactNode, Fragment } from 'react'
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
    <Fragment>
      <Box onClick={handleClick}>{title}</Box>
      <animated.div style={{ overflow: 'hidden', ...props }}>
        <div ref={ref}>{content}</div>
      </animated.div>
    </Fragment>
  )
}
