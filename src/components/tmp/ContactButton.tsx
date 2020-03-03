/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as ScrollLink } from 'react-scroll'

// import Link from './Link'
import Button from './Button'

/*
 * This component link to footer as anchor.
 * Soon, it will be a page link to /contact page

    <Link to="/contact" onClick={handleClick}>
        <Button>Me contacter</Button>
    </Link>
 */

interface Props {
  title?: string
  onClick?: () => void
}

export default function ContactButton({
  title = 'Contactez moi',
  onClick
}: Props) {
  return (
    <ScrollLink to="footer" smooth isDynamic onClick={onClick}>
      <Button>{title}</Button>
    </ScrollLink>
  )
}
