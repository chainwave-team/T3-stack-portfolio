/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'

export interface LinkProps {
  to: string
  onClick?: () => void
  target?: string
  title?: string
}

const Link: FC<LinkProps> = ({
  children,
  to,
  target = '',
  onClick,
  ...other
}) => {
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
