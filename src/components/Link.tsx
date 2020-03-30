/** @jsx jsx */
import { jsx, Link as BaseLink } from 'theme-ui'
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
      <BaseLink as={GatsbyLink} {...props}>
        {children}
      </BaseLink>
    )
  }
  return (
    <BaseLink href={to} target={target} onClick={handleClick} {...other}>
      {children}
    </BaseLink>
  )
}

export default Link
