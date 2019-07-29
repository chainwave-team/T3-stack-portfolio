import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-spring/renderprops'

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
    <div style={{ minHeight: '100px', position: 'relative' }}>
      <Transition
        items={word}
        from={{ opacity: 0, transform: 'scale(0)', position: 'absolute' }}
        enter={{ opacity: 1, transform: 'scale(1)' }}
        leave={{ opacity: 0, transform: 'scale(0)' }}
        delay={-500}
      >
        {item => item && (props => <span style={props}>{item}️</span>)}
      </Transition>
    </div>
  )
}

SplitWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
}
