import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-spring/renderprops'

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
    this.timer = setInterval(() => {
      this.setState((state, props) => {
        return {
          counter: state.counter + 1,
          word: props.words[state.counter % state.wordsLength]
        }
      })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { word } = this.state
    return (
      <div style={{ minHeight: '80px', position: 'relative' }}>
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
}

export default SplitWords
