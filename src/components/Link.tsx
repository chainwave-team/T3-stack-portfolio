/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { SFC } from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface Props {
  to: string
  onClick?: () => void
  target?: string
  title?: string
}

const Link: SFC<Props> = ({ children, to, target = '', onClick, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  const handleClick = () => {
    if (typeof onClick !== 'undefined') {
      onClick()
    }
  }

  if (internal) {
    const props = { ...other, to, onClick: handleClick }
    return (
      <Styled.a as={GatsbyLink} {...props}>
        {children}
      </Styled.a>
    )
  }
  return (
    <Styled.a href={to} target={target} onClick={handleClick} {...other}>
      {children}
    </Styled.a>
  )
}

export default Link
