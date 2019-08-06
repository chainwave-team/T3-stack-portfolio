import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Transition, config } from 'react-spring/renderprops'

import { Box } from '../utils/rebass'
import { breakpoints } from '../utils/theme'

export default function SplitWords({ words }) {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(words[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
      setWord(words[count % words.length])
    }, 3000)
    return () => clearInterval(interval)
  }, [count, words])

  return (
    <MediaQuery minWidth={breakpoints[1]}>
      {matches => (
        <Box position="relative" style={{ minHeight: '60px' }}>
          <Transition
            items={word}
            from={{
              opacity: 0,
              transform: 'scale(0)',
              position: 'absolute',
              width: matches ? '720px' : '100%'
            }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
            delay={-500}
            config={config.slow}
          >
            {item => item && (props => <span style={props}>{item}️</span>)}
          </Transition>
        </Box>
      )}
    </MediaQuery>
  )
}

SplitWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
}
