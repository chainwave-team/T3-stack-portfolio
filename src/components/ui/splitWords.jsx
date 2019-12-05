import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { useTransition, animated } from 'react-spring'

import { Box } from '../../utils/rebass'
import { breakpoints } from '../../utils/theme'

export default function SplitWords({ words }) {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(words[0])
  const transitions = useTransition(word, null, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
      position: 'absolute',
      wordBreak: 'break-word'
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
      setWord(words[count % words.length].trim())
    }, 3000)
    return () => clearInterval(interval)
  }, [count, words])

  return (
    <MediaQuery minWidth={breakpoints[1]}>
      {matches => (
        <Box
          position="relative"
          style={{ minHeight: '60px', minWidth: matches ? '720px' : '100%' }}
        >
          {transitions.map(({ item, key, props }) =>
            item ? (
              <animated.div key={key} style={props}>
                {item}
              </animated.div>
            ) : null
          )}
        </Box>
      )}
    </MediaQuery>
  )
}

SplitWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
}
