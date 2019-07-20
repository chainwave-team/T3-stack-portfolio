import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { animated, useTransition } from 'react-spring'
import uniqid from 'uniqid'

class SplitWords extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      word: props.words[0],
      wordsLength: props.words.length
    }
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.setState((state, props) => {
        return {
          counter: state.counter + 1,
          word: props.words[state.counter % state.wordsLength]
        }
      })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.Timer)
  }

  render() {
    const { word } = this.state
    return <SplitText word={word} />
  }
}

export function SplitText({ word }) {
  const wordArray = word.split('')
  const transitions = useTransition(wordArray, item => item, {
    from: { opacity: 0, overflow: 'hidden' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 50
  })
  return transitions.map(({ item, key, props }) => (
    <animated.span key={uniqid(key)} style={props}>
      {item}
    </animated.span>
  ))
}

SplitText.propTypes = {
  word: PropTypes.string
}

SplitText.defaultProps = {
  word: ''
}

export default SplitWords
