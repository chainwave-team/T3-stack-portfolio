/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import { Children } from '../utils/types'

type Props = {
  to: string
  children: Children
  // pass it only to GatsbyLink
  activeClassName?: string
  partiallyActive?: boolean
  // Else <a></a>
  target?: string
}

const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  target = '',
  ...other
}: Props) => {
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <Styled.a
        as={GatsbyLink}
        to={to}
        activeClassName={activeClassName || 'active'}
        partiallyActive={partiallyActive || false}
        {...other}
      >
        {children}
      </Styled.a>
    )
  }
  return (
    <Styled.a href={to} target={target} {...other}>
      {children}
    </Styled.a>
  )
}
export default Link
