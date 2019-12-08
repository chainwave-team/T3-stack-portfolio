/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRef } from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { Box, Text, Heading, Link } from 'rebass'

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

export default function Accordion(props: Props) {
  const { title, content, open, toggle, height } = props
  const ref = useRef(null)

  const getHeight = (o: boolean, h: number) => {
    const tmpHeight = Number.isNaN(h) || typeof h === 'undefined' ? 'auto' : h
    return o ? tmpHeight : 0
  }

  return (
    <Box>
      <Heading
        sx={{
          borderBottom: '1px solid',
          cursor: 'pointer',
          display: 'block',
          fontSize: [3, 3, 4],
          py: 3,
          color: 'white',
          fontFamily: 'heading',
          fontWeight: 7
        }}
        as={Link}
        role="button"
        onClick={() => toggle(ref.current.scrollHeight)}
      >
        {title}
      </Heading>

      <Spring
        from={{ overflow: 'hidden', height: getHeight(!open, height) }}
        to={{ height: getHeight(open, height) }}
      >
        {styles => (
          <animated.div style={styles}>
            <Text
              ref={ref}
              sx={{
                py: 3,
                px: 0,
                m: 0
              }}
              as="div"
            >
              <Html html={content.html} />
            </Text>
          </animated.div>
        )}
      </Spring>
    </Box>
  )
}

Accordion.defaultProps = {
  open: false,
  height: 0,
  content: {
    html: ''
  }
}
