/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { useSpring, animated, config } from 'react-spring'

import { Children } from '../utils/types'

export default function Fade({ children }: { children: Children }) {
  const [isVisible, setVisible] = useState(false)
  const css = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translate3d(0, 0, 0) scale(1) skew(0, 0)'
        : 'translate3d(0, -10%, 0) scale(0.5) skew(5deg, 3deg)'
    },
    config: config.gentle
  })

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible: boolean) => setVisible(visible)}
    >
      <animated.div style={css}>{children}</animated.div>
    </VisibilitySensor>
  )
}
